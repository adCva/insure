import React from 'react';


function About() {
    return (
        <div className="about-container" id="account">
            <h2>We’re different</h2>
            <div className="about-services">
                <div className="service-card">
                    <img src="./images/icon-snappy-process.svg" alt="Snappy Process" />
                    <h3>Snappy Process</h3>
                    <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
                </div>
                <div className="service-card">
                    <img src="./images/icon-affordable-prices.svg" alt="Affordable Prices" />
                    <h3>Affordable Prices</h3>
                    <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                </div>
                <div className="service-card">
                    <img src="./images/icon-people-first.svg" alt="People First" />
                    <h3>People First</h3>
                    <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
                </div>
            </div>
        </div>
    )
}

export default About;