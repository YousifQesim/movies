import React,{useEffect, useState,useContext} from 'react'
import Favoraties from './Favoraties'
import "../components/styles/Movies.css"
import Usecontext, { context } from '../hooks/Usecontext';
import { FaStar,FaRegEye,FaHeart,FaBookReader } from "react-icons/fa";
import { Link } from 'react-router-dom';
import MovieDetail from './MovieDetail';
import axios from 'axios';


export default function MovieList() {
    
    const {movies,watchstate,addfav,setMovies,category,addtowatch,searchValue,cartIteam,} = useContext(context);

  const [newMoviews, setNewMoviews] = useState([{
    id: "",
    liked: false
  }]);

  useEffect(() => {
    
    setNewMoviews(movies.map((movie) => {
      return {
        ...movie,
        liked: false,
      }
    }))

  }, [movies])
  
const api2=`https://api.themoviedb.org/3/movie/${category}/?api_key=e7b12004b75308c7c4a6e84c00d2477e&include_adult=false&include_video=false&language=en-US&page=${cartIteam}&sort_by=popularity.desc&with_watch_monetization_types=flatrate`
  const api=`https://api.themoviedb.org/3/movie/${category}/?api_key=e7b12004b75308c7c4a6e84c00d2477e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${cartIteam}&with_watch_monetization_types=flatrate`
  // async function fetchData() {
  //   try {
  //     const response = await axios.get(api)
  //     setUser(response.data)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(api2);
      const json = await response.json();
    setMovies(json.results);
    };

fetchData()
    // fetch(api)
    
    // .then((response) => response.json())
    // .then((actualData) =>setMovies(actualData.results));
  
  },[setMovies, category, cartIteam, searchValue,api]);

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
    
    
    <div className='movies'>
    {    movies.map((movie,index)=>{
      return (
        
        
        
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
                  <div >

                  <FaRegEye className='chaw' onClick={() => { addtowatch(movie); } }/>
                  </div>
                </div>
              </div>
            </div>
          </div>

      );
    }
    )
}


    </div>
  
  )

}
