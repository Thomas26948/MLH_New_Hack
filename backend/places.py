import requests

API_KEY="AIzaSyBIbDe2w5gxRmH74Cs8Kw4uXXrI9t9lNWg"

#https://developers.google.com/places/web-service/search


#Place Search allows you to find a place matching with your query (aka museum in New york..)

def Place_Search(adress):
	url = (
"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?"+
"input="+adress+
"inputtype=textquery"+
"&fields=photos,formatted_address,name,rating,opening_hours,geometry,types,price_level"+
"&key="+API_KEY)

	response=requests.get(url)
	print(response.json())

adress="Museum%20of%20Contemporary%20Art%20Australia&"
#Place_Search(adress)

#Nearby_Search allows you to find activities around a location
#the location must be in lat/long
#That's the fucntion we're going to use

def Nearby_Search():
	url=(
"https://maps.googleapis.com/maps/api/place/nearbysearch/json?"+
"location=-33.8670522,151.1957362"+
"&radius=1500"+
"&type=restaurant"+
"&keyword=cruise"+
"&key="+API_KEY
		)
	response=requests.get(url)
	L=response.json()['results']
	places_names=[]
	for i in range(len(L)):
		places_names.append(L[i]['name'])
	print(places_names)

#Nearby_Search()




#with Text_Search, you can find stuffs around your location (but it can be anything like an enterprise)
#+you can't add to much field with it

def Text_Search():
	url=(
"https://maps.googleapis.com/maps/api/place/textsearch/json?"+
"query=123+main+street&location=42.3675294,-71.186966&radius=10000"+
"&key="+API_KEY


		)
	response=requests.get(url)
	L=response.json()['results']
	places_names=[]
	for i in range(len(L)):
		places_names.append(L[i]['name'])
	print(response.json())

Text_Search()