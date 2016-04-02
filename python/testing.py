import sys
import os
import json
import iniHandler
from fitbit import test

def to_json(type, message):
    # convert to json and print (node helper will read from stdout)
    print(json.dumps({type: message}))
    # stdout has to be flushed manually to prevent delays in the node helper communication
    sys.stdout.flush()

#to_json("output","Hello World!")

#f = open('modules/MMM-fitbit/python/test.txt','w')
#f.write("Hello World!\n")
#f.close()

#print os.getcwd()

#print "testing __name__: " + __name__
#print "testing __file__: " + __file__
#head, tail = os.path.split(os.path.realpath(__file__))
#print "testing head: " + head
#print "testing tail: " + tail
#print "testing cwd: " + os.getcwd()

iniHandler.print_json("test","print_json: successful")

iniHandler.isFile(iniDirectory,'test.ini')
open(iniDirectory + 'test.ini','a').close()
iniHandler.isFile(iniDirectory,'test.ini')
iniHandler.print_json("test","makeFile: successful")
os.remove(iniDirectory + 'test.ini')

iniHandler.WriteCredentials('1','2','3')
test1, test2, test3 = iniHandler.ReadCredentials()
iniHandler.print_json("test","%s %s %s" %(test1,test2,test3))
iniHandler.print_json("test","ReadCredentials and WriteCredentials: successful")

iniHandler.WriteTokens('4','5')
test1, test2 = iniHandler.ReadTokens()
iniHandler.print_json("test","%s %s" %(test1,test2))
iniHandler.print_json("test","ReadTokens and WriteTokens: successful")