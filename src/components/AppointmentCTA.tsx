import * as React from 'react';
import { Calendar, Clock, User, ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
    'Expert fertility specialists',
    'Personalized treatment plans',
    'Flexible scheduling options',
    'Quick response within 24 hours',
];

const AppointmentCTA: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50" id="appointment">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block text-[var(--primary-teal)] font-semibold text-sm uppercase tracking-widest mb-4">
                                Book Now
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] leading-tight mb-6">
                                Start Your Journey to 
                                <span className="text-[var(--primary-blue)]"> Parenthood</span>
                            </h2>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Ready to take control of your reproductive health? Our experienced team is here to help you achieve your dreams of starting or expanding your family.
                            </p>
                        </div>

                        {/* Benefits List */}
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[var(--primary-teal)]/10 flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-[var(--primary-teal)]" />
                                    </div>
                                    <span className="text-[var(--text-main)] font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <a 
                            href="#contact" 
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-[var(--primary-blue)]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Make Appointment
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Right - Booking Card */}
                    <div className="relative">
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-[var(--text-main)]">Book Your</h3>
                                <p className="text-[var(--primary-teal)] font-semibold text-lg">Consultation</p>
                            </div>

                            {/* Calendar Preview */}
                            <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-semibold text-[var(--text-main)]">January 2026</span>
                                    <div className="flex gap-2">
                                        <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--primary-teal)] transition-colors">‹</button>
                                        <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--primary-teal)] transition-colors">›</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                                        <div key={i} className="p-2 text-[var(--text-secondary)] font-medium text-xs">{day}</div>
                                    ))}
                                    {[...Array(31)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`p-2 rounded-lg cursor-pointer text-sm transition-colors ${
                                                i === 14
                                                    ? 'bg-[var(--primary-teal)] text-white font-semibold'
                                                    : 'hover:bg-white text-[var(--text-secondary)]'
                                            }`}
                                        >
                                            {i + 1}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Time Slots */}
                            <div className="mb-6">
                                <p className="text-sm text-[var(--text-secondary)] mb-3 font-medium">Available Times</p>
                                <div className="grid grid-cols-3 gap-2">
                                    {['09:00', '11:00', '14:00'].map((time, i) => (
                                        <button 
                                            key={i}
                                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                                i === 2 
                                                    ? 'bg-[var(--primary-teal)] text-white' 
                                                    : 'bg-slate-50 text-[var(--text-secondary)] hover:bg-slate-100'
                                            }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                Confirm Booking
                            </button>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--primary-teal)]/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[var(--secondary-blue)]/10 rounded-full blur-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentCTA;
