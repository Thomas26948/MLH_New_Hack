const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(express.json())
app.use(cors());
const port = 3001;


app.post('/', (req, res) => {
    const {activity, location, time, price} = req.body;
    fetch('http://localhost:8000/api/results', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        activity: activity,
        location : location,
        time : time,
        price : price
      })
    })
    .then(console.log)
    // .then(res => res.json()) // This is the json the server sent
    // .then(placesList => res.send(placesList))
    // .catch(err => console.log(err))
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})