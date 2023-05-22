import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <div className = "Footer_container">
      <div className="left_footer">
        <img src = "./images/logo.svg" alt = "footer"/>
      </div>
      <div className="right_footer">
        <h3>Your daily journey is coming to digital paper now.</h3>
        <p>Write whatever you lived and what you thought.</p>
        <button type = "button">Try Journey, It's free.</button>
      </div>
    </div>
  )
}