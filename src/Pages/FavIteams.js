import React from 'react';
import Navbar from '../components/Navbar.js';
import PageHeading from '../components/PageHeading';
import Favoraties from '../components/Favoraties';
const FavIteams = (props) => {
  return (
    <div>
    <Navbar/>
    <div>
    <div className='my-20'>

  <PageHeading heading={"Favoraties"} className='my-30'/>
</div>
  <Favoraties /> 
  </div>
    </div>
  );
}

export default FavIteams;
