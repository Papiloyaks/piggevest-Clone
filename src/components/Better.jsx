import React from 'react'
import '../assets/styles/Better.css'
import Apple from '../assets/images/apple.svg'
import Google from '../assets/images/google.svg'
import Header from '../assets/images/header.png'
import Rect from '../assets/images/rect.png'
import Card1 from '../assets/images/card1.png'
import Card2 from '../assets/images/card2.png'

const Better = () => {
  return (
    <div className='bet'>
        <div className='bet1'>
          <h1 className='betH1'>The Better Way to Save & Invest.</h1>
          <p className='betP'>PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
          <button class="form-control" className='navBtn2'>Create free account</button>
          <div>
            <button className='betBtn1'><img className="p-1" src={Apple} alt="" /> Get to iPhone</button>
            <button className='betBtn2'><img className="p-1" src={Google} alt="" /> Get to Android</button>
          </div>
        </div>
        <div className='bet2'>
          <img className='betImg1' src={Rect} alt="" />
          <img className='betImg2' src={Header} alt="" />
          <img className='betImg3' src={Card1} alt="" />
          <img className='betImg4' src={Card2} alt="" />
          <img className='betImg5' src="" alt="" />
          <img className='betImg6' src="" alt="" />
          <img className='betImg7' src="" alt="" />
        </div>
    </div>
  )
}

export default Better