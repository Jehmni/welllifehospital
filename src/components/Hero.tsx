import * as React from 'react';
import './Hero.css';
import heroImage from '../assets/hero.png';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <div className="hero-text fade-in">
                    <span className="badge">Trusted Healthcare Excellence</span>
                    <h1>Welcome to <br /><span>Well-Life Hospital</span></h1>
                    <p>Your Well-being is our goal. We provide world-class medical services with a heart, ensuring you and your family receive the best care possible.</p>
                    <div className="hero-btns">
                        <a href="#appointment" className="hospital-btn-primary">Book Consultation</a>
                        <a href="#services" className="hospital-btn-secondary">Our Services</a>
                    </div>
                </div>
                <div className="hero-image float">
                    <div className="image-wrapper">
                        <img src={heroImage} alt="Professional Doctor" />
                        <div className="stat-card glass">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Emergency Care</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
