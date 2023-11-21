import React from 'react'
import '../assets/styles/Comment.css'
import Apple from '../assets/images/apple.svg'
import Google from '../assets/images/google.svg'


const Comment = () => {
  return (
    <div className='comment'>
      <div className="comment1"></div>
      <div className="comment1">
        <h4 className='comH4'>4 Million + customers</h4>
        <p className='comP'>Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable.</p>
        <button class="form-control" className='navBtn2' >Create free account</button>
        <div>
          <button className='comBtn1'><img src={Apple} alt="" /> Get to iPhone</button>
          <button className='comBtn2'><img src={Google} alt="" /> Get to Android</button>
        </div>
      </div>
    </div>
  )
}

export default Comment