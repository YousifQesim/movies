import React from 'react';
import Navbar from '../components/Navbar.js';
import PageHeading from '../components/PageHeading';
import Favoraties from '../components/Favoraties';
const FavIteams = (props) => {
  return (
    <div>
    <Navbar/>
    <div>
    <PageHeading heading={"movieList"}/>
  <Favoraties /> 
  </div>
    </div>
  );
}

export default FavIteams;
