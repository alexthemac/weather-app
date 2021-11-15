import './Header.css';
import CityDropDown from './CityDropDown';

function Header({cityName, setCityName}) {
  return (
    <h1 className="header"> 
      <div>
        <span className="grey">w</span><span className="orange">e</span><span className="grey">ather FORECAST</span>
      </div>
      <CityDropDown cityName={cityName} setCityName={setCityName}/> 
    </h1>
  );
}

export default Header;