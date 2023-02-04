import { useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const getrequest = async (second) => { 
  
    const url="http://www.omdbapi.com/?i=tt3896198&apikey=c80831ef"
  const response=await fetch(url);
  const responsJson=await response.json();
   }

useEffect(() => {
  getrequest();

},);
  return (
    <div className="App">
      <MovieList/>
    </div>
  );
}

export default App;
