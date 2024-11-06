import React, { useState } from 'react'
import './Header.css'
import { IoCall } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="nav-bar">
        <div className="left-asider">
          <div className="icon-portfolio">
            <h1>SACHIN</h1>
          </div>
        </div>
        <div className="right-asider">
          <div className="call-icon">
            <IoCall />

          </div>
          <div className="number">(+91) 9663460616</div>
          <div className="menu-icon"><HiOutlineMenu onClick={toggleNav} />
            <div className={`fullscreen-nav ${isOpen ? 'open' : ''}`} >
              <button className="close-btn" onClick={toggleNav}>X</button>

              <ul className='nav-links' >
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>


              </ul>

            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
