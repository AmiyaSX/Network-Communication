#include "Global.h"
#include "TCPRdtSender.h"
TCPRdtSender::TCPRdtSender() :base(1), nextseqnum(1), waitingState(false), num_pac_win(0) {}

TCPRdtSender::~TCPRdtSender() {}

bool TCPRdtSender::getWaitingState()
{
    return waitingState;
}


bool TCPRdtSender::send(const struct Message& message)
{
    if (nextseqnum < base + len)        //����δ��
    {
        this->waitingState = false;
        this->win[num_pac_win].acknum = -1;
        this->win[num_pac_win].seqnum = this->nextseqnum;
        this->win[num_pac_win].checksum = 0;
        memcpy(this->win[num_pac_win].payload, message.data, sizeof(message.data)); //��ȡӦ�ò�����
        this->win[num_pac_win].checksum = pUtils->calculateCheckSum(this->win[num_pac_win]);    //�������

        pUtils->printPacket("���ͷ����ͱ���", this->win[num_pac_win]);
        if (base == nextseqnum) //base�ı��ģ���������ʱ��
            pns->startTimer(SENDER, Configuration::TIME_OUT, this->win[num_pac_win].seqnum);
        pns->sendToNetworkLayer(RECEIVER, this->win[num_pac_win]);


        this->num_pac_win++;//������packet+1

        if (num_pac_win > len)//����
            this->waitingState = true;

        this->nextseqnum++;
        return true;
    }

    else//������
    {
        this->waitingState = true;
        return false;
    }
}

void TCPRdtSender::receive(const struct Packet& ackPkt)
{
    if (this->num_pac_win > 0)  //�������д�ȷ�ϵı���
    {
        int checkSum = pUtils->calculateCheckSum(ackPkt);   //�������

        printf("receive_ACK number��%d\n", ackPkt.acknum);
        printf("base number�� %d\n", this->base);

        if (checkSum == ackPkt.checksum && ackPkt.acknum >= this->base) //ack_num��base����
        {

            if (ackPkt.acknum == this->win[0].seqnum)//�ж����ڵ���ź���һ�ε�����Ƿ���ͬ
            {
                this->count++;//����+1
                if (count == 4)//���ack�ĴΣ����ش���ǰ���ڵĵ�һ������
                {
                    pns->stopTimer(SENDER, this->win[0].seqnum);
                    pns->sendToNetworkLayer(RECEIVER, this->win[0]);//����һ�����ķ��͸����շ�
                    pUtils->printPacket("\n����ACK*4�������ش���ǰ���ڵ�һ������", win[0]);
                    pns->startTimer(SENDER, Configuration::TIME_OUT, this->win[0].seqnum);
                    printf("\n����ACK%d *4 \n", ackPkt.acknum);
                    this->count = 0;
                    return;
                }//����ack�����ش�
            }

            else {
                this->count = 1;
            }

            if (this->count != 1)
                return;

            else
            {
                int num = ackPkt.acknum - this->base;
                base = ackPkt.acknum;//���ͷ���ackΪ�ڴ��յ���base���ĵ����
                pUtils->printPacket("���յ�ACK����", ackPkt);

                if (this->base == this->nextseqnum)//����յ���ȷ���Ƿ��ʹ����е����һ�����ĵ�ȷ��
                    pns->stopTimer(SENDER, this->win[0].seqnum);
                else
                {
                    pns->stopTimer(SENDER, this->win[0].seqnum);
                    pns->startTimer(SENDER, Configuration::TIME_OUT, this->win[num].seqnum);//�����µļ�ʱ��
                }
                for (int i = 0; i < num_pac_win - num; i++)
                {
                    win[i] = win[i + num];
                    printf("The current windows's %d number is %d\n", i, win[i].seqnum);
                }
                this->num_pac_win = this->num_pac_win - num;//ƽ�ƴ���
            }
        }
    }
}



void TCPRdtSender::timeoutHandler(int seqNum)
{
    pUtils->printPacket("���ͷ���ʱ����ʱ�����·��ͱ��Ķ�", this->win[0]);
    pns->stopTimer(SENDER, this->win[0].seqnum);
    pns->startTimer(SENDER, Configuration::TIME_OUT, this->win[0].seqnum);
    pns->sendToNetworkLayer(RECEIVER, this->win[0]);

}