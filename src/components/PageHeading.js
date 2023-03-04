import React from 'react'
import "./heading.css"
export default function PageHeading(props) {
  return (
    <div className='text-3xl pb-7 text-gray-100 relative top-3'>
      <h1>
    {
      props.heading
    }
      </h1>

    </div>
  )
}
