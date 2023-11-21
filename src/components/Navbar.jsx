import React from 'react'
import '../assets/styles/Navbar.css'
import Logo from '../assets/images/Logo.svg'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top p-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img className='navImg' src={Logo} alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" id='navA' href="#">Save</a>
                    <a class="nav-link" id='navA' href="#">Invest</a>
                    <a class="nav-link" id='navA'>Stories</a>
                    <a class="nav-link" id='navA' href="#">FAQs</a>
                    <a class="nav-link" id='navA'>Resources</a>
                    <button class="form-control" className='navBtn1' >Sign in</button>
                    <button class="form-control" className='navBtn2' >Create free account</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar