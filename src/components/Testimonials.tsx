import * as React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        quote: "I am forever grateful to Well Life for their expertise and support. With their help, my wife and I finally became parents. Thank you!",
        author: "Chinedu Eze",
        role: "Parent",
        rating: 5,
    },
    {
        quote: "I highly recommend Well Life Hospital for anyone seeking fertility treatments. They offered personalized care and helped us achieve our dream of having a baby.",
        author: "Ngozi Okonkwo",
        role: "Parent",
        rating: 5,
    },
    {
        quote: "The team at Well Life Hospital treated me with such compassion and professionalism. Their dedication to patient care is truly remarkable.",
        author: "Amaka Adekunle",
        role: "Patient",
        rating: 5,
    },
    {
        quote: "From consultation to delivery, the care we received was exceptional. Well Life Hospital made our journey to parenthood seamless.",
        author: "Tunde & Bola Adeyemi",
        role: "Parents",
        rating: 5,
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
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-[var(--primary-teal)] font-semibold text-sm uppercase tracking-widest mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6">
                        What Our Patients Say
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Testimonial Card */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 lg:p-14 border border-slate-100 shadow-sm">
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-xl lg:text-2xl text-[var(--text-main)] leading-relaxed mb-8 font-medium">
                                "{testimonials[currentIndex].quote}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--primary-teal)] to-[var(--accent-teal)] flex items-center justify-center text-white font-bold text-xl">
                                    {testimonials[currentIndex].author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--text-main)] text-lg">
                                        {testimonials[currentIndex].author}
                                    </h4>
                                    <p className="text-[var(--text-secondary)]">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-6 mt-10">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full border-2 border-slate-200 text-[var(--text-secondary)] flex items-center justify-center hover:border-[var(--primary-teal)] hover:text-[var(--primary-teal)] transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            
                            <div className="flex items-center gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            index === currentIndex
                                                ? 'w-8 bg-[var(--primary-teal)]'
                                                : 'w-2 bg-slate-200 hover:bg-slate-300'
                                        }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full border-2 border-slate-200 text-[var(--text-secondary)] flex items-center justify-center hover:border-[var(--primary-teal)] hover:text-[var(--primary-teal)] transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
