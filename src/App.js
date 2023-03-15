

import { useEffect,useContext,React,useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './Pages/Home';
import WatchLater from './Pages/WatchLater';
import Usecontext from '../src/hooks/Usecontext';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { context } from '../src/hooks/Usecontext';
import Favoraties from './Pages/FavIteams';
import MovieDetail from './components/MovieDetail';
import { Auth } from './components/Auth';
import "./tailwind.css"
import Cookies from 'universal-cookie'
function App(props) {
  
  const cookie = new Cookies();
  const [isAuth, setIsAuth] = useState(cookie.get("auth-token"));

      if(!isAuth){
        return (
          <Auth setIsAuth={setIsAuth}/>)
        }
        
          return(
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

    </Usecontext>
  );
}

export default App;
