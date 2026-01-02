import * as React from 'react';
import Navbar from '../components/Navbar';
import '../components/Services.css';

const services = [
    {
        title: 'Infertility Treatments',
        description: 'Comprehensive fertility assessments and treatments including IVF, IUI, and ICSI.',
        features: ['Fertility Evaluation', 'IVF (In Vitro Fertilization)', 'IUI (Intrauterine Insemination)', 'ICSI', 'Egg Freezing'],
        icon: '👶'
    },
    {
        title: 'Obstetrics & Gynecology',
        description: 'Complete care for women health from adolescence through menopause.',
        features: ['Prenatal Care', 'Labor & Delivery', 'Gynecological Scans', 'Menopause Management'],
        icon: '👩‍⚕️'
    },
    {
        title: 'Minimal Access Surgery',
        description: 'Advanced laparoscopic and hysteroscopic surgical procedures.',
        features: ['Laparoscopic Myomectomy', 'Hysteroscopic Adhesiolysis', 'Ovarian Cystectomy', 'Diagnostic Hysteroscopy'],
        icon: '🔬'
    },
    {
        title: 'General Wellness',
        description: 'Routine check-ups and preventive care to keep you healthy.',
        features: ['Annual Physicals', 'Vaccinations', 'Health Screenings', 'Nutritional Counseling'],
        icon: '🏥'
    }
];

const ServicesPage: React.FC = () => {
    return (
        <div className="services-page">
            <Navbar />
            <main style={{ paddingTop: '80px' }}>
                <section className="services-hero" style={{ padding: '6rem 0', background: 'var(--bg-light)', textAlign: 'center' }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Our Services</h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                            At Well-Life Hospital, we offer a comprehensive range of services tailored to meet individual needs with cutting-edge technology.
                        </p>
                    </div>
                </section>

                <section className="services-list" style={{ padding: '5rem 0' }}>
                    <div className="container">
                        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
                            {services.map((service, index) => (
                                <div className="service-card glass fade-in" key={index} style={{ padding: '3rem 2rem', animationDelay: `${index * 0.1}s`, textAlign: 'left' }}>
                                    <div className="service-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                                    <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>{service.title}</h3>
                                    <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                                        {service.features.map((feature, i) => (
                                            <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                                                <span style={{ color: 'var(--primary-teal)' }}>•</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="/contact" className="hospital-btn-secondary" style={{ fontSize: '0.9rem', padding: '0.6rem 1.5rem' }}>Learn More</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="testimonials" style={{ padding: '5rem 0', background: 'var(--white)' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <div className="section-header">
                            <h2 style={{ color: 'var(--primary-blue)' }}>Testimonials</h2>
                            <p style={{ color: 'var(--primary-teal)', fontWeight: '600' }}>Here's What Our Patients Have To Say</p>
                        </div>
                        <div className="testimonial-card glass" style={{ maxWidth: '800px', margin: '3rem auto', padding: '3rem', borderRadius: '20px', background: 'var(--primary-teal)', color: 'white' }}>
                            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '2rem' }}>
                                "I highly recommend Well-Life Hospital for anyone seeking fertility treatments. Their efforts guaranteed me the output of immense excitement of being a mum."
                            </p>
                            <h4 style={{ fontWeight: '700' }}>NGOZI ORUBEBE</h4>
                        </div>
                    </div>
                </section>

                <section className="faq-section" style={{ padding: '5rem 0', background: 'var(--bg-light)' }}>
                    <div className="container">
                        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <span className="badge">FAQ</span>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div className="faq-item glass" style={{ padding: '1.5rem', borderRadius: '15px' }}>
                                <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>+ What services does Well-Life Hospital offer?</h4>
                            </div>
                            <div className="faq-item glass" style={{ padding: '1.5rem', borderRadius: '15px' }}>
                                <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>+ How do I schedule an appointment?</h4>
                            </div>
                            <div className="faq-item glass" style={{ padding: '1.5rem', borderRadius: '15px' }}>
                                <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>+ What are your payment options?</h4>
                            </div>
                        </div>
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

export default ServicesPage;
