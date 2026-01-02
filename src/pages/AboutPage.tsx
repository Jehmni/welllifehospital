import * as React from 'react';
import Navbar from '../components/Navbar';
import '../components/About.css';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <Navbar />
            <main style={{ paddingTop: '80px' }}>
                <section className="about-hero" style={{ padding: '6rem 0', background: 'var(--bg-light)', textAlign: 'center' }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>About Us</h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                            Dedicated to providing exceptional healthcare with compassion and expertise since 2011.
                        </p>
                    </div>
                </section>

                <section className="about-mission" style={{ padding: '5rem 0' }}>
                    <div className="container about-content">
                        <div className="mission-text fade-in">
                            <span className="badge">Who We Are</span>
                            <h2>About Well Life Hospital</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Established in 2011, Well-Life Hospital has rapidly emerged as a leading provider of women's health and fertility treatment services in Lagos, Nigeria. Our outstanding commitment to exceptional care is driven by a team of highly skilled professionals and cutting-edge medical technology. We adhere to the most rigorous international standards, ensuring our patients receive the most advanced and effective treatments available.
                            </p>
                        </div>
                        <div className="about-image fade-in">
                            <div className="accent-box"></div>
                            <div className="hospital-card glass" style={{ top: 'unset', bottom: '10%' }}>
                                <h3>Our Mission</h3>
                                <p>To provide holistic healthcare services to our patients in line with prevailing international evidence-based best practices.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-vision" style={{ padding: '5rem 0', background: 'var(--white)' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '2rem', color: 'var(--primary-blue)' }}>Our Vision</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                            To be the preferred healthcare choice and the leading healthcare service provider in the West African sub-region.
                        </p>
                    </div>
                </section>

                <section className="meet-team" style={{ padding: '5rem 0', background: 'var(--bg-light)' }}>
                    <div className="container">
                        <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span className="badge">Meet Our Team</span>
                            <h2>Our Fertility Specialists</h2>
                            <p>At Well-Life Hospital, we celebrate the incredible professionals who make our success possible.</p>
                        </div>
                        {/* Placeholder for Team Grid from Image 2 */}
                        <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            <div className="team-card glass" style={{ padding: '2rem', textAlign: 'center', borderRadius: '20px' }}>
                                <div style={{ width: '150px', height: '150px', background: '#ddd', borderRadius: '50%', margin: '0 auto 1.5rem' }}></div>
                                <h3 style={{ color: 'var(--primary-blue)' }}>Dr. John Doe</h3>
                                <p style={{ color: 'var(--primary-teal)', fontWeight: '600' }}>Chief Medical Director</p>
                            </div>
                            <div className="team-card glass" style={{ padding: '2rem', textAlign: 'center', borderRadius: '20px' }}>
                                <div style={{ width: '150px', height: '150px', background: '#ddd', borderRadius: '50%', margin: '0 auto 1.5rem' }}></div>
                                <h3 style={{ color: 'var(--primary-blue)' }}>Dr. Jane Smith</h3>
                                <p style={{ color: 'var(--primary-teal)', fontWeight: '600' }}>Fertility Specialist</p>
                            </div>
                            <div className="team-card glass" style={{ padding: '2rem', textAlign: 'center', borderRadius: '20px' }}>
                                <div style={{ width: '150px', height: '150px', background: '#ddd', borderRadius: '50%', margin: '0 auto 1.5rem' }}></div>
                                <h3 style={{ color: 'var(--primary-blue)' }}>Dr. Emily Brown</h3>
                                <p style={{ color: 'var(--primary-teal)', fontWeight: '600' }}>Gynecologist</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer style={{ padding: '4rem 0 2rem', backgroundColor: 'var(--primary-blue)', color: 'white', marginTop: 'auto' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="footer-logo" style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>Well-Life Hospital</h2>
                        <p style={{ opacity: 0.7 }}>Your Well-being is our goal.</p>
                    </div>
                    <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>&copy; 2026 Well-Life Hospital. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;
