import React,{useEffect, useState,useContext} from 'react'
import Favoraties from './Favoraties'
import "./Movies.css"
import Usecontext, { context } from '../hooks/Usecontext';
import { FaStar,FaRegEye,FaHeart,FaBookReader } from "react-icons/fa";
import Select from './Select';
export default function MovieList() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (id) => {
  
    setIsActive(!isActive);}
  

  const {movies,removeFav,addfav,searchValue,setMovies} = useContext(context);
// console.log(searchValue)
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=e7b12004b75308c7c4a6e84c00d2477e&language=en-US
  const api=`https://api.themoviedb.org/3/discover/movie?api_key=e7b12004b75308c7c4a6e84c00d2477e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  useEffect(() => {
    fetch(api)
    .then((response) => response.json())
    .then((actualData) =>setMovies(actualData.results));
  
  },[setMovies]);

  
  
  return (
    
    
    <div className='movies'>
    {    movies.map((movie,index)=>(
      
      
      
      <div className='iteams' >
 
    <img src={`https://image.tmdb.org/t/p/original${

movie.backdrop_path!==null
    ? movie.backdrop_path
    : [
      movie.poster_path!==null
            ?   movie.poster_path
            :null
    ]
      // movie.poster_path==null?movie.backdrop_path:movie.poster_path
      }`} />

        
          <div className="alltext">
          <div className="info">
        <h1>{movie.original_title}</h1>
        <div className='raiting'><p>{movie.vote_average}</p>  <FaStar className='starIcone'/> </div>
        
      <div className='icons'>
      <FaHeart className='dll'  
      
       style={{ color: isActive ? "red" : "white" }}
        onClick={() => {
          {
          isActive?  removeFav(movie):addfav(movie)
          }  ;
          handleClick();
        }}
        />
      <FaRegEye className='chaw'/>
      </div>
      </div>
      </div>
      </div>
    
    ))
}
    </div>
  
  )
}
