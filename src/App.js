import { useEffect,useState} from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {


  const [movies, setMovies] = useState([]);
  const getrequest = async (second) => { 
  
    const url="http://www.omdbapi.com/?s=star wars&apikey=c80831ef"
  const response=await fetch(url);
  const responsJson=await response.json();
setMovies(responsJson.Search)
   }

useEffect(() => {
  getrequest();

},);
  return (
    <div className="App">
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
