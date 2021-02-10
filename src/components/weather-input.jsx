import React, { useState } from 'react';
import './weather-input.css';


export const WeatherInput = ({fetchData}) => {
  const [input, setInput] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(input)
    fetchData(input)
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter City and State</label>
      <input 
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
