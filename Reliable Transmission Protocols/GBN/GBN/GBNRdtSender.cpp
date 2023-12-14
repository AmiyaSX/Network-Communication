#include "stdafx.h"
#include "Global.h"
#include "GBNRdtSender.h"


GBNRdtSender::GBNRdtSender():base(1),nextseqnum(1), waitingState(false), num_packet_win(0)
{
}


GBNRdtSender::~GBNRdtSender()
{
}



bool GBNRdtSender::getWaitingState() {
	return waitingState;
}




bool GBNRdtSender::send(const Message& message) {
	if (nextseqnum < base + len) {
		this->waitingState = false; //��Ǵ�ʱ����δ��
		this->win[num_packet_win].acknum = -1; //ack��Ϊ-1
		this->win[num_packet_win].seqnum = this->nextseqnum; //ָ����һ������
		this->win[num_packet_win].checksum = 0;//������0
		memcpy(this->win[num_packet_win].payload, message.data, sizeof(message.data));//��������

		this->win[num_packet_win].checksum = pUtils->calculateCheckSum(this->win[num_packet_win]);//�������
		pUtils->printPacket("���ͷ����ͱ���", this->win[num_packet_win]);
		if (base == nextseqnum)//��Ϊ������Ԫ����򿪼�ʱ��
			pns->startTimer(SENDER, Configuration::TIME_OUT, this->win[num_packet_win].seqnum);

		pns->sendToNetworkLayer(RECEIVER, this->win[num_packet_win]);//���ͱ����������
		this->num_packet_win++;//������packet��Ŀ+1

		if (num_packet_win > len)//�жϴ����Ƿ���
			this->waitingState = true;//�������ˣ�

		this->nextseqnum++;//������һ����
		return true;
	}
	else {
		this->waitingState = true;
		return false;
	}
}

void GBNRdtSender::receive(const Packet& ackPkt) {
	if (this->num_packet_win > 0) { //���ڱ���������0

		//���У����Ƿ���ȷ
		int checkSum = pUtils->calculateCheckSum(ackPkt);

		//���У�����ȷ������ȷ�����=���ͷ��ѷ��Ͳ��ȴ�ȷ�ϵ����ݰ����
		if (checkSum == ackPkt.checksum && ackPkt.acknum >= this->base) {

			int num = ackPkt.acknum - this->base + 1;	//��¼�յ���ack���

			base = ackPkt.acknum + 1; 
			pUtils->printPacket("���ͷ���ȷ�յ�ȷ��", ackPkt);

			if (this->base == this->nextseqnum)
				pns->stopTimer(SENDER, this->win[0].seqnum);//������ֹͣ
			else { //������ʱ��
				pns->stopTimer(SENDER, this->win[0].seqnum);
				pns->startTimer(SENDER, Configuration::TIME_OUT, this->win[num].seqnum); 
			}

			for (int i = 0; i < num_packet_win - num; i++)
			{
				win[i] = win[i + num];//�������ڵ�packet��ǰ�ƶ�numλ
				printf("The current windows's %d number is %d\n", i, win[i].seqnum);
			}
			this->num_packet_win = this->num_packet_win - num; //�����ڰ���Ŀ��ȥnum
		}
		
	}
}

void GBNRdtSender::timeoutHandler(int seqNum) {
	
	pUtils->printPacket("���ͷ���ʱ��ʱ�䵽���ط��ϴη��͵ı���", this->win[0]);
	pns->stopTimer(SENDER, this->win[0].seqnum);
	pns->startTimer(SENDER, Configuration::TIME_OUT, this->win[0].seqnum);
	for (int i = 0; i < num_packet_win; i++)
	{
		pns->sendToNetworkLayer(RECEIVER, this->win[i]);			//���·������ݰ�
	}

}
