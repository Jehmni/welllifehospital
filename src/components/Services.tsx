import * as React from 'react';
import './Services.css';

const services = [
    {
        title: 'Emergency Care',
        description: 'Round-the-clock emergency medical services with rapid response teams.',
        icon: '🚑'
    },
    {
        title: 'Diagnostics',
        description: 'Advanced imaging and laboratory services for accurate health assessments.',
        icon: '🔬'
    },
    {
        title: 'Maternity',
        description: 'Safe and supportive environment for mother and newborn care.',
        icon: '👶'
    },
    {
        title: 'Surgical Services',
        description: 'State-of-the-art operating theaters and expert surgical teams.',
        icon: '✂️'
    },
    {
        title: 'Pharmacy',
        description: 'In-house pharmacy providing essential medications and health products.',
        icon: '💊'
    },
    {
        title: 'Outpatient Clinic',
        description: 'Comprehensive specialty clinics for personalized health management.',
        icon: '🏥'
    }
];

const Services: React.FC = () => {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Our Expertise</span>
                    <h2>Comprehensive Medical Services</h2>
                    <p>We offer a wide range of specialized healthcare services tailored to meet your unique needs.</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card glass fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="#appointment" className="learn-more">Learn More →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
