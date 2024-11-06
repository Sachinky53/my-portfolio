import React, { useEffect, useRef } from 'react';
import './Hero.css';
import Typed from 'typed.js';

export default function Hero() {
    // Create a reference to hold the Typed.js instance
    const typedElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ["Web Developer", "Designer", "Freelancer"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });
    
        // Cleanup to destroy Typed.js instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []); // Add empty dependency array here
      
    return (
        <div>
            <div className="hero-section">
                <div className="portfolio-details">
                    <div className="detail-text">
                        <h2>HI, I'M A FREELANCER</h2>
                    </div>

                    {/* Typed text */}
                    <div className="typed-text" ref={typedElement}></div>
                    <div className="loaction-text">
                        <h3>Based in Integral University Lucknow ,India</h3>
                    </div>
                    <div className="my-work-btn">       
                        <button>View My Works</button>

                        <span className='contact-me'><a href="">Contact me</a></span>
                    </div>
                </div>




                <div className="profile-image">
                    <div className="img">
                        <img src="sachin-profile01.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
