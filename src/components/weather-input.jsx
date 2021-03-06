import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './weather-input.css';


export const WeatherInput = ({fetchData}) => {
  const [input, setInput] = useState('');
  const history = useHistory();
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(input)
    let words = input.replace(',', '')
    words = words.split(' ').reverse();
    let obj = {
      state: words[0],
      city: words.slice(1).reverse().join(' ')
    }
    console.log(obj)
    if (obj.state.length > 2 || obj.state.length < 2) {
      alert('use to letters for state')
    } else {
      fetchData(obj)
    }
    history.push('/forecast');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter City and State (two letters for state)</label>
      <input 
        type="text"
        value={input}
        placeholder="city, state"
        onChange={e => setInput(e.target.value)}
      />
      <input 
        type="submit" 
        value="Submit" 
        disabled={input === ""}
        className="btn"
      />
    </form>
  );
}
