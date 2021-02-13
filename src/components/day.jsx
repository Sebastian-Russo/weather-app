import './day.css';

export const Day = ({day}) => {

  if (!day) return (<div></div>)

  console.log(day[0])
  let dateEdit = new Date(day[0].dt * 1000)
  dateEdit = dateEdit.toString()
  let time = dateEdit.slice(15, 21)
  let date = dateEdit.slice(0,15)
  let tempHigh = `High: ${Math.round(((day[0].main.temp_max - 273.15) * 9/5 + 32)*10)/10}`;
  let tempLow = `Low: ${Math.round(((day[0].main.temp_min - 273.15) * 9/5 + 32)*10)/10}`;
  
  return (
    <div className="wrapper-day">
      <div className="container">
        <div>{date}</div>
        <div>As of: {time} hours</div>
        <div>image<img /></div>
        <div>{tempHigh}</div>
        <div>{tempLow}</div>
        <div>hourly forecast</div>
      </div>
    </div>
  )
}

/*
hourly forecast 
high/low temp, 
image for sunny/rainy/cloudy/snowy, 
look like social cards 
*/