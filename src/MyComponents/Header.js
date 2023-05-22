import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <header className="header_css">
      <div className="logo">
        <img src = "./images/Logo.svg" alt = "header logo"/>
      </div>
      <div className="buttons_header">
        <button type = "button" id = "header_btn_one">Log in</button>
        <button type = "button" id = "header_btn_two">Sign up</button>
      </div>
    </header>
)
}