import React from 'react'
import '../assets/styles/Security.css'
import Secure from '../assets/images/security.png'

const Security = () => {
  return (
    <div className='sec'>
      <div className='sec1'>
        <img className='secImg' src={Secure} alt="" />
      </div>
      <div className='sec2'>
        <h4 className='secH4'>Your security is our priority</h4>
        <p className='secP'>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
        <a className='secA' href="">Learn more ≻</a>
      </div>
    </div>
  )
}

export default Security