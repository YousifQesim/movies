import { Outlet, Link } from "react-router-dom";
import { useState,useEffect } from "react";
import WatchLater from "../Pages/WatchLater";
import Home from "../Pages/Home";
import "./Navbar.css"
import { useContext } from "react";
import { context } from "../hooks/Usecontext";
import SearchBar from "./SearchBar";

const Navbar = ({  backgroundColor, color }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [scrolled, setScrolled] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const colorr="white";


  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }
  

  }, [])
  const links =[
    {name:"HOME",link:"/"},
    {name:"Favoraties",link:"/Favoraties"},
    {name:"watched",link:"/watched"},
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const navbarStyles = {
    backgroundColor: scrolled ? backgroundColor : '#032541',
    color: scrolled ? color : '#fff',
    transition: 'all 0.3s ease-in-out'
  };
  return (
    <> <nav className="w-full bg-white shadow " style={navbarStyles}>
    <div className="justify-between  mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              
                    <h2 className="text-xl relative left-5 md:bottom-1.5 font-bold ">Movies4Kurd</h2>
              
                <div className="md:hidden"  >
                    <button
                        className="p-2 relative right-5 text-white rounded-md outline-none focus:border-gray-400 focus:border transition ease-in-out delay-150"
                        onClick={() => setNavbar(!navbar)}
                      
                    >
                        {navbar ? (
                            <svg
                            
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                
                            >
                                <path
                                style={navbarStyles}
                                className="text-black "
                                
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                style={navbarStyles}

                                className="text-black "
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
            
                className={` justify-self-center m-0 relative bottom-1.5 bg-white w-auto  md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
              
            >
              <ul className="items-center w-auto text-MainColor font-bold justify-center  space-y-2 space-x-2 md:flex space-x-0 md:space-x-6 md:space-y-0" style={navbarStyles}>
               {links.map(item => (
                    <li className=" hover:text-teal-500 hover:transition-all hover:ease-in-out  ">
          
                <Link to={item.link}>{item.name}</Link>

                </li>


))}
              
</ul>
              

                      
            </div>
        </div>
    </div>
</nav>

  </>
  )
};

export default Navbar;