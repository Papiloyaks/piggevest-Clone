import React from 'react'
import '../assets/styles/Card.css'
import Piggy from '../assets/images/piggy.png'
import Safe from '../assets/images/safelock.png'
import Target from '../assets/images/target.png'
import Flex from '../assets/images/flex.png'
import Swipe from '../assets/images/swipe.png'

const Card = () => {
  return (
    <div className='cardContain'>
      <div className="card1-1">
        <h3 className='cardH3'>4 ways to build your savings</h3>
        <p className='cardP1'>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
        <button className='cardBtn'>Start Saving</button>
      </div>
      <div className="card1">
        <img className='cardImg1' src={Piggy} alt="" />
        <h5 className='cardH5'>Automated Savings</h5>
        <p className='cardP2'>Build a dedicated savings faster on your terms automatically or manually.</p>
        <div className='cardS'><img className='cardImg2' src={Swipe} alt="" />Piggybank</div>
      </div>
      <div className="card1">
        <img className='cardImg1' src={Safe} alt="" />
        <h5 className='cardH5'>Fixed Savings</h5>
        <p className='cardP2'>Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.</p>
        <div className='cardS'><img className='cardImg2' src={Swipe} alt="" />Safelock</div>
      </div>
      <div className="card1-2"></div>
      <div className="card1">
        <img className='cardImg1' src={Target} alt="" />
        <h5 className='cardH5'>Goal-oriented Savings</h5>
        <p className='cardP2'>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
        <div className='cardS'><img className='cardImg2' src={Swipe} alt="" />Target Savings</div>
      </div>
      <div className="card1">
        <img className='cardImg1' src={Flex} alt="" />
        <h5 className='cardH5'>Flexible Savings</h5>
        <p className='cardP2'>Save, transfer, withdraw, manage and organise your money for free at any time.</p>
        <div className='cardS'><img className='cardImg2' src={Swipe} alt="" />Flex Naira</div>
      </div>
    </div>
  )
}

export default Card