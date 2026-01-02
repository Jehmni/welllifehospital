import * as React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import '../components/Contact.css';

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">
            <Navbar />
            <main style={{ paddingTop: '80px' }}>
                <section className="contact-hero" style={{ padding: '6rem 0', background: 'var(--bg-light)', textAlign: 'center' }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Contact Us</h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                            We are here to help. Reach out to us for appointments, inquiries, or emergency services.
                        </p>
                    </div>
                </section>

                {/* Reusing existing Contact component but ensuring it looks good in this context */}
                <Contact />

                <section className="map-section" style={{ height: '400px', background: '#eee' }}>
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                        Google Map Integration Area
                    </div>
                </section>
            </main>
            <footer style={{ padding: '4rem 0 2rem', backgroundColor: 'var(--primary-blue)', color: 'white' }}>
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

export default ContactPage;
