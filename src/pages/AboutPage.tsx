import * as React from 'react';
import Navbar from '../components/Navbar';
<<<<<<< HEAD
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
=======
import Footer from '../components/Footer';
import ApproachCards from '../components/ApproachCards';
import { Target, Eye, Users, ArrowRight, CheckCircle } from 'lucide-react';

const teamMembers = [
    { name: 'Dr. Adaeze Nwankwo', role: 'Fertility Specialist' },
    { name: 'Dr. Chidi Okafor', role: 'Gynecologist' },
    { name: 'Dr. Fatima Bello', role: 'Reproductive Endocrinologist' },
];

const howWeWork = [
    { step: '01', title: 'Make Appointment', description: 'Book your visit online or by phone' },
    { step: '02', title: 'Select Expert', description: 'Choose your preferred specialist' },
    { step: '03', title: 'Get Consultation', description: 'Receive personalized care' },
    { step: '04', title: 'Treatment & Relief', description: 'Begin your healing journey' },
];

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-sky-50 relative overflow-hidden">
                <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--secondary-blue)]/5 rounded-full blur-3xl" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block text-[var(--primary-teal)] font-semibold text-sm uppercase tracking-widest mb-4">
                            About Us
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[var(--text-main)] leading-tight">
                            Your Partner in 
                            <span className="text-[var(--primary-blue)]"> Healthcare Excellence</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <span className="inline-block text-[var(--primary-teal)] font-semibold text-sm uppercase tracking-widest mb-4">
                                    Who We Are
                                </span>
                                <h2 className="text-4xl font-bold text-[var(--text-main)] mb-6">
                                    About Well-Life Hospital
                                </h2>
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                    Established in 2017, Well-Life Hospital has rapidly emerged as a leading provider of women's health and 
                                    infertility treatment services in Abuja, Nigeria. Our unwavering commitment to exceptional care is driven by a 
                                    team of highly skilled professionals and cutting-edge medical technology.
                                </p>
                            </div>

                            {/* Mission & Vision */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--primary-blue)]/10 flex items-center justify-center mb-4">
                                        <Target className="w-6 h-6 text-[var(--primary-blue)]" />
                                    </div>
                                    <h3 className="font-bold text-[var(--text-main)] mb-2">Our Mission</h3>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        To provide holistic healthcare services in line with international evidence-based best practices.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--primary-teal)]/10 flex items-center justify-center mb-4">
                                        <Eye className="w-6 h-6 text-[var(--primary-teal)]" />
                                    </div>
                                    <h3 className="font-bold text-[var(--text-main)] mb-2">Our Vision</h3>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        To be the preferred healthcare choice and leading service provider in West Africa.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image Placeholder */}
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[var(--primary-blue)]/10 to-[var(--primary-teal)]/10 flex items-center justify-center overflow-hidden">
                                <div className="text-center p-8">
                                    <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <span className="text-4xl">🏥</span>
                                    </div>
                                    <p className="text-[var(--text-secondary)] font-medium">Hospital Image</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--primary-teal)]/10 rounded-full blur-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block text-[var(--primary-teal)] font-semibold text-sm uppercase tracking-widest mb-4">
                            Our Team
                        </span>
                        <h2 className="text-4xl font-bold text-[var(--text-main)] mb-4">
                            Meet Our Specialists
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)]">
                            Our dedicated team of professionals is here to guide and support you every step of the way.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group text-center">
                                <div className="relative mb-6 overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100">
                                    <div className="aspect-[3/4] bg-gradient-to-br from-[var(--primary-blue)]/5 to-[var(--primary-teal)]/5 flex items-center justify-center">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] flex items-center justify-center">
                                            <Users className="w-12 h-12 text-white/80" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                                        <a href="#" className="text-white font-semibold flex items-center gap-2 text-sm">
                                            View Profile <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                                <h3 className="font-bold text-[var(--text-main)] text-lg">{member.name}</h3>
                                <p className="text-[var(--primary-teal)] text-sm font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Cards */}
            <ApproachCards />

            {/* How We Work */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block text-[var(--primary-teal)] font-semibold text-sm uppercase tracking-widest mb-4">
                            Our Process
                        </span>
                        <h2 className="text-4xl font-bold text-[var(--text-main)]">
                            How We Help You
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {howWeWork.map((item, index) => (
                            <div key={index} className="text-center relative">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-[var(--primary-blue)]/20">
                                    {item.step}
                                </div>
                                {index < howWeWork.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-slate-200" />
                                )}
                                <h3 className="font-bold text-[var(--text-main)] mb-2">{item.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a 
                            href="/contact" 
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-[var(--primary-blue)]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Make an Appointment
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
>>>>>>> 1e4a5d68d1984c364c2151eb13ee21c728996f4c
        </div>
    );
};

export default AboutPage;
