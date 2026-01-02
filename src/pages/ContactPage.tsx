import * as React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary-blue)] via-[#000a8c] to-[var(--secondary-blue)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Contact Us
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
                        <p className="text-white/70 text-lg max-w-2xl">
                            Have questions or ready to start your journey? Our team is here to help you 24/7.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <span className="inline-block bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                                Reach Out
                            </span>
                            <h2 className="text-4xl font-bold text-[var(--text-main)] mb-6">
                                Contact Well-Life Hospital
                            </h2>
                            <p className="text-[var(--text-secondary)] text-lg mb-12">
                                We're here to answer any questions you may have about our services. 
                                Reach out to us and we'll respond as soon as we can.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">Our Location</h4>
                                        <p className="text-[var(--text-secondary)]">9b Afaha Street, Wuse 2, Abuja Nigeria</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-teal)] to-[var(--accent-teal)] flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">Phone Number</h4>
                                        <p className="text-[var(--text-secondary)]">+234 906 606 4314</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--secondary-blue)] to-[var(--primary-teal)] flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">Email Address</h4>
                                        <p className="text-[var(--text-secondary)]">info@welllifehospital.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-teal)] flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">Working Hours</h4>
                                        <p className="text-[var(--text-secondary)]">24/7 - We are always open</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-[var(--bg-light)] rounded-3xl p-8 md:p-10 shadow-xl">
                                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6">Send us a Message</h3>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-[var(--text-main)] mb-2">First Name</label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[var(--text-main)] mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="Doe"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-main)] mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-main)] mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+234 XXX XXX XXXX"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-main)] mb-2">Service of Interest</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all">
                                            <option value="">Select a service</option>
                                            <option value="fertility">Fertility Treatments</option>
                                            <option value="obstetrics">Obstetrics & Gynaecology</option>
                                            <option value="surgery">Minimal Access Surgery</option>
                                            <option value="prenatal">Prenatal Care</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-main)] mb-2">Your Message</label>
                                        <textarea
                                            rows={4}
                                            placeholder="How can we help you?"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)]/10 to-[var(--primary-teal)]/10 flex items-center justify-center">
                    <div className="text-center">
                        <MapPin className="w-16 h-16 text-[var(--primary-blue)]/30 mx-auto mb-4" />
                        <p className="text-[var(--text-secondary)]">Interactive Map Coming Soon</p>
                        <p className="text-sm text-[var(--text-secondary)]">9b Afaha Street, Wuse 2, Abuja Nigeria</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
