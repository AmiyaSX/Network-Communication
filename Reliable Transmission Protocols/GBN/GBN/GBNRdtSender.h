#ifndef STOP_WAIT_RDT_SENDER_H
#define STOP_WAIT_RDT_SENDER_H
#include "RdtSender.h"
#define len 8

class GBNRdtSender :public RdtSender
{
private:
	int base; //发送窗口的base
	int nextseqnum;	// 下一个发送序号 
	bool waitingState;				// 是否处于等待Ack的状态
	Packet packetWaitingAck;		//已发送并等待Ack的数据包
	Packet win[len];
	int num_packet_win;
public:

	bool getWaitingState();
	bool send(const Message& message);//发送应用层下来的Message
	//如果发送方成功地将Message发送到网络层，返回true;如果因为发送方处于等待正确确认状态而拒绝发送Message，则返回false
	void receive(const Packet& ackPkt);		//接受确认Ack	
	void timeoutHandler(int seqNum);	

public:
	GBNRdtSender();
	virtual ~GBNRdtSender();
};

#endif