import React from 'react'
import '../assets/styles/Meet.css'
import Photo from '../assets/images/photo.jpg'
import Swipe1 from '../assets/images/swipe1.png'

const Meet = () => {
  return (
    <div className='meet'>
      <div className="meet1">
        <h2 className='meetH2'>Meet Saver</h2>
        <a href="" className='meetA'><img className='meetImg1' src={Swipe1} alt="" />Meet saver of the month</a>
      </div>
      <div className="meet2">
        <img className='meetImg2' src={Photo} alt="" />
      </div>
    </div>
  )
}

export default Meet