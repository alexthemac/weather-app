import './DayButtons.css';
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'


function DayButtons({ daysArray, setDay }) {

  const dayButtonsArray = daysArray.map((day) => {
    return <button className="day-buttons" key={day} onClick={() => setDay(day)} >{day}</button>
  })

  return (
    <div>
      {dayButtonsArray}
    </div>
  );
}

export default DayButtons;