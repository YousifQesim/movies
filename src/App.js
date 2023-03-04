

import { useEffect,useContext,React} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './Pages/Home';
import WatchLater from './Pages/WatchLater';
import Usecontext from '../src/hooks/Usecontext';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { context } from '../src/hooks/Usecontext';
import Favoraties from './Pages/FavIteams';
import MovieDetail from './components/MovieDetail';
import "./tailwind.css"
function App() {
  return (
    <Usecontext>

<div>
  
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/popular/:id" element={<MovieDetail/>} / >
        <Route path="/upcoming/:id" element={<MovieDetail/>} / >
        <Route path="/top_rated/:id" element={<MovieDetail/>} / >
        <Route path="/Favoraties" element={<Favoraties/>} / >
        <Route path="/WatchLater" element={<WatchLater/>} / >
      </Routes>
    </Router>
  

  </div>
{/*   
    <div className="App">
        <Home  />
      <div className='heading'>
        <PageHeading heading={"Movies"}/>
        <SearchBar />
      </div>
      <MovieList />
      <div>
        <PageHeading heading={"favoraties"}/>
      <Favoraties /> 
      </div>
    </div> */}
    </Usecontext>
  );
}

export default App;
