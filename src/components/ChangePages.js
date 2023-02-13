import React,{useContext} from 'react';
import Usecontext, { context } from '../hooks/Usecontext';
import { FcPrevious,FcNext } from "react-icons/fc";

import "./ChangePages.css"

const ChangePages = () => {
  const {cartIteam,RemoveFromCard,AddToCard,addBY5,remBY5} = useContext(context);
  return (
    <div>
      
      <div className="changePages">

<button className='button-4' onClick={RemoveFromCard} ><FcPrevious className='ne_pre'/>Previouse</button>
<p className='button-4 p'><button type="" className='add' onClick={remBY5}>...</button> {cartIteam} <button type="" className='add' onClick={addBY5}>...</button></p>
<button className='button-4'onClick={AddToCard} >Next <FcNext className='ne_pre'/></button>
</div>
    </div>
  );
}

export default ChangePages;
