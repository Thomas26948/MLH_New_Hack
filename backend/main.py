import requests
from places import *
from geocoding import *
from distance import *

import flask
from flask import Flask, request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

#Objectives :
#recuperation of all the infos (city, duration, activity prefered)
#using geocoding to translate the city into lat / lng
#using places.py to find corresponding activities
#using distance to show informations about distances and time between each activity
#return all of this info to the website



def main():
	#url = ("http://127.0.0.1:5000/api/")

	#response=requests.get(url)
	response=foo()
	activity=response['activity']
	location=response['location']
	time=response['time']
	price=response['price']

	#activity=response.json()['activity']
	#location=response.json()['location']
	#time=response.json()['time']
	#price=response.json()['price']

	L=[]
	L.append(activity)
	L.append(location)
	L.append(time)
	L.append(price)
	return L




@app.route('/foo', methods=['POST']) 
def foo():
    data = request.json
    return jsonify(data)


def calc(location,type,time,price):
	L=[]
	timer=0
	coord=geo(location)
	price=price+1 # our scale is 1-5 and not 0-4
	results=Nearby_Search(coord,price,type)
	for i in range(len(results)):
		if timer+results[i]['duration']<time:
			L.append(results[i])
			timer+=results[i]['duration']
		else:
			return L
	return L

L=main()
activity=(calc(str(L[1]),str(L[0]),int(L[2]),int(L[3])))




@app.route('/', methods=['GET'])
def home():
    return '''<h1>Test</h1>
<p>A prototype API .</p>'''


# A route to return all of the available entries in our catalog.
@app.route('/api/results', methods=['GET'])
def api_all():
    return jsonify(activity)

app.run(host="localhost", port=8000, debug=True)
