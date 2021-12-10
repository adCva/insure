import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTransition, animated } from 'react-spring';


function Nav() {
    const [ mobileMenu, setMobileMenu ] = useState(false);

    // Open/close mobile menu.
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    // Close mobile menu on link click.
    const closeMenu = () => {
        if (window.innerWidth < 768) {
            setMobileMenu(false);
        }
    };

    // View plans btn message.
    const onClickMessage = () => {
        alert("This button does nothing.");
        closeMenu();
    };

    // React Spring.
    const transition = useTransition(mobileMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    // Display menu on screens > 768px & close menu on outside click.
    useEffect(() => {
        let isNotMobile = () => {
            if (window.innerWidth > 767) {
                setMobileMenu(true);
            } else {
                setMobileMenu(false);
            }
        }

        window.addEventListener("resize", isNotMobile);
        window.addEventListener("load", isNotMobile);

        return() => {
            window.removeEventListener("resize", isNotMobile);
            window.removeEventListener("load", isNotMobile);
        }
    })



    return (
        <nav className="nav-wrapper">
            <div className="nav-container">
                <img src="./images/logo.svg" alt="Logo" />
                <img src={mobileMenu ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"} alt="Logo" className="mobile-btn" onClick={toggleMobileMenu} />
                {transition((style, mobileMenu) => mobileMenu ? (
                    <animated.div style={style} className="nav-menu">
                        <Link to='about' smooth={true} duration={500} spy={true} exact='true' className="nav-link" onClick={closeMenu}>How we work</Link>
                        <Link to='about' smooth={true} duration={500} spy={true} exact='true' className="nav-link" onClick={closeMenu}>Blog</Link>
                        <Link to='about' smooth={true} duration={500} spy={true} exact='true' className="nav-link" onClick={closeMenu}>Account</Link>
                        <button className="nav-btn" onClick={onClickMessage}>View plans</button>
                    </animated.div>
                ) : null)}
            </div>
        </nav>
    )
}

export default Nav;