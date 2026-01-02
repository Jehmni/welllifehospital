import * as React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';

const contactInfo = [
    { icon: MapPin, title: 'Our Location', value: '9b Afaha Street, Wuse 2, Abuja Nigeria' },
    { icon: Phone, title: 'Phone Number', value: '+234 906 606 4314' },
    { icon: Mail, title: 'Email Address', value: 'info@welllifehospital.com' },
    { icon: Clock, title: 'Working Hours', value: '24/7 - We are always open' },
];

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-sky-50 relative overflow-hidden">
                <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--secondary-blue)]/5 rounded-full blur-3xl" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block text-[var(--primary-teal)] font-semibold text-sm uppercase tracking-widest mb-4">
                            Contact Us
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[var(--text-main)] leading-tight mb-6">
                            Get In 
                            <span className="text-[var(--primary-blue)]"> Touch</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)]">
                            Have questions or ready to start your journey? Our team is here to help you 24/7.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-16">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-[var(--text-main)] mb-4">
                                    Let's Start a Conversation
                                </h2>
                                <p className="text-[var(--text-secondary)]">
                                    We're here to answer any questions you may have about our services.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[var(--primary-blue)]/20">
                                            <item.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[var(--text-main)] mb-1">{item.title}</h4>
                                            <p className="text-[var(--text-secondary)]">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100">
                                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-8">Send us a Message</h3>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-[var(--text-main)] mb-2">First Name</label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all text-[var(--text-main)]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[var(--text-main)] mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="Doe"
                                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all text-[var(--text-main)]"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-main)] mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all text-[var(--text-main)]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-main)] mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+234 XXX XXX XXXX"
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all text-[var(--text-main)]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-main)] mb-2">Service of Interest</label>
                                        <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all text-[var(--text-main)]">
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
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-[var(--primary-teal)] focus:ring-2 focus:ring-[var(--primary-teal)]/20 outline-none transition-all resize-none text-[var(--text-main)]"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white rounded-xl font-semibold shadow-lg shadow-[var(--primary-blue)]/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
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
            <section className="h-96 bg-slate-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-8 h-8 text-[var(--primary-blue)]" />
                        </div>
                        <p className="text-[var(--text-main)] font-semibold">Interactive Map Coming Soon</p>
                        <p className="text-sm text-[var(--text-secondary)] mt-1">9b Afaha Street, Wuse 2, Abuja Nigeria</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
