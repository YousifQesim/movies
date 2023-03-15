import React,{useContext,useState} from 'react';
import "../components/styles/Select.css"

import { context } from '../hooks/Usecontext';
import { Link } from 'react-router-dom';

const Select = (props) => {
  const {setCategory,category} = useContext(context);


  return (
    
      <div className="box ">
      
  <select onChange={(e)=>{setCategory(e.target.value)}}>
  <option selected disabled>{props.movies}</option>
      
     <option value={"popular"} >{ props.popular}</option>
    
     <option value={"top_rated"}>{props.rated}</option>
    <option value={"upcoming"}>{props.coming}</option>
  </select>

</div>
  );
}

export default Select;
