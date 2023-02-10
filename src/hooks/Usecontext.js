import React, { createContext,useState,useEffect } from 'react';
export const context=createContext(null);
const Usecontext = (props) => {
  
  
  const [movies, setMovies] = useState([]);
  const [fav, setfav] = useState([]);
  const [searchValue, setsearchValue] = useState('');

  
const addfav=(movie)=>{
const favoratiess=[...fav,movie];
setfav(favoratiess);
}
const removeFav=(movie)=>{
  const remove=fav.filter((item)=>item.imdbID!==movie.imdbID)
  setfav(remove);
}


const values={movies,addfav,searchValue,setsearchValue,removeFav,fav,setMovies};
  return (
    <context.Provider value={values}>
      {props.children}
    </context.Provider>
  );
}

export default Usecontext;
