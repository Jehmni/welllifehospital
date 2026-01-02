import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/contact', label: 'Contact Us' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'py-3 bg-white/95 backdrop-blur-lg shadow-lg' : 'py-5 bg-transparent'
        }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex flex-col leading-none">
                    <span className="text-2xl font-bold text-[var(--primary-blue)]">Well-Life</span>
                    <span className="text-xs font-semibold text-[var(--primary-teal)] uppercase tracking-widest">Hospital</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`font-semibold transition-colors ${
                                    location.pathname === link.path
                                        ? 'text-[var(--primary-teal)]'
                                        : 'text-[var(--text-main)] hover:text-[var(--primary-teal)]'
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link to="/contact" className="hidden lg:inline-block hospital-btn-primary">
                    Book Appointment
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden w-10 h-10 flex items-center justify-center text-[var(--primary-blue)]"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6">
                    <ul className="flex flex-col items-center gap-4">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    onClick={() => setMobileOpen(false)}
                                    className={`font-semibold text-lg ${
                                        location.pathname === link.path
                                            ? 'text-[var(--primary-teal)]'
                                            : 'text-[var(--text-main)]'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link to="/contact" onClick={() => setMobileOpen(false)} className="hospital-btn-primary">
                                Book Appointment
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
