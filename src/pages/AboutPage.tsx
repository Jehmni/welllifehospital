import * as React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ApproachCards from '../components/ApproachCards';
import { CheckCircle, Target, Eye, Users, Calendar, Stethoscope, ArrowRight } from 'lucide-react';

const teamMembers = [
    { name: 'Dr. Adaeze Nwankwo', role: 'Fertility Specialist', image: '/placeholder.svg' },
    { name: 'Dr. Chidi Okafor', role: 'Gynecologist', image: '/placeholder.svg' },
    { name: 'Dr. Fatima Bello', role: 'Reproductive Endocrinologist', image: '/placeholder.svg' },
];

const howWeWork = [
    { step: 'Make Appointment', description: 'Book an appointment by calling or scheduling your visit online.' },
    { step: 'Select Expert Doctor', description: 'Choose your preferred specialist from our team of doctors.' },
    { step: 'Get Consultation', description: 'Schedule your consultation with the selected doctor for personalized care.' },
    { step: 'Get Cure & Relief', description: 'Receive treatment and leave with a smile.' },
];

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary-blue)] via-[#000a8c] to-[var(--secondary-blue)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            About Us
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="inline-block bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                                Know Us
                            </span>
                            <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-6">
                                About Well Life Hospital
                            </h2>
                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                                Established in 2017, Well-Life Hospital has rapidly emerged as a leading provider of women's health and 
                                infertility treatment services in Abuja, Nigeria. Our unwavering commitment to exceptional care is driven by a 
                                team of highly skilled professionals and cutting-edge medical technology. We adhere to the most rigorous 
                                international standards, ensuring our patients receive the most advanced and effective treatments available.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--primary-blue)]/10 flex items-center justify-center flex-shrink-0">
                                        <Target className="w-6 h-6 text-[var(--primary-blue)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[var(--primary-blue)] mb-2">Our Mission</h3>
                                        <p className="text-[var(--text-secondary)] text-sm">
                                            To provide holistic healthcare services to our patients in line with prevailing International evidence-based best practices.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--primary-teal)]/10 flex items-center justify-center flex-shrink-0">
                                        <Eye className="w-6 h-6 text-[var(--primary-teal)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[var(--primary-teal)] mb-2">Our Vision</h3>
                                        <p className="text-[var(--text-secondary)] text-sm">
                                            To be the preferred healthcare choice and the leading healthcare service provider in the West Africa subregion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[var(--primary-teal)]/10 to-[var(--secondary-blue)]/10 rounded-3xl p-8">
                                <div className="aspect-video bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] rounded-2xl flex items-center justify-center text-white">
                                    <div className="text-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                                        </div>
                                        <p className="font-semibold">How may I help you today?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-[var(--bg-light)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-[var(--primary-teal)] font-medium">Our Fertility Specialists</p>
                        <p className="text-[var(--text-secondary)] max-w-3xl mx-auto mt-4">
                            At Well Life Hospital, we understand the emotional and physical journey of IVF (In Vitro Fertilization). Our dedicated team of professionals is here to guide and support you every step of the way.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-6 overflow-hidden rounded-3xl">
                                    <div className="aspect-[3/4] bg-gradient-to-br from-[var(--primary-blue)]/20 to-[var(--primary-teal)]/20 flex items-center justify-center">
                                        <Users className="w-20 h-20 text-[var(--primary-blue)]/30" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                        <a href="#" className="text-white font-semibold flex items-center gap-2">
                                            View Profile <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                                <h3 className="font-bold text-[var(--text-main)] text-lg">{member.name}</h3>
                                <p className="text-[var(--primary-teal)]">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Cards */}
            <ApproachCards />

            {/* How We Work */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                            How We Work
                        </span>
                        <h2 className="text-4xl font-bold text-[var(--primary-blue)]">
                            How you help you get treatment?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {howWeWork.map((item, index) => (
                            <div key={index} className="text-center relative">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                                    {index + 1}
                                </div>
                                {index < howWeWork.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-[var(--primary-teal)]/30"></div>
                                )}
                                <h3 className="font-bold text-[var(--text-main)] mb-2">{item.step}</h3>
                                <p className="text-[var(--text-secondary)] text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a href="#" className="hospital-btn-primary inline-block">
                            Make an Appointment
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
