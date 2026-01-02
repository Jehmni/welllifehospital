import * as React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ApproachCards from '../components/ApproachCards';
import Testimonials from '../components/Testimonials';
import { ChevronDown, ChevronUp, Baby, Heart, Stethoscope, Scissors, Pill, Activity } from 'lucide-react';

const services = [
    {
        title: 'Infertility Treatments',
        icon: Baby,
        description: 'Comprehensive fertility treatments including IVF, IUI, ICSI, and more to help you achieve your dream of parenthood.',
    },
    {
        title: 'Obstetrics & Gynaecology',
        icon: Heart,
        description: 'Complete women\'s health services from prenatal care to menopause management.',
    },
    {
        title: 'Minimal Access Surgery',
        icon: Scissors,
        description: 'Advanced laparoscopic and hysteroscopic procedures for faster recovery and minimal scarring.',
    },
    {
        title: 'Prenatal Care',
        icon: Activity,
        description: 'Comprehensive care throughout your pregnancy journey to ensure the health of mother and baby.',
    },
    {
        title: 'Fertility Counseling',
        icon: Stethoscope,
        description: 'Emotional support and guidance throughout your fertility journey with our dedicated counselors.',
    },
    {
        title: 'Reproductive Medicine',
        icon: Pill,
        description: 'Specialized treatments for reproductive health conditions affecting fertility.',
    },
];

const faqs = [
    { q: 'What services does Well Life Hospital offer?', a: 'We offer comprehensive fertility treatments, obstetrics and gynaecology services, minimal access surgery, prenatal care, and reproductive medicine.' },
    { q: 'How do I schedule an appointment?', a: 'You can schedule an appointment by calling us at +234 906 606 4314 or using our online booking system.' },
    { q: 'What are your hospital visiting hours?', a: 'Our hospital is open 24/7 for emergencies. Regular visiting hours are from 8:00 AM to 8:00 PM daily.' },
    { q: 'Is Well Life Hospital right for me if I\'m struggling with infertility?', a: 'Absolutely! Our team of fertility specialists are experienced in treating various causes of infertility and will work with you to create a personalized treatment plan.' },
    { q: 'Do you offer egg donation or surrogacy services?', a: 'Yes, we offer comprehensive donor services including egg donation. Please consult with our specialists for more details.' },
    { q: 'What are the different types of infertility tests offered at Well Life Hospital?', a: 'We offer a full range of fertility tests including hormone panels, ultrasound scans, HSG, semen analysis, and genetic testing.' },
    { q: 'How long does the IVF process typically take?', a: 'A typical IVF cycle takes about 4-6 weeks from the start of medications to embryo transfer.' },
    { q: 'What is the emotional support like for couples undergoing IVF?', a: 'We provide dedicated counseling services and support groups for couples throughout their fertility journey.' },
    { q: 'What are your payment options?', a: 'We accept cash, bank transfers, and major credit cards. We also offer flexible payment plans for fertility treatments.' },
    { q: 'What are the benefits of MIS compared to traditional surgery?', a: 'Minimal access surgery offers smaller incisions, less pain, faster recovery, shorter hospital stays, and minimal scarring.' },
];

const ServicesPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary-blue)] via-[#000a8c] to-[var(--secondary-blue)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Services
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Services</h1>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-4">
                            Our Services
                        </h2>
                        <p className="text-[var(--text-secondary)] max-w-3xl mx-auto text-lg">
                            At Well Life Hospital, we specialize in several key areas of healthcare, including:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-[var(--bg-light)] rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[var(--primary-teal)]/20 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-main)] mb-4">{service.title}</h3>
                                <p className="text-[var(--text-secondary)]">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Cards */}
            <ApproachCards />

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                            FAQ
                        </span>
                        <h2 className="text-4xl font-bold text-[var(--primary-blue)]">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-semibold text-[var(--text-main)] flex items-center gap-3">
                                            <span className="text-[var(--primary-teal)]">+</span>
                                            {faq.q}
                                        </span>
                                        {openFaq === index ? (
                                            <ChevronUp className="w-5 h-5 text-[var(--primary-teal)] flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        )}
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-6 pb-4 text-[var(--text-secondary)]">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;
