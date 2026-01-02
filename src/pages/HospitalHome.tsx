import * as React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import SpecialtiesSection from '../components/SpecialtiesSection';
import ApproachCards from '../components/ApproachCards';
import AppointmentCTA from '../components/AppointmentCTA';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import '../index.css';

const HospitalHome: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <StatsBar />
                <SpecialtiesSection />
                <ApproachCards />
                <AppointmentCTA />
                <Testimonials />
            </main>
<<<<<<< HEAD
            <footer style={{ padding: '4rem 0 2rem', backgroundColor: 'var(--primary-blue)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="footer-logo" style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>Well-Life Hospital</h2>
                        <p style={{ opacity: 0.7 }}>Your Well-being is our goal.</p>
                    </div>
                    <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>&copy; 2026 Well-Life Hospital. All rights reserved.</p>
                </div>
            </footer>
=======
            <Footer />
>>>>>>> 1e4a5d68d1984c364c2151eb13ee21c728996f4c
        </div>
    );
};

export default HospitalHome;
