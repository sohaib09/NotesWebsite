import React from 'react'
import './Before_Footer.css';

export default function Before_Footer() {
  return (
    <div className='before_footer_container'>
      <div className="left_before_footer">
        <h3>Making a lot of room in the mind...</h3>
        <p>Write whatever you lived and what you thought.</p>
      </div>
      <div className="right_before_footer">
        <img src = "./images/before_footer_image.png" alt = "before_footer"/>
      </div>
    </div>
  )
}