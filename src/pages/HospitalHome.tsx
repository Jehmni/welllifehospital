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
            <Footer />
        </div>
    );
};

export default HospitalHome;
