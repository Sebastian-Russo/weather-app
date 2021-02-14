import { Link } from 'react-router-dom';
import './week-day.css';
import cloudy from '../images/cloudy.png';
import rainy from '../images/rainy.png';
import snowy from '../images/snowy.png';
import stormy from '../images/stormy.png';
import sunny from '../images/sunny.png';

export const WeekDay = ({hanldeSingleDay, items}) => {

  if (!items) return ( <div></div> );
  
  // let sunrise = new Date(items.city.sunrise * 1000);
  // let sunset = new Date(items.city.sunset * 1000);
  // console.log('sunrise:', sunrise, 'sunset;', sunset)

  // sunny/rainy/cloudy/snowy
  let imageForecast = type => {
    const obj = {
      "Clouds": cloudy,
      "Drizzle": rainy,
      "Rain": rainy,
      "Snow": snowy,
      "Thunderstorm": stormy,
      "Clear": sunny
    }
    return obj[type] 
  }
  
  let week = [0,7,15,23,31].map(item => items.list[item]);

  const weekDays = week.map((item,i) => {
    let date = new Date(item.dt * 1000);
    let day = date.toString().slice(0,3);
    let forecast1 = item.weather[0].main; // Clouds/Snow/Rain/Clear/Thunderstorm
    let pictureForecast = imageForecast(forecast1)
    let tempHigh = `High: ${Math.round(((item.main.temp_max - 273.15) * 9/5 + 32)*10)/10}`;
    let tempLow = `Low: ${Math.round(((item.main.temp_min - 273.15) * 9/5 + 32)*10)/10}`;
    return (
      <div  key={i} >
        <Link to={`/forecast/${day}`}>        
        <div className="wrapper-week-day" 
          onClick={(e) => hanldeSingleDay(e,item)}>
              <div className="box-1">{day || "day"}</div>
              <div className="box-3">{tempHigh}</div>
              <div className="box-4">{tempLow}</div>
              <img src={pictureForecast} alt="weather" width="100%"/>
        </div>
        </Link>
      </div>
    )
  })

  return (
    <div className="container-week-day">
      <div>You searched for weather in {items.city.name}</div>
      <div className="row">
        {weekDays}
      </div>
    </div>
  )
}