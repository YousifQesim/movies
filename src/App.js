import { useEffect,useState} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import PageHeading from './components/PageHeading';
import SearchBar from './components/SearchBar';
function App() {


  const [movies, setMovies] = useState([]);
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
  return (
    <div className="App">
      <div className='heading'>
        <PageHeading heading={"Movies"}/>
        <SearchBar searchValue={searchValue} setsearchValue={setsearchValue}/>
      </div>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
