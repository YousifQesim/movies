import { Outlet, Link } from "react-router-dom";
import { useState,useEffect } from "react";
import WatchLater from "../Pages/WatchLater";
import Home from "../Pages/Home";
import "./Navbar.css"
import { useContext } from "react";
import { context } from "../hooks/Usecontext";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
  return (
    <>
    
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <  Link  to={`/`}>
      <li className="items" >Home</li>
      </Link>
      <  Link  to={`/Favoraties`}>
      <li className="items" >Favoraties</li>
      </Link>
      <  Link  to={`/watched`}>
      <li className="items" >watched</li>
      </Link>
      <SearchBar/>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  
  </>
  )
};

export default Navbar;