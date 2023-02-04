import React,{useState} from 'react'
import "./Movies.css"
export default function MovieList(props) {



  return (


    <div className='movies'>
    {    props.movies && props.movies.map((movie,index)=>(
      <div >
        <img src={movie.Poster} alt="movieImg" />

      </div>
    ))
}
    </div>
  )
}
