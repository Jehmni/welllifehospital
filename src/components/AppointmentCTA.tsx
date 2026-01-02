import * as React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const AppointmentCTA: React.FC = () => {
    return (
        <section className="py-24 bg-[var(--bg-light)]" id="appointment">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="inline-block bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                            Book Now
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6 leading-tight">
                            Start Your Journey To Parenthood By Booking An{' '}
                            <span className="text-[var(--primary-blue)]">Appointment.</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                            Ready to take control of your reproductive health and start your journey towards parenthood? 
                            Our experienced team is here to help you achieve your dreams of starting or expanding your family. 
                            Book an appointment today for personalized care and tailored treatment plans.
                        </p>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[var(--primary-blue)]/10 flex items-center justify-center">
                                    <User className="w-6 h-6 text-[var(--primary-blue)]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--text-main)]">Expert Specialists</h4>
                                    <p className="text-sm text-[var(--text-secondary)]">Consult with our experienced fertility experts</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[var(--primary-teal)]/10 flex items-center justify-center">
                                    <Calendar className="w-6 h-6 text-[var(--primary-teal)]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--text-main)]">Flexible Scheduling</h4>
                                    <p className="text-sm text-[var(--text-secondary)]">Choose a time that works best for you</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[var(--secondary-blue)]/10 flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-[var(--secondary-blue)]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--text-main)]">Quick Response</h4>
                                    <p className="text-sm text-[var(--text-secondary)]">Get confirmation within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <a href="#contact" className="hospital-btn-primary inline-flex items-center gap-2">
                            Make Appointment
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Right - Booking Card */}
                    <div className="relative">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-[var(--text-main)]">Book Your</h3>
                                <p className="text-[var(--primary-blue)] font-semibold">Consult Day</p>
                            </div>

                            {/* Calendar Preview */}
                            <div className="bg-[var(--bg-light)] rounded-2xl p-6 mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-semibold">January 2026</span>
                                    <div className="flex gap-2">
                                        <button className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center">‹</button>
                                        <button className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center">›</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                                        <div key={i} className="p-2 text-[var(--text-secondary)] font-medium">{day}</div>
                                    ))}
                                    {[...Array(31)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`p-2 rounded-lg cursor-pointer transition-colors ${
                                                i === 14
                                                    ? 'bg-[var(--primary-teal)] text-white font-semibold'
                                                    : 'hover:bg-gray-100'
                                            }`}
                                        >
                                            {i + 1}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Time Slots */}
                            <div className="mb-6">
                                <p className="text-sm text-[var(--text-secondary)] mb-3">Available Times</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="px-4 py-2 bg-[var(--bg-light)] rounded-lg text-center text-sm">09:00 - 10:00</div>
                                    <div className="px-4 py-2 bg-[var(--primary-teal)] text-white rounded-lg text-center text-sm font-medium">14:00 - 15:00</div>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow">
                                Confirm
                            </button>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--primary-teal)]/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--secondary-blue)]/20 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentCTA;
