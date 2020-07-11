import React, {useState} from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import PlaceList from './components/Place/PlaceList';

function App() {
  const [page, setPage] = useState('home')
  const [time, setTime] = useState('')
  const [price, setPrice] = useState('')
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
          <div class="landing">
            <h1>Name of website</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis id urna in pharetra. Nullam consequat quam vitae augue tincidunt, et egestas urna suscipit.
              Etiam enim felis, gravida id posuere vitae, euismod a sapien. Ut pretium ullamcorper magna, at placerat magna vulputate at. Sed vehicula mi non sapien laoreet, 
              non volutpat tortor interdum. Mauris mauris est, accumsan sed sagittis nec, pellentesque nec lacus. Proin congue, orci ac fermentum eleifend, diam nisl sagittis nibh, 
              quis ornare ex massa vel elit.
            </p>
            <div class="form">
              <h3>Location:</h3>
              <SearchBox submit={getLocationReq}/>
              <h3>Time you have (hours):</h3>
              <SearchBox submit={getTimeReq}/>
              <h3>Price:</h3>
              <SearchBox submit={getPriceReq}/>
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
