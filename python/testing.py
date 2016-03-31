import sys
import json

def to_node(type, message):
    # convert to json and print (node helper will read from stdout)
    print(json.dumps({type: message}))
    # stdout has to be flushed manually to prevent delays in the node helper communication
    sys.stdout.flush()

#to_node("output","Hello World!")

f = open('modules/MMM-fitbit/python/test.txt','w')
f.write("Hello World!\n")
f.close()