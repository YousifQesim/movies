import React,{useContext} from 'react'
import MovieList from '../components/MovieList'
import Usecontext, { context } from '../hooks/Usecontext';
import Navbar from '../components/Navbar.js';
export default function WatchLater() {
  const {movies,addfav,searchValue,setsearchValue,removeFav,fav} = useContext(context);
  return (
    <div>
<Navbar/>

    </div>
  )
}
