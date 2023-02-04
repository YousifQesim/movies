import React from 'react'

export default function SearchBar(props) {
  return (
    <div>
    Search:   <input type="text" value={props.value} onChange={(event)=>{props.setsearchValue(event.target.value)}}/>

    </div>
  )
}
