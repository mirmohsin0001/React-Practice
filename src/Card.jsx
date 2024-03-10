import React from 'react'
import profilePic from './assets/profile_pic.jpg'

const Card = () => {
  return (
    <>
    <div className="card">
        <img className='card-image' src={profilePic}   height={150} width={150} />
        <h2 className='card-title' >Bro Code</h2>
        <p className='card-text' >I make youtube videos and play video games</p>
    </div>
    </>
  )
}

export default Card