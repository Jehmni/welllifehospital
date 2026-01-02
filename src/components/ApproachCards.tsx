import * as React from 'react';
import { Heart, Cpu, Users, Award, HeartHandshake } from 'lucide-react';

const approaches = [
    {
        title: 'Holistic Approach',
        description: 'We focus on your overall well-being, considering your physical, emotional, and psychological needs.',
        icon: Heart,
    },
    {
        title: 'Advanced Technology',
        description: 'State-of-the-art equipment for accurate diagnosis and effective treatment.',
        icon: Cpu,
    },
    {
        title: 'Compassionate Care',
        description: 'Clear communication with respect and understanding for every patient.',
        icon: HeartHandshake,
    },
    {
        title: 'Expert Specialists',
        description: 'Our team stays up-to-date on the latest advancements in fertility care.',
        icon: Award,
    },
    {
        title: 'Continuous Support',
        description: 'We guide you every step of the way, from conception to beyond.',
        icon: Users,
    },
];

const ApproachCards: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-[var(--primary-teal)] font-semibold text-sm uppercase tracking-widest mb-4">
                        Our Approach
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6">
                        Why Choose Well-Life?
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)]">
                        We combine expertise, technology, and compassion to provide exceptional care.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {approaches.map((approach, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                                index === 0 
                                    ? 'bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white' 
                                    : index === 1 
                                    ? 'bg-gradient-to-br from-[var(--primary-teal)] to-[var(--accent-teal)] text-white'
                                    : 'bg-slate-50 hover:bg-slate-100'
                            }`}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                                index < 2 
                                    ? 'bg-white/20 backdrop-blur-sm' 
                                    : 'bg-white shadow-sm'
                            }`}>
                                <approach.icon className={`w-7 h-7 ${
                                    index < 2 
                                        ? 'text-white' 
                                        : index === 2 
                                        ? 'text-[var(--primary-teal)]' 
                                        : index === 3 
                                        ? 'text-[var(--primary-blue)]' 
                                        : 'text-[var(--secondary-blue)]'
                                }`} />
                            </div>

                            {/* Content */}
                            <h3 className={`text-xl font-bold mb-3 ${index < 2 ? '' : 'text-[var(--text-main)]'}`}>
                                {approach.title}
                            </h3>
                            <p className={`leading-relaxed ${index < 2 ? 'text-white/80' : 'text-[var(--text-secondary)]'}`}>
                                {approach.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ApproachCards;
