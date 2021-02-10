import './day.css';

export const Day = (props) => {
  return (
    <div className="wrapper-day">
      <div className="container">
        <div>{props.day}</div>
        <div>image<img /></div>
        <div>high/low temp</div>
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