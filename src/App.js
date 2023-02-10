import { useEffect,useContext} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import WatchLater from './Pages/WatchLater';
import Usecontext from '../src/hooks/Usecontext';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { context } from '../src/hooks/Usecontext';

function App() {
  return (
    <Usecontext>

<div>
  
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
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
