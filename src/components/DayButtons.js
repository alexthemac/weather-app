import './DayButtons.css';

function DayButtons({ daysArray, setDay }) {

  const dayButtonsArray = daysArray.map((day) => {
    return <button onClick={() => setDay(day)}>{day}</button>
  })

  return (
    <div>
      {dayButtonsArray}
    </div>
  );
}

export default DayButtons;