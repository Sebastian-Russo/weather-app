import './week-day.css';

export const WeekDay = ({days, hanldeSingleDay}) => {

  const weekDay = days.map((d,i) => {
    return (
      <div key={i} className="week-day" 
        onClick={(e) => hanldeSingleDay(e,d)}
      >
        <div className="box-1">{d}</div>
        <div className="box-2">image<img /></div>
        <div className="box-3">temp</div>
      </div>
    )
  })

  return (
    <div className="wrapper-week-day">
        {weekDay}
    </div>
  )
}