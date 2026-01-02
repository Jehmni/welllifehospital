import * as React from 'react';
import Navbar from '../components/Navbar';
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
        </div>
    );
};

export default AboutPage;
