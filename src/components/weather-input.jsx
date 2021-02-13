import React, { useState } from 'react';
import './weather-input.css';


export const WeatherInput = ({fetchData}) => {
  const [input, setInput] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(input)
    let words = input.replace(',', '')
    words = words.split(' ').reverse();
    let obj = {
      state: words[0],
      city: words.slice(1).reverse().join(' ')
    }
    fetchData(obj)
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter City and State (two letters for state)</label>
      <input 
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <input 
        type="submit" 
        value="Submit" 
        disabled={input === ""}
      />
    </form>
  );
}
