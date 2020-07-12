import requests
from places import *
from geocoding import *
from distance import *

#Objectives :
#recuperation of all the infos (city, duration, activity prefered)
#using geocoding to translate the city into lat / lng
#using places.py to find corresponding activities
#using distance to show informations about distances and time between each activity
#return all of this info to the website



def main():
	


def calc(location,type,time,price):
	L=[]
	timer=0
	coord=geo(location)
	price=price+1 # our scale is 1-5 and not 0-4
	results=Nearby_Search(coord,price,type)
	for i in range(len(results)):
		if timer+results[i]['duration']<time:
			L.append(results[i])
		else:
			return L