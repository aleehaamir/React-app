import React from 'react'
import "./Card.css"
function Card(props) {
  return (
    <div className='card'>
        <img src="	https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg" alt=''  width={270}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
