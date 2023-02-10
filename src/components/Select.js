import React from 'react';
import "./Select.css";

const Select = (props) => {
  return (
    
      <div className="box">
  <select>
    <option selected disabled>{props.movies}</option>
    <option >{ props.popular}</option>
    <option>{props.rated}</option>
    <option>{props.lastest}</option>
    <option>{props.coming}</option>
  </select>
</div>
  );
}

export default Select;
