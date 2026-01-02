import * as React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--primary-blue)] text-white">
            {/* Contact Bar */}
            <div className="bg-gradient-to-r from-[var(--primary-teal)] to-[var(--accent-teal)]">
                <div className="container mx-auto px-6 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <a href="tel:+2349066064314" className="flex items-center gap-3 justify-center md:justify-start hover:opacity-80 transition-opacity">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm opacity-80">Call us now</p>
                                <p className="font-semibold">+234 906 606 4314</p>
                            </div>
                        </a>
                        <a href="mailto:info@welllifehospital.com" className="flex items-center gap-3 justify-center hover:opacity-80 transition-opacity">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm opacity-80">Drop us an email</p>
                                <p className="font-semibold">info@welllifehospital.com</p>
                            </div>
                        </a>
                        <div className="flex items-center gap-3 justify-center md:justify-end">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm opacity-80">24/7 support</p>
                                <p className="font-semibold">We are open</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold">Well-Life</h2>
                            <p className="text-[var(--primary-teal)] font-semibold text-sm tracking-widest uppercase">Hospital</p>
                        </div>
                        <p className="text-white/70 mb-6 leading-relaxed">
                            Your Well-being is our goal. Providing world-class healthcare services with compassion and excellence since 2017.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[var(--primary-teal)]"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-white/70 hover:text-[var(--primary-teal)] transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-white/70 hover:text-[var(--primary-teal)] transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-white/70 hover:text-[var(--primary-teal)] transition-colors">Services</Link></li>
                            <li><Link to="/gallery" className="text-white/70 hover:text-[var(--primary-teal)] transition-colors">Gallery</Link></li>
                            <li><Link to="/contact" className="text-white/70 hover:text-[var(--primary-teal)] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[var(--primary-teal)]"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-white/70 hover:text-[var(--primary-teal)] transition-colors">Infertility Treatments</a></li>
                            <li><a href="#" className="text-white/70 hover:text-[var(--primary-teal)] transition-colors">Obstetrics & Gynaecology</a></li>
                            <li><a href="#" className="text-white/70 hover:text-[var(--primary-teal)] transition-colors">Minimal Access Surgery</a></li>
                            <li><a href="#" className="text-white/70 hover:text-[var(--primary-teal)] transition-colors">Prenatal Care</a></li>
                            <li><a href="#" className="text-white/70 hover:text-[var(--primary-teal)] transition-colors">Fertility Counseling</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative inline-block">
                            Contact Info
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[var(--primary-teal)]"></span>
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[var(--primary-teal)] mt-1 flex-shrink-0" />
                                <p className="text-white/70">9b Afaha Street, Wuse 2, Abuja Nigeria</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-[var(--primary-teal)] mt-1 flex-shrink-0" />
                                <p className="text-white/70">+234 906 606 4314</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-[var(--primary-teal)] mt-1 flex-shrink-0" />
                                <p className="text-white/70">info@welllifehospital.com</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-[var(--primary-teal)] mt-1 flex-shrink-0" />
                                <p className="text-white/70">Mon - Fri: 8:00 AM - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/50 text-sm">
                            © {currentYear} Well-Life Hospital • Powered by BlueFox IT Solutions
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-white/50 hover:text-white transition-colors">About Us</a>
                            <a href="#" className="text-white/50 hover:text-white transition-colors">Services</a>
                            <a href="#" className="text-white/50 hover:text-white transition-colors">Privacy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
