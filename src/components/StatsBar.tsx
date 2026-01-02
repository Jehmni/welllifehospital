import * as React from 'react';
import { Users, Stethoscope, Award, Calendar } from 'lucide-react';

const stats = [
    { icon: Users, value: '5,000+', label: 'Happy Patients', color: 'from-blue-500 to-blue-600' },
    { icon: Stethoscope, value: '33+', label: 'Medical Professionals', color: 'from-teal-500 to-teal-600' },
    { icon: Award, value: '99.8%', label: 'Success Rate', color: 'from-indigo-500 to-indigo-600' },
    { icon: Calendar, value: '7+', label: 'Years of Service', color: 'from-cyan-500 to-cyan-600' },
];

const StatsBar: React.FC = () => {
    return (
        <section className="relative -mt-16 z-10 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="bg-gradient-to-r from-[var(--primary-blue)] via-[#000a8c] to-[var(--primary-blue)] rounded-2xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-8 text-center text-white border-b lg:border-b-0 ${
                                    index < stats.length - 1 ? 'lg:border-r border-white/10' : ''
                                } ${index === 1 ? 'border-r border-white/10' : ''} hover:bg-white/5 transition-colors`}
                            >
                                <div className="flex flex-col items-center">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                                        <stat.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</span>
                                    <span className="text-white/70 text-sm font-medium">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
