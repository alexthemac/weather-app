import './DayButtons.css';
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'


function DayButtons({ daysArray, setDay }) {

  const dayButtonsArray = daysArray.map((day) => {
    return <ToggleButton key={day} onClick={() => setDay(day)} >{day}</ToggleButton>
  })

  return (
    <div>
      {dayButtonsArray}
    </div>
  );
}

export default DayButtons;