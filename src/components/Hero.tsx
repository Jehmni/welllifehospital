import * as React from 'react';
import { ArrowRight, Play, Shield, Clock, Award } from 'lucide-react';
import heroImage from '../assets/hero.png';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-sky-50 overflow-hidden" id="home">
            {/* Subtle background patterns */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--secondary-blue)]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-[var(--primary-teal)]/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] px-4 py-2 rounded-full text-sm font-semibold">
                            <span className="w-2 h-2 bg-[var(--primary-teal)] rounded-full animate-pulse" />
                            Trusted Healthcare Excellence
                        </div>

                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-[var(--text-main)]">
                            Welcome to
                            <span className="block bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] bg-clip-text text-transparent">
                                Well-Life Hospital
                            </span>
                        </h1>

                        <p className="text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed">
                            Your well-being is our goal. We provide world-class medical services with heart, ensuring you and your family receive the best care possible.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a 
                                href="#appointment" 
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-[var(--primary-blue)]/25 hover:shadow-xl hover:shadow-[var(--primary-blue)]/30 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Book Consultation
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a 
                                href="#services" 
                                className="inline-flex items-center gap-2 bg-white text-[var(--text-main)] px-8 py-4 rounded-full font-semibold border-2 border-slate-200 hover:border-[var(--primary-teal)] hover:text-[var(--primary-teal)] transition-all duration-300"
                            >
                                <Play className="w-5 h-5" />
                                Watch Video
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[var(--primary-blue)]/10 flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-[var(--primary-blue)]" />
                                </div>
                                <div>
                                    <p className="font-bold text-[var(--text-main)]">Certified</p>
                                    <p className="text-sm text-[var(--text-secondary)]">Healthcare</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[var(--primary-teal)]/10 flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-[var(--primary-teal)]" />
                                </div>
                                <div>
                                    <p className="font-bold text-[var(--text-main)]">24/7</p>
                                    <p className="text-sm text-[var(--text-secondary)]">Support</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[var(--secondary-blue)]/10 flex items-center justify-center">
                                    <Award className="w-6 h-6 text-[var(--secondary-blue)]" />
                                </div>
                                <div>
                                    <p className="font-bold text-[var(--text-main)]">Award</p>
                                    <p className="text-sm text-[var(--text-secondary)]">Winning</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Hero Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                                <img 
                                    src={heroImage} 
                                    alt="Professional Doctor" 
                                    className="w-full h-auto"
                                />
                                {/* Gradient overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent" />
                            </div>

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary-teal)] to-[var(--accent-teal)] flex items-center justify-center">
                                        <Clock className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-[var(--primary-blue)]">24/7</p>
                                        <p className="text-sm text-[var(--text-secondary)] font-medium">Emergency Care</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Success Rate */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/50 border border-slate-100">
                                <p className="text-3xl font-bold text-[var(--primary-teal)]">99.8%</p>
                                <p className="text-sm text-[var(--text-secondary)]">Success Rate</p>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-[var(--secondary-blue)]/20 rounded-full blur-3xl" />
                        <div className="absolute -z-10 bottom-10 left-10 w-60 h-60 bg-[var(--primary-teal)]/20 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
