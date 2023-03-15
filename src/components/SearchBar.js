import React,{useContext,useState} from 'react'
import Usecontext, { context } from '../hooks/Usecontext'
import "../components/styles/SearchBar.css"
import { FaSearch} from "react-icons/fa";
import { MdClear } from "react-icons/md";
export default function SearchBar() {
  const {searchValue,setsearchValue,setMovies} = useContext(context);
  const searchMovie= async(e)=>{
    e.preventDefault();
    console.log("searching");
    try{
      const url= `https://api.themoviedb.org/3/search/movie?api_key=e7b12004b75308c7c4a6e84c00d2477e&query=${searchValue}`
    const res=await fetch(url);
    const data=await res.json();
    setMovies(data.results)
      }
    catch(e){
  console.log(e)
    }
  }
  const [opacity, Setopacity] = useState(0);
  const changeDesign = () => {
    Setopacity(opacity === 0? 1 : 0);
  };

  return (
    <div>

   <form id="search-form" role="search" onSubmit={searchMovie} onClick={changeDesign}>
        <div className="search-box">
  <button className="btn-search" >
    <FaSearch className="fas fa-search"  />
  </button>
  <input type="text"  value={searchValue} onChange={(event)=>{setsearchValue(event.target.value)}} className="input-search" placeholder="Type to Search..." />
<MdClear className='button' onClick={() => setsearchValue('')} style={{color:"red",opacity:opacity}}/>
</div>
    
        </form>
    </div>
  )
}
