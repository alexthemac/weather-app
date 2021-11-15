import './DayButtons.css';

function DayButtons({ daysArray, setDay }) {

  //Create buttons from daysArray
  const dayButtonsArray = daysArray.map((day) => {
    return <button className="day-buttons" key={day} onClick={() => setDay(day)}>{day}</button>
  });

  return (
    <div className="day-buttons-container">
      {dayButtonsArray}
    </div>
  );
}

export default DayButtons;