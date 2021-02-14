import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { WeatherInput } from './weather-input';
import { WeekDay } from './week-day';
import { Day } from './day';


function App() {
  const [day, setDay] = useState();
  const [items, setItems] = useState();

  // openweathermap 
  const fetchData = async (location) => {
    const API_URL = 'http://api.openweathermap.org/data/2.5/forecast';
    const API_KEY = process.env.REACT_APP_API_KEY;
    const options = `${API_URL}?q=${location.city},${location.state},US&appid=${API_KEY}`;
    try {
      const {data} = await axios.get(options);
      setItems(data)
    } catch (err) {
      console.error(err)
    }
  }

  const hanldeSingleDay = (e, day) => {
    let item = [day]; 
    setDay(item)
  }

  return (
    <Router>
      <div className="App">
        <WeatherInput fetchData={fetchData}/>

        {/* <WeekDay hanldeSingleDay={hanldeSingleDay} items={items} /> */}
        {/* <Day day={day} /> */}

      <Switch>
        <Route 
          exact
          path="/forecast" 
          render={props=>
            <WeekDay {...props}
              hanldeSingleDay={hanldeSingleDay} 
              items={items} />
          }
        />
        <Route 
          path="/forecast/:day" 
          render={props =>
            <Day {...props} day={day} />
          }  
        />
      </Switch>
      
      </div>
    </Router>
  );
}

export default App;
