import requests

API_KEY="AIzaSyBIbDe2w5gxRmH74Cs8Kw4uXXrI9t9lNWg"

#https://developers.google.com/places/web-service/search


#Place Search allows you to find a place matching with your query (aka museum in New york..)

def Place_Search(adress):
	url = (
"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?"+
"input="+adress+
"&inputtype=textquery"+
"&fields=photos,formatted_address,name,rating,opening_hours,geometry,types,price_level"+
"&key="+API_KEY)

	response=requests.get(url)
	return response.json()


#adress="Musee d'Orsay"
#print(Place_Search(adress))




def duration_dico(activity):
	L={'amusement_park':3,'aquarium':2,'art_gallery':2,'bar':2,'bowling_alley':2,'meal_takeaway':.5,'mosque':.5,'movie_theater':2,'museum':2,'night_club':2,'park':1,'restaurant':1,'shopping_mall':2,'stadium':2,'casino':1,'church':.5,'city_hall':.5,'hindu_temple':.5,'zoo':2,'tourist_attraction':1,'synagogue':.5}
	return L[activity]



#Nearby_Search allows you to find activities around a location
#the location must be in lat/long
#That's the fucntion we're going to use

#radius is in meter (here 5 000m as the radius of Paris)
#Problem with maxprice : some activity don't have any price mentionned, so using Maxprice exclude all of this result 
#MUST TRY RANKBY PROMINENCE

def Nearby_Search(coord,maxprice,type):
	if type=="No_Preference":
		url=(
"https://maps.googleapis.com/maps/api/place/nearbysearch/json?"+
"location="+str(coord[0])+","+str(coord[1])+
"&radius=5000"+
"&key="+API_KEY
		)
	else:
		url=(
"https://maps.googleapis.com/maps/api/place/nearbysearch/json?"+
"location="+str(coord[0])+","+str(coord[1])+
"&radius=5000"+
#"&maxprice="+str(maxprice)+
"&type="+type+
#"&keyword="+keyword+
"&key="+API_KEY
		)
	response=requests.get(url)
	L=response.json()['results']
	places_names=[]
	for i in range(len(L)):
		X={'name':"",'adress':"",'duration':""}
		X['name']=(L[i]['name'])
		X['adress']=(L[i]['vicinity'])
		duration=duration_dico(type)
		X['duration']=(duration)
		places_names.append(X)
	return(places_names)
	#return response.json()

#coord=[48.856614,2.3522219]
#maxprice=4
#type="museum"
#print(Nearby_Search(coord,maxprice,type))



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

#Text_Search()