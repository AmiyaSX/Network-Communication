// SR.cpp : �������̨Ӧ�ó������ڵ㡣
//
#include "stdafx.h"
#include "Global.h"
#include "RdtSender.h"
#include "RdtReceiver.h"
#include "SrRdtSender.h"
#include "SrRdtReceiver.h"


int main(int argc, char* argv[])
{
	RdtSender* ps = new SrRdtSender();
	RdtReceiver* pr = new  SrRdtReciver();
	//	pns->setRunMode(0);  //VERBOSģʽ
	pns->setRunMode(1);  //����ģʽ
	pns->init();
	pns->setRtdSender(ps);
	pns->setRtdReceiver(pr);
	pns->setInputFile("C:\\Users\\sucy\\Desktop\\lab\\lab\\lab2\\SR\\test\\input.txt");
	pns->setOutputFile("C:\\Users\\sucy\\Desktop\\lab\\lab\\lab2\\SR\\test\\output.txt");

	pns->start();

	delete ps;
	delete pr;
	delete pUtils;									//ָ��Ψһ�Ĺ�����ʵ����ֻ��main��������ǰdelete
	delete pns;										//ָ��Ψһ��ģ�����绷����ʵ����ֻ��main��������ǰdelete

	return 0;
}