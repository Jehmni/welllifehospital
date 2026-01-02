import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container contact-content">
                <div className="contact-info fade-in">
                    <span className="badge">Get in Touch</span>
                    <h2>Contact Well-Life</h2>
                    <p>Have a question or need to schedule an appointment? Our team is here to help you 24/7.</p>
                    <div className="contact-details">
                        <div className="detail-item">
                            <span className="icon">📍</span>
                            <div>
                                <h4>Our Location</h4>
                                <p>Well-Life Hospital Street, Health City</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="icon">📞</span>
                            <div>
                                <h4>Call Us</h4>
                                <p>+123 456 7890</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <span className="icon">✉️</span>
                            <div>
                                <h4>Email Us</h4>
                                <p>info@welllifehospital.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form-container fade-in">
                    <form className="contact-form glass">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <select required>
                                <option value="">Select Service</option>
                                <option value="emergency">Emergency</option>
                                <option value="diagnostics">Diagnostics</option>
                                <option value="maternity">Maternity</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="4"></textarea>
                        </div>
                        <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
