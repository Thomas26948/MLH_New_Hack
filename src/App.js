import React, {useState} from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import PlaceList from './components/Place/PlaceList';
import Slider from './components/Slider/Slider';

function App() {
  const [page, setPage] = useState('home')
  const [time, setTime] = useState('')
  const [price, setPrice] = useState('5')
  const [location, setLocation] = useState('')
                                          // Initial place data is temporary and for testing purposes only -----------
  const [places, setPlaces] = useState([{location: 'Seattle, WA, USA', hours: '8:00am-5:00pm', cost: '$100'}, {location: 'Chicago, IL, USA', hours: '7:00am-8:00pm', cost: '$300'}])

  const submitInfo = (event) => {
    setPage('info')
    console.log('submitted!')
    console.log(`location: ${location}`)
    console.log(`time: ${time}`)
    console.log(`price: ${price}`)
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
            <h1>Name of website</h1>
            <p>
            In a new city for a day? Can't decide on where to go or what to do? Don't worry! 
            <strong> NAME OF SITE</strong> will provide a list of locations with activities to explore within your 
            budget that you will have enough time to enjoy.
            </p>
            <div className="form">
              <h3>Location</h3>
              <SearchBox submit={getLocationReq}/>
              <h3>Time you have (hours)</h3>
              <SearchBox submit={getTimeReq}/>
              <h3>Price</h3>
              <Slider submit={getPriceReq}/>
              <button onClick={submitInfo}>Submit</button>
            </div>
          </div>
        :
          <div>
            <h3>Locations</h3>
            <PlaceList places={places}/>
          </div>
      }
    </div>
  );
}

export default App;
