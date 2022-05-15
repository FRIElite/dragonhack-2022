from contextlib import nullcontext
from flask import Flask, request
from statis import *

app = Flask(__name__)
networkList = []

@app.route("/statis", methods=['POST'])
def run():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        pointTouple = (json['long'], json['lati'])
        networkList.append(pointTouple)
        point = calculateMidPoint(networkList)
        return(point)
    else:
        return 'Content-Type not supported!'

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=5050)
