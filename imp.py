import serial

import json

arduinoData = serial.Serial('com31',9600)

while 1:
	myData = (arduinoData.readline().strip())
	myData = (myData.decode('utf-8'))
	print myData;
