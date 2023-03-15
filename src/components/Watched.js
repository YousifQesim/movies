import React,{useEffect, useState,useContext} from 'react'
import "../components/styles/Movies.css"
import Usecontext, { context } from '../hooks/Usecontext';
import { Link } from 'react-router-dom';
import { FaStar,FaRegEye,FaHeart,FaBookReader } from "react-icons/fa";
export default function Watched(props) {

  
const {watchstate,removieInWatch,setwatch,movies,addfav,setMovies,removieFav,fav,category} = useContext(context);
function handleLike(id) {
  
  const newMovies = movies.map((movie) => {
    if (movie.id === id) {
      return {
        ...movie,
        liked: true,
      }
    }
    return movie
  })
  setMovies(newMovies)
}
function handleDislike(id) {

  const newMovies = movies.map((movie) => {
    if (movie.id === id) {
      return {
        ...movie,
        liked: false,
      }
    }
    return movie
  })
  setMovies(newMovies)
}
return (
    
    
  <div className='movies my-10'>
  {   watchstate&& watchstate.map((movie,index)=>(
    
    
    <div className='iteams' key={index} >

    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path !== null
      ? movie.backdrop_path
      : [
        movie.poster_path !== null
          ? movie.poster_path
          : null
      ]
      // movie.poster_path==null?movie.backdrop_path:movie.poster_path
    }`} style={{ transition: "all 1s" }} />

      
    <div className="alltext ">
      <div className="info">
        <h1>{movie.original_title}</h1>
        {/* <div className='raiting'><p>{movie.vote_average}</p>  <FaStar className='starIcone' /> </div> */}
        <Link to={`/${category}/${movie.id}` }className='Link' >

<button className="button-4">Read More</button>
</Link>
        <div className='icons'>

          <div onClick={() => { addfav(movie); } } id="dll">

            <FaHeart className='dll'

              style={{
                color: movie.liked ? "red" : "white",
                
              }}
              onClick={movie.liked ? () => handleDislike(movie.id) : () => handleLike(movie.id)} />
          </div>
          <div  onClick={() => { removieInWatch(movie); } }>
            
          <FaRegEye className='chaw' />
          </div>
        </div>
      </div>
    </div>
  </div>
  ))
}


  </div>

)
}


