import React from 'react'
import "./heading.css"
export default function PageHeading(props) {
  return (
    <div>
      <h1>
    {    props.heading}
      </h1>

    </div>
  )
}
