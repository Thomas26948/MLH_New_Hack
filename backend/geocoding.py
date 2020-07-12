import requests

API_KEY="AIzaSyBIbDe2w5gxRmH74Cs8Kw4uXXrI9t9lNWg"

#https://developers.google.com/maps/documentation/geocoding/intro?hl=fr

#This program is made to find the latitude / longitude of a city


def geo(city):
	url = (
"https://maps.googleapis.com/maps/api/geocode/json?"+
"address="+city+
"&key="+API_KEY
)

	response=requests.get(url)
	L=response.json()['results'][0]['geometry']['location']
	coord=[0,0]
	coord[0]=L['lat']
	coord[1]=L['lng']
	return coord

#city="Paris, Texas"

#print(geo(city))
