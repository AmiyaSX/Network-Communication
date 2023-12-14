#include "stdafx.h"
#include "Global.h"
#include "SrRdtSender.h"

SrRdtSender::SrRdtSender() :send_base(0), nextseqnum(0) {
	memset(snd, false, 8);
}

SrRdtSender::~SrRdtSender() {

}

bool SrRdtSender::getWaitingState() {
	if (nextseqnum == (send_base + 4) % 8) {
		return true;
	}
	else return false;
}

bool SrRdtSender::send(const Message& message) {
	if (getWaitingState() == true)
		return false;
	snd[nextseqnum] = false;//δȷ��
	sndpkt[nextseqnum].acknum = -1;//���Ը��ֶ�

	sndpkt[nextseqnum].seqnum = nextseqnum;//��ǰ������ż�Ϊnextseqnum
	sndpkt[nextseqnum].checksum = 0;//У���Ϊ0
	memcpy(sndpkt[nextseqnum].payload, message.data, sizeof(message.data));
	//message���
	sndpkt[nextseqnum].checksum = pUtils->calculateCheckSum(sndpkt[nextseqnum]);
	//���㵱ǰ����У���
	pUtils->printPacket("���ͷ����ͱ���", sndpkt[nextseqnum]);
	pns->stopTimer(SENDER, nextseqnum);
	pns->startTimer(SENDER, Configuration::TIME_OUT, nextseqnum);//Ϊ��һ��Ԫ������ʱ��
	pns->sendToNetworkLayer(RECEIVER, sndpkt[nextseqnum]);//��������
	nextseqnum = (nextseqnum + 1) % M;//����

	return true;
}

void SrRdtSender::receive(const Packet& ackPkt) {
	if (send_base != nextseqnum) {//baseûȷ����
		//���У����Ƿ���ȷ
		int checkSum = pUtils->calculateCheckSum(ackPkt);
		if (checkSum == ackPkt.checksum) {
			if (((send_base + N - 1) % M > send_base && (ackPkt.acknum >= send_base && ackPkt.acknum <= (send_base + N - 1) % M))
				|| ((send_base + N - 1) % M < send_base && ((ackPkt.acknum >= send_base && ackPkt.acknum <= M - 1) 
				|| ackPkt.acknum <= (send_base + N - 1) % M)))
			{
				snd[ackPkt.acknum] = true;//���Ϊ��ȷ��
				pns->stopTimer(SENDER, ackPkt.acknum);
				pUtils->printPacket("���ͷ���ȷ�յ�ȷ��", ackPkt);
				if (send_base == ackPkt.acknum) {
					int i = send_base;
					for (; i != nextseqnum;)
					{
						if (snd[i] == false) break;
						i = (i + 1) % M;
					}
					cout << "�����ƶ�ǰ��" << endl;
					for (int i = send_base; i != nextseqnum; ) {
						//�������
						Message msg;

						memcpy(msg.data, sndpkt[i].payload, sizeof(sndpkt[i].payload));
						msg.data[21] = '\0';
						cout << msg.data << endl;
						i = (i + 1) % M;
					}
					cout << endl;
					send_base = i;
					cout << "�����ƶ���" << endl;
					for (int i = send_base; i != nextseqnum; ) {
						//�������
						Message msg;
						memcpy(msg.data, sndpkt[i].payload, sizeof(sndpkt[i].payload));
						msg.data[21] = '\0';
						cout << msg.data << endl;
						i = (i + 1) % M;
					}
					cout << endl;
				}
			}
		}
	}
}



void SrRdtSender::timeoutHandler(int seqNum) {
	pns->stopTimer(SENDER, seqNum);
	pns->startTimer(SENDER, Configuration::TIME_OUT, seqNum);//ΪԪ������ʱ��
		//��ʼ�ط�
	pns->sendToNetworkLayer(RECEIVER, sndpkt[seqNum]);//��������
	pUtils->printPacket("���ͷ���ʱ��ʱ�䵽���ط��ϴη��͵ı���", sndpkt[seqNum]);
}