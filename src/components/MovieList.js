import React,{useState} from 'react'
import Favoraties from './Favoraties'
import "./Movies.css"
export default function MovieList(props) {

  return (


    <div className='movies' >
    {    props.movies && props.movies.map((movie,index)=>(
      <div className='iteams' onClick={()=>props.addfav(movie)}>
        <img id='img' src={movie.Poster} alt="movieImg" />        
      </div>
    ))
}
    </div>
  )
}
