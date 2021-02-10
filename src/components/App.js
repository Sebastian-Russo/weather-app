import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { WeatherInput } from './weather-input';
import { WeekDay } from './week-day';
import { Day } from './day';

const days = ["Mon", "Tues", "Wed", "Thur", "Fri"]

function App() {
  const [day, setDay] = useState('');

  // openweathermap 
  const fetchData = async (city) => {
    const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
    const API_KEY = process.env.REACT_APP_API_KEY;
    const options = `${API_URL}?q=${city}&appid=${API_KEY}`;
    try {
      const data = await axios.get(options);
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }
  
  const hanldeSingleDay = (e,d) => {
    console.log('clicked', d)
    setDay(d)
  }

  return (
    <div className="App">
      <WeatherInput 
        fetchData={fetchData}/>
      <div className="wrapper-forcast">
        <div className="row">
            <WeekDay days={days} hanldeSingleDay={hanldeSingleDay} />
          <div className="row">
            <Day day={day} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
