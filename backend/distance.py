import requests

#This file is to calculate the distance (and its duration) from 2 differents activity
#I think the best way is to calculate it considering the user will walk (it's what's tourists mainly do when visiting a new city)

#https://developers.google.com/maps/documentation/distance-matrix/start

API_KEY="AIzaSyBIbDe2w5gxRmH74Cs8Kw4uXXrI9t9lNWg"

#Matrix return a list with : [Distance,duration] in [meter,second]

def matrix(coord_dep,coord_ar):
	url = (

		"https://maps.googleapis.com/maps/api/distancematrix/json?"+
		"units=metric"+
		"&mode=walking"
		"&origins="+str(coord_dep[0])+","+str(coord_dep[1])+
		"&destinations="+str(coord_ar[0])+","+str(coord_ar[1])+
		"&key="+API_KEY

)
	response=requests.get(url)
	L=response.json()
	M=[]
	M.append(L['rows'][0]['elements'][0]['distance']['value'])
	M.append(L['rows'][0]['elements'][0]['duration']['value'])
	return M

print(matrix())