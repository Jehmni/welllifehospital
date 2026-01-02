import * as React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Facebook, Instagram, Twitter, Youtube, X } from 'lucide-react';

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
        <div className="min-h-screen">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary-blue)] via-[#000a8c] to-[var(--secondary-blue)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        Gallery
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Take a peek at Well-Life Hospital's inside
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Take a look around and see where the magic of medicine takes place.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                                    activeCategory === category
                                        ? 'bg-[var(--primary-blue)] text-white shadow-lg'
                                        : 'bg-[var(--bg-light)] text-[var(--text-secondary)] hover:bg-gray-200'
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
                                className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-[var(--primary-blue)]/20 to-[var(--primary-teal)]/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                                        <span className="text-4xl text-white/30">📷</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform">
                                    <span className="text-sm text-[var(--primary-teal)] font-medium">{item.category}</span>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-16 bg-[var(--bg-light)]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-[var(--primary-blue)]">Your </span>
                        <span className="text-[var(--primary-teal)] italic">Well-being </span>
                        <span className="text-[var(--primary-blue)]">is our goal</span>
                    </h2>
                </div>
            </section>

            {/* Social Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold text-[var(--primary-teal)] mb-8">
                        Follow Well-Life Hospital
                    </h3>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="w-12 h-12 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center hover:bg-[var(--primary-teal)] transition-colors">
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="max-w-4xl w-full">
                        <div className="aspect-video bg-gradient-to-br from-[var(--primary-blue)]/30 to-[var(--primary-teal)]/30 rounded-2xl flex items-center justify-center">
                            <span className="text-6xl text-white/30">📷</span>
                        </div>
                        <div className="text-center mt-6">
                            <span className="text-[var(--primary-teal)] text-sm">{filteredItems[selectedImage]?.category}</span>
                            <h3 className="text-white text-2xl font-bold">{filteredItems[selectedImage]?.title}</h3>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default GalleryPage;
