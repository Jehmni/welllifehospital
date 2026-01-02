import * as React from 'react';
import { Users, Stethoscope, Award, Calendar } from 'lucide-react';

const stats = [
    { icon: Users, value: '5,000+', label: 'Happy Patients' },
    { icon: Stethoscope, value: '33+', label: 'Medical Professionals' },
    { icon: Award, value: '99.8%', label: 'Success Rate' },
    { icon: Calendar, value: '7+', label: 'Years of Service' },
];

const StatsBar: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-[var(--primary-blue)] via-[#001a9c] to-[var(--primary-blue)] rounded-3xl p-2">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="relative group p-8 lg:p-10 text-center text-white rounded-2xl hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <stat.icon className="w-7 h-7 text-[var(--primary-teal)]" />
                                    </div>
                                    <span className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</span>
                                    <span className="text-white/70 text-sm font-medium tracking-wide">{stat.label}</span>
                                </div>
                                
                                {/* Divider */}
                                {index < stats.length - 1 && (
                                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-white/10" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
