import './week-day.css';

export const WeekDay = ({hanldeSingleDay, items}) => {

  if (!items) return ( <div></div> );
  
  // let sunrise = new Date(items.city.sunrise * 1000);
  // let sunset = new Date(items.city.sunset * 1000);
  // console.log('sunrise:', sunrise, 'sunset;', sunset)

  
  let week = [0,7,15,23,31,39].map(item => items.list[item]);

  const weekDays = week.map((item,i) => {
    let date = new Date(item.dt * 1000);
    let day = date.toString().slice(0,3);
    let forecast1 = item.weather[0].main; // Clouds/Snow/Rain/Sunny
    let forecast2 = item.weather[0].description;
    // console.log(forecast1, forecast2)
    let tempHigh = `High: ${Math.round(((item.main.temp_max - 273.15) * 9/5 + 32)*10)/10}`;
    let tempLow = `Low: ${Math.round(((item.main.temp_min - 273.15) * 9/5 + 32)*10)/10}`;
    return (
      <div key={i} className="week-day" 
        onClick={(e) => hanldeSingleDay(e,item)}
        >
        <div className="box-1">{day || "day"}</div>
        <div className="box-2">image<img /></div>
        <div className="box-3">{tempHigh}</div>
        <div className="box-4">{tempLow}</div>
      </div>
    )
  })

  return (
    <div className="wrapper-week-day">
      <div>You searched for: {items.city.name}</div>
      <div className="row">
        {weekDays}
      </div>
    </div>
  )
}