import * as React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "I am forever grateful to Well Life for their expertise and support. With their help, my wife and I finally became parents. Thank you!",
        author: "Chinedu Eze",
        role: "Parent",
    },
    {
        quote: "I highly recommend Well Life Hospital for anyone seeking fertility treatments. They offered personalized care and helped us achieve our dream of having a baby.",
        author: "Ngozi Okonkwo",
        role: "Parent",
    },
    {
        quote: "The team at Well Life Hospital treated me with such compassion and professionalism. Their dedication to patient care is truly remarkable.",
        author: "Amaka Adekunle",
        role: "Patient",
    },
    {
        quote: "From consultation to delivery, the care we received was exceptional. Well Life Hospital made our journey to parenthood seamless.",
        author: "Tunde & Bola Adeyemi",
        role: "Parents",
    },
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-[var(--bg-light)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-4">
                        What Our Patients Say
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Here's What Our Patients Have To Say...
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Quote Card */}
                        <div className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                            <Quote className="absolute top-6 left-6 w-12 h-12 text-white/20" />
                            <Quote className="absolute bottom-6 right-6 w-12 h-12 text-white/20 rotate-180" />
                            
                            <div className="relative z-10 text-center">
                                <p className="text-lg md:text-xl leading-relaxed mb-8 italic">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="flex flex-col items-center -mt-6 relative z-20">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-teal)] to-[var(--accent-teal)] flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white">
                                {testimonials[currentIndex].author.charAt(0)}
                            </div>
                            <h4 className="text-[var(--primary-teal)] font-bold text-lg mt-4">
                                {testimonials[currentIndex].author}
                            </h4>
                            <p className="text-[var(--text-secondary)] text-sm">
                                {testimonials[currentIndex].role}
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] flex items-center justify-center hover:bg-[var(--primary-blue)] hover:text-white transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="flex items-center gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                                            index === currentIndex
                                                ? 'bg-[var(--primary-teal)] w-8'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] flex items-center justify-center hover:bg-[var(--primary-blue)] hover:text-white transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
                        Take the first step towards your dreams today. Explore our services and schedule a consultation now to begin your transformative journey.
                    </p>
                    <a href="#appointment" className="hospital-btn-primary inline-block">
                        Make Appointment
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
