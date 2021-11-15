import './CityDropDown.css';

function CityDropDown({ setCityName }) {

  return (
    <div className="city-drop-down">
      <select name="cities" id="city-select" onChange={event => setCityName(event.target.value)}>
          <option value="">City</option>
          <option value="Ottawa">Ottawa</option>
          <option value="Toronto">Toronto</option>
          <option value="Tokyo">Tokyo</option>
      </select>
    </div>
  );
}

export default CityDropDown;