import { useEffect,useState} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import PageHeading from './components/PageHeading';
import SearchBar from './components/SearchBar';
import Favoraties from './components/Favoraties';
function App() {


  const [movies, setMovies] = useState([]);
  const [fav, setfav] = useState([]);
  const [searchValue, setsearchValue] = useState('');
  const getrequest = async (second) => { 
  
    const url=`http://www.omdbapi.com/?s=${searchValue? searchValue.length>0:'star wars'}&apikey=c80831ef`
  const response=await fetch(url);
  const responsJson=await response.json();
setMovies(responsJson.Search)
   }

useEffect(() => {
  getrequest();

},[searchValue]);
const addfav=(movie)=>{
const favoratiess=[...fav,movie];
setfav(favoratiess);
}
const removeFav=(movie)=>{
  const remove=fav.filter((item)=>item.imdbID!==movie.imdbID)
  setfav(remove);
}

  return (
  
    <div className="App">
      <div className='heading'>
        <PageHeading heading={"Movies"}/>
        <SearchBar searchValue={searchValue} setsearchValue={setsearchValue}/>
      </div>
      <MovieList movies={movies} addfav={addfav}/>
      <div>
        <PageHeading heading={"favoraties"}/>
      <Favoraties fav={fav} removeFav={removeFav}/> 
      </div>
    </div>
  );
}

export default App;
