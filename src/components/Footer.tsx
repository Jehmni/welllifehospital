import * as React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--primary-blue)] text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <span className="text-[var(--primary-teal)] font-bold text-lg">W</span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-bold">Well-Life</span>
                                <span className="text-[10px] font-semibold text-[var(--primary-teal)] uppercase tracking-widest">Hospital</span>
                            </div>
                        </div>
                        <p className="text-white/60 mb-6 leading-relaxed text-sm">
                            Your well-being is our goal. Providing world-class healthcare services with compassion and excellence since 2017.
                        </p>
                        <div className="flex gap-2">
                            {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                                <a 
                                    key={i}
                                    href="#" 
                                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/about', label: 'About Us' },
                                { to: '/services', label: 'Services' },
                                { to: '/gallery', label: 'Gallery' },
                                { to: '/contact', label: 'Contact' },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link to={link.to} className="text-white/60 hover:text-[var(--primary-teal)] transition-colors text-sm flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">Services</h3>
                        <ul className="space-y-3">
                            {['Infertility Treatments', 'Obstetrics & Gynaecology', 'Minimal Access Surgery', 'Prenatal Care', 'Fertility Counseling'].map((service, i) => (
                                <li key={i}>
                                    <a href="#" className="text-white/60 hover:text-[var(--primary-teal)] transition-colors text-sm flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-4">
                            {[
                                { icon: MapPin, text: '9b Afaha Street, Wuse 2, Abuja Nigeria' },
                                { icon: Phone, text: '+234 906 606 4314' },
                                { icon: Mail, text: 'info@welllifehospital.com' },
                                { icon: Clock, text: 'Open 24/7' },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <item.icon className="w-4 h-4 text-[var(--primary-teal)] mt-0.5 flex-shrink-0" />
                                    <span className="text-white/60 text-sm">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/40 text-xs">
                            © {currentYear} Well-Life Hospital. All rights reserved.
                        </p>
                        <p className="text-white/40 text-xs">
                            Powered by BlueFox IT Solutions
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
