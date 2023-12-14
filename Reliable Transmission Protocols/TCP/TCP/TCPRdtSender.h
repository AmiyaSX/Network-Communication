#include "RdtSender.h"
#ifndef TCP_TCPSENDER_H
#define TCP_TCPSENDER_H
#define len 8
class TCPRdtSender :public RdtSender
{
private:
    int base;
    int nextseqnum;     //��һ���������
    bool waitingState;  //�Ƿ�ȴ�ack
    Packet win[len];    //����
    int num_pac_win;    //��һ������ڴ����е����
    int count;  //�����ش��ж�
    int current_rcv_ack;    //��ǰҪ�յ���ack
    int last_rcv_ack;   //����յ���ack
public:
    bool getWaitingState(); 
    bool send(const Message& message);
    void receive(const Packet& ackPkt);
    void timeoutHandler(int seqNum);

public:
     TCPRdtSender();
    virtual ~TCPRdtSender();
};
#endif //TCP_TCPSENDER_H