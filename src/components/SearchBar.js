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


  return (
    <div>
      <form action="" onSubmit={searchMovie}>

 <div className="flex items-center">
            <div className="flex  rounded">
                <input
                 value={searchValue} onChange={(event)=>{setsearchValue(event.target.value)}}
                 type="text"
                    className="block w-full px-4 py-2 text-black font-bold bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    />
                <button className="px-4 text-white bg-teal-700 border-l rounded ">
                    Search
                </button>
            </div>
        </div>

        
                    </form>
    </div>
  )
}
