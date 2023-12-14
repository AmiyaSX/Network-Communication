#ifndef STOP_WAIT_RDT_SENDER_H
#define STOP_WAIT_RDT_SENDER_H
#include "RdtSender.h"
#define len 8

class GBNRdtSender :public RdtSender
{
private:
	int base; //���ʹ��ڵ�base
	int nextseqnum;	// ��һ��������� 
	bool waitingState;				// �Ƿ��ڵȴ�Ack��״̬
	Packet packetWaitingAck;		//�ѷ��Ͳ��ȴ�Ack�����ݰ�
	Packet win[len];
	int num_packet_win;
public:

	bool getWaitingState();
	bool send(const Message& message);//����Ӧ�ò�������Message
	//������ͷ��ɹ��ؽ�Message���͵�����㣬����true;�����Ϊ���ͷ����ڵȴ���ȷȷ��״̬���ܾ�����Message���򷵻�false
	void receive(const Packet& ackPkt);		//����ȷ��Ack	
	void timeoutHandler(int seqNum);	

public:
	GBNRdtSender();
	virtual ~GBNRdtSender();
};

#endif