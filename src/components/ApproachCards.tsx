import * as React from 'react';
import { Heart, Cpu, Users, Award, Sparkles, HeartHandshake } from 'lucide-react';

const approaches = [
    {
        title: 'Holistic Approach',
        description: 'We focus on your overall well-being, not just your medical condition. We consider your physical, emotional, and psychological needs to create a personalized treatment plan.',
        icon: Heart,
        gradient: 'from-[var(--primary-blue)] to-[var(--secondary-blue)]',
    },
    {
        title: 'Advanced Technology',
        description: 'We utilize state-of-the-art equipment to ensure accurate diagnosis and effective treatment. This includes advanced imaging, minimally invasive surgical tools, and cutting-edge fertility equipment.',
        icon: Cpu,
        gradient: 'from-[var(--primary-teal)] to-[var(--accent-teal)]',
    },
    {
        title: 'Compassionate Care',
        description: 'We prioritize clear communication and treat each patient with respect and understanding. Our staff is dedicated to ensuring you feel comfortable asking questions and expressing your concerns.',
        icon: HeartHandshake,
        gradient: 'from-[var(--secondary-blue)] to-[var(--primary-teal)]',
    },
    {
        title: 'Experienced Specialists',
        description: 'Our team of fertility experts are intimately passionate about helping you achieve your healthcare goals. They stay up-to-date on the latest advancements in their fields to provide you with the most effective treatment options.',
        icon: Award,
        gradient: 'from-[var(--primary-blue)] to-[var(--primary-teal)]',
    },
    {
        title: 'Your Journey, Our Support',
        description: 'We believe in building trust and being your partner every step of the way. We have a guide who can assist you throughout your healthcare journey, from conception to pregnancy and beyond.',
        icon: Users,
        gradient: 'from-[var(--accent-teal)] to-[var(--secondary-blue)]',
    },
];

const ApproachCards: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-[var(--bg-light)] to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                        Our Approach
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-4">
                        Why Choose Well-Life?
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                        We combine expertise, technology, and compassion to provide exceptional care for every patient.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {approaches.slice(0, 2).map((approach, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${approach.gradient} rounded-3xl p-8 text-white transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                                <approach.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{approach.title}</h3>
                            <p className="text-white/80 leading-relaxed">{approach.description}</p>
                        </div>
                    ))}
                    <div className="hidden lg:flex items-center justify-center">
                        <div className="relative">
                            <Sparkles className="w-24 h-24 text-[var(--primary-teal)]/30" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[var(--primary-teal)] font-bold text-lg">Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    {approaches.slice(2).map((approach, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${approach.gradient} rounded-3xl p-8 text-white transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                                <approach.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{approach.title}</h3>
                            <p className="text-white/80 leading-relaxed">{approach.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ApproachCards;
