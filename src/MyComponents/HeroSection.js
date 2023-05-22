import React from 'react'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <div className = "hero_section_css">
      <div className="left">
        <h3>Your daily journey is coming to digital paper now.</h3>
        <p>Write whatever you lived and what you thought.</p>
        <button type = "button">Try Journey, It's free.</button>
      </div>
      <div className="right">
        <img src = './images/herosection_image.png' alt = 'Hero Section Image'/>
      </div>
    </div>
  )
}