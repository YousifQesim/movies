import React from 'react'

export default function Favoraties(props) {

  
  
  return (
    
    <div className='movies' >
    {    props.fav && props.fav.map((movie,index)=>(
      <div className='iteams' onClick={()=>props.removeFav(movie)}>
        <img id='img' src={movie.Poster} alt="movieImg" />
        
        
      </div>
    ))
}
    </div>

  
  )
}
