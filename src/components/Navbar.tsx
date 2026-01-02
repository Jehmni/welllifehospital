import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/contact', label: 'Contact' },
        { path: '/fertily-sdk', label: 'Fertily SDK' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'py-3 bg-[var(--primary-blue)]/95 backdrop-blur-xl shadow-sm border-b border-white/10'
            : 'py-5 bg-transparent'
            }`}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${scrolled ? 'bg-white' : 'bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)]'}`}>
                            <span className={`font-bold text-lg ${scrolled ? 'text-[var(--primary-blue)]' : 'text-white'}`}>W</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-white' : 'text-[var(--primary-blue)]'}`}>Well-Life</span>
                            <span className="text-[10px] font-semibold text-[var(--primary-teal)] uppercase tracking-widest">Hospital</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`relative font-medium text-sm transition-colors py-2 ${location.pathname === link.path
                                        ? 'text-[var(--primary-teal)]'
                                        : scrolled ? 'text-white/90 hover:text-[var(--primary-teal)]' : 'text-[var(--text-main)] hover:text-[var(--primary-teal)]'
                                        }`}
                                >
                                    {link.label}
                                    {location.pathname === link.path && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--primary-teal)] rounded-full" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a href="tel:+2349066064314" className={`flex items-center gap-2 transition-colors ${scrolled ? 'text-white/80 hover:text-[var(--primary-teal)]' : 'text-[var(--text-secondary)] hover:text-[var(--primary-teal)]'}`}>
                            <Phone className="w-4 h-4" />
                            <span className="text-sm font-medium">+234 906 606 4314</span>
                        </a>
                        <Link
                            to="/contact"
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${scrolled
                                ? 'bg-white text-[var(--primary-blue)] shadow-black/10'
                                : 'bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white shadow-[var(--primary-blue)]/20'}`}
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${scrolled ? 'bg-white/10 text-white' : 'bg-slate-100 text-[var(--text-main)]'}`}
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                <div className="container mx-auto px-6 py-6">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block py-2 font-medium ${location.pathname === link.path
                                        ? 'text-[var(--primary-teal)]'
                                        : 'text-[var(--text-main)]'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-slate-100">
                        <Link
                            to="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="block w-full text-center bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white px-6 py-3 rounded-full font-semibold"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div >
        </nav >
    );
};

export default Navbar;
