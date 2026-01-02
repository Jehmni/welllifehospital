import * as React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Facebook, Instagram, Twitter, Youtube, X, Camera } from 'lucide-react';

const categories = ['All', 'Our Team', 'Facilities'];

const galleryItems = [
    { category: 'Our Team', title: 'Dr. Adaeze - Lead Fertility Specialist' },
    { category: 'Our Team', title: 'Dr. Chidi - Senior Gynecologist' },
    { category: 'Our Team', title: 'Dr. Fatima - Reproductive Specialist' },
    { category: 'Our Team', title: 'Nursing Team' },
    { category: 'Facilities', title: 'Modern Operating Theatre' },
    { category: 'Facilities', title: 'IVF Laboratory' },
    { category: 'Facilities', title: 'Consultation Rooms' },
    { category: 'Facilities', title: 'Reception Area' },
    { category: 'Facilities', title: 'Patient Rooms' },
];

const GalleryPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-sky-50 relative overflow-hidden">
                <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--secondary-blue)]/5 rounded-full blur-3xl" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block text-[var(--primary-teal)] font-semibold text-sm uppercase tracking-widest mb-4">
                            Gallery
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[var(--text-main)] leading-tight mb-6">
                            A Glimpse Inside
                            <span className="text-[var(--primary-blue)]"> Well-Life</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)]">
                            Take a look around and see where the magic of medicine takes place.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === category
                                        ? 'bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white shadow-lg shadow-[var(--primary-blue)]/20'
                                        : 'bg-slate-100 text-[var(--text-secondary)] hover:bg-slate-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className="group cursor-pointer relative overflow-hidden rounded-3xl aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-100"
                            >
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                                        <Camera className="w-8 h-8 text-slate-300" />
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/90 via-[var(--primary-blue)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="text-xs font-medium text-[var(--primary-teal)] uppercase tracking-wider">{item.category}</span>
                                    <h3 className="font-bold text-lg mt-1">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)]">
                        Your <span className="text-[var(--primary-teal)]">Well-being</span> is our goal
                    </h2>
                </div>
            </section>

            {/* Social Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-xl font-bold text-[var(--text-main)] mb-8">
                        Follow <span className="text-[var(--primary-teal)]">Well-Life Hospital</span>
                    </h3>
                    <div className="flex justify-center gap-3">
                        {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white flex items-center justify-center hover:shadow-lg hover:shadow-[var(--primary-blue)]/20 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <div className="aspect-video bg-slate-800 rounded-3xl flex items-center justify-center">
                            <Camera className="w-16 h-16 text-slate-600" />
                        </div>
                        <div className="text-center mt-6">
                            <span className="text-[var(--primary-teal)] text-sm font-medium">{filteredItems[selectedImage]?.category}</span>
                            <h3 className="text-white text-2xl font-bold mt-1">{filteredItems[selectedImage]?.title}</h3>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default GalleryPage;
