import * as React from 'react';
import Navbar from '../components/Navbar';

const GalleryPage: React.FC = () => {
    return (
        <div className="gallery-page">
            <Navbar />
            <main style={{ paddingTop: '80px' }}>
                <section className="gallery-hero" style={{ padding: '6rem 0', background: 'var(--bg-light)', textAlign: 'center' }}>
                    <div className="container">
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Our Facility</h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                            Take a peek at Well-Life Hospital's inside. We maintain a clean, comfortable, and modern environment for our patients.
                        </p>
                    </div>
                </section>

                <section className="gallery-grid-section" style={{ padding: '5rem 0' }}>
                    <div className="container">
                        <div className="gallery-filters" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                            <button className="hospital-btn-secondary">All</button>
                            <button className="hospital-btn-primary" style={{ background: 'transparent', border: '1px solid var(--primary-blue)', color: 'var(--primary-blue)', boxShadow: 'none' }}>Exterior</button>
                            <button className="hospital-btn-primary" style={{ background: 'transparent', border: '1px solid var(--primary-blue)', color: 'var(--primary-blue)', boxShadow: 'none' }}>Facilities</button>
                        </div>

                        <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="gallery-item glass" style={{ height: '250px', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
                                    <div style={{ width: '100%', height: '100%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                                        Image {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <footer style={{ padding: '4rem 0 2rem', backgroundColor: 'var(--primary-blue)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="footer-logo" style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>Well-Life Hospital</h2>
                        <p style={{ opacity: 0.7 }}>Your Well-being is our goal.</p>
                    </div>
                    <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>&copy; 2026 Well-Life Hospital. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default GalleryPage;
