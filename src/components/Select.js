import React,{useContext} from 'react';
import "./Select.css";
import { context } from '../hooks/Usecontext';
import { Link } from 'react-router-dom';

const Select = (props) => {
  const {setMovies} = useContext(context);
  const popularMovies= async(e)=>{
    e.preventDefault();
    console.log("searching");
    try{
      

    // const url= `https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=1`
    const url= `https://api.themoviedb.org/3/movie/top_rated?api_key=e7b12004b75308c7c4a6e84c00d2477e&language=en-US&page=1`
    const res=await fetch(url);
    const data=await res.json();
    setMovies(data.results)
      }
    catch(e){
  console.log(e)
    }
  }
  const Coming= async(e)=>{
    e.preventDefault();
    console.log("searching");
    try{
      

    // const url= `https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=1`
    const url= `https://api.themoviedb.org/3/movie/top_rated?api_key=e7b12004b75308c7c4a6e84c00d2477e&language=en-US&page=1`
    const res=await fetch(url);
    const data=await res.json();
    setMovies(data.results)
      }
    catch(e){
  console.log(e)
    }
  }

  return (
      <div className="box">
      
  <select onChange={popularMovies}>
  <option selected disabled>{props.movies}</option>
      
     <option >{ props.popular}</option>
    
     <option>{props.rated}</option>
    <option>{props.lastest}</option>
    <option onChange={Coming}>{props.coming}</option>
  </select>

</div>
  );
}

export default Select;
