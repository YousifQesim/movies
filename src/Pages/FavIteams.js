import React from 'react';
import Navbar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import Favoraties from '../components/Favoraties';
const FavIteams = (props) => {
  return (
    <div>
    <Navbar/>
    <div>
    <PageHeading heading={"favoraties"}/>
  <Favoraties /> 
  </div>
    </div>
  );
}

export default FavIteams;
