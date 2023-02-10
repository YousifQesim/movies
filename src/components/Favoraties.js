import React,{useContext} from 'react'
import { context } from '../hooks/Usecontext';
export default function Favoraties(props) {

  
const {removeFav,fav} = useContext(context);
  
  return (
    
    <div className='movies' >
    {    fav && fav.map((movie,index)=>(
      <div className='iteams' >
        <img id='img' src={"https://image.tmdb.org/t/p/original/"+movie.backdrop_path} alt="" />
        
        
      </div>
    ))
}
    </div>

  
  )
}
