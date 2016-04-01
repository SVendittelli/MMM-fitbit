import sys
import os
import json
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