import React,{useContext} from 'react';
import { context } from '../hooks/Usecontext';
import Navbar from '../components/Navbar.js';
import MovieList from '../components/MovieList';
import PageHeading from '../components/PageHeading';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Home.css"
import {  Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Select from '../components/Select';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../components/SearchBar';
import ChangePages from '../components/ChangePages';
const Home = (props) => {
  const {movies,category} = useContext(context);

  return (
    <div className="App">
<Navbar/>
<ToastContainer />
    <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        movies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/${category}/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path==null?movie.poster_path:movie.backdrop_path}`} />
                                </div>
                                                       
                              <div className="posterImage__overlay">
                                  <div className="smallImage">
                                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path==null?movie.poster_path:movie.backdrop_path}`} />

                                  </div>
                                <div className='texts'>
                                      <div className="posterImage__title">{movie ? movie.original_title: ""}</div>  
                                      <div className="posterImage__runtime">
                                          {movie ? movie.release_date : ""}
                                          <span className="posterImage__rating">
                                              <FaStar className={"starIcone"}/>
                                              {movie ? movie.vote_average :""}
                                            
                                          </span>
                                      </div>
                                      <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                  </div>
                                </div>
                            </Link>
                            
                        ))
                    }
                </Carousel>
  

  <div className='header'>

  <PageHeading heading={"movieList"}/>
  <Select popular={"Popular"} movies={"Movies"} rated={"Rated"} lastest={"Lastest"} coming={"Up Coming"} className="select"/>
  </div>
  <div  className='block mx-auto w-full  flex justify-center my-5'>

  <SearchBar className='' />
  </div>
  
  <MovieList />


  <ChangePages />
  
</div> 
</div> 
  );
}

export default Home;
