import React, { useState, useEffect } from 'react';

function Hero() {
    const [ mobileImageSize, setMobileImageSize ] = useState(false);

    useEffect(() => {
        let resizeImage = () => {
            if (window.innerWidth < 1100) {
                setMobileImageSize(true);
            } else {
                setMobileImageSize(false);
            }
        }

        window.addEventListener('load', resizeImage);
        window.addEventListener('resize', resizeImage);
        return() => {
            window.removeEventListener('load', resizeImage);
            window.removeEventListener('resize', resizeImage);
        }
    });



    return (
        <div className="hero-wrapper">
            <div className="hero-container">
                <div className="hero-img-container">
                    <img src={mobileImageSize ? "./images/image-intro-mobile.jpg" : "./images/image-intro-desktop.jpg"} alt="Hero Thumbnail" />
                </div>
                <div className="hero-text">
                    <h1>Humanizing your insurance.</h1>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                    <button className="btn">View plans</button>
                </div>
            </div>
            <img src="./images/bg-pattern-intro-right-desktop.svg" alt="Right" className="hero-decoration-right"/>
            <img src="./images/bg-pattern-intro-left-desktop.svg" alt="Left" className="hero-decoration-left"/>
        </div>
    )
}

export default Hero;