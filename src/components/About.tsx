import * as React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="about" id="about">
            <div className="container about-content">
                <div className="about-image fade-in">
                    <div className="accent-box"></div>
                    <div className="hospital-card glass">
                        <h3>Our Mission</h3>
                        <p>To provide accessible, high-quality healthcare that enhances the life and well-being of our community.</p>
                    </div>
                </div>
                <div className="about-text fade-in">
                    <span className="badge">About Well-Life</span>
                    <h2>A Legacy of Care and Commitment</h2>
                    <p>Well-Life Hospital has been a cornerstone of healthcare excellence for over a decade. We combine advanced medical technology with a compassionate approach, ensuring every patient feels valued and cared for.</p>
                    <ul className="check-list">
                        <li>✓ 24/7 Qualified Medical Staff</li>
                        <li>✓ Modern Inpatient Facilities</li>
                        <li>✓ Professional Diagnostic Lab</li>
                        <li>✓ Affordable Healthcare Plans</li>
                    </ul>
                    <a href="#contact" className="hospital-btn-primary">Learn Our Story</a>
                </div>
            </div>
        </section>
    );
};

export default About;
