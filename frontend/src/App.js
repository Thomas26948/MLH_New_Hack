import React, {useState} from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import PlaceList from './components/Place/PlaceList';
import Slider from './components/Slider/Slider';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';

function App() {
  const [page, setPage] = useState('home')
  const [activity, setActivity] = useState('No_Preference')
  const [activityReq, setActivityReq] = useState('Select an Activity')
  const [time, setTime] = useState('')
  const [price, setPrice] = useState('5')
  const [location, setLocation] = useState('')
                                          // Initial place data is temporary and for testing purposes only -----------
  const [places, setPlaces] = useState([{location: 'Seattle, WA, USA', hours: '8:00am-5:00pm', cost: '$100'}, {location: 'Chicago, IL, USA', hours: '7:00am-8:00pm', cost: '$300'}])

  const submitInfo = async function(event) {
    setPage('info')
    console.log('submitted!')
    console.log(`activity: ${activity}`)
    console.log(`location: ${location}`)
    console.log(`time: ${time}`)
    console.log(`price: ${price}`)

    // Send request to backend
    // This would be the url to the backend
    const url = 'http://localhost:3001/'
    await fetch(url, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        activity: activity,
        location : location,
        time : time,
        price : price
      })
    })
    .then(res => res.json()) // This is the json the server sent
    .then(placesList => {
      setPlaces(placesList)
      console.log(placesList)
    })
    .catch(err => console.log(err))
  }

  const goToHomePage = () => {
    setPage('home')
  }

  const getActivityReq = (activity) => {
    setActivity(activity)
    setActivityReq(activity.replace('_', ' '))
  }

  const getLocationReq = (loc) => {
    setLocation(loc)
  }

  const getTimeReq = (time) => {
    setTime(time)
  }
  const getPriceReq = (price) => {
    setPrice(price)
  }

  return (
    <div>
      {
        page ==='home' ?
          <div className="landing">
            <h1>Exploratime</h1>
            <p>
            In a new city for a day? Can't decide on where to go or what to do? Don't worry! <br/>
            <strong>Exploratime</strong> will provide a list of locations with activities to explore within your 
            budget that you will have enough time to enjoy.
            </p>
            <div className="form">
              <h3>Activity</h3>
              <DropDownMenu prevInfo={activity} prevReq={activityReq} submit={getActivityReq}/>
              <h3>Location</h3>
              <SearchBox prevInfo={location} submit={getLocationReq}/>
              <h3>Time you have (hours)</h3>
              <SearchBox prevInfo={time} submit={getTimeReq}/>
              <h3>Price</h3>
              <Slider prevInfo={price} submit={getPriceReq}/>
              <button onClick={submitInfo}>Submit</button>
            </div>
          </div>
        :
          <div>
            <button className="revise-search" onClick={goToHomePage}>Revise Search</button>
            <PlaceList places={places}/>
          </div>
      }
    </div>
  );
}

export default App;
