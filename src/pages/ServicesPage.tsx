import * as React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ApproachCards from '../components/ApproachCards';
import Testimonials from '../components/Testimonials';
import { ChevronDown, Baby, Heart, Stethoscope, Scissors, Pill, Activity, ArrowRight } from 'lucide-react';

const services = [
    {
        title: 'Infertility Treatments',
        icon: Baby,
        description: 'Comprehensive fertility treatments including IVF, IUI, ICSI, and more to help you achieve your dream of parenthood.',
    },
    {
        title: 'Obstetrics & Gynaecology',
        icon: Heart,
        description: "Complete women's health services from prenatal care to menopause management.",
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
    { q: "Is Well Life Hospital right for me if I'm struggling with infertility?", a: 'Absolutely! Our team of fertility specialists are experienced in treating various causes of infertility and will work with you to create a personalized treatment plan.' },
    { q: 'How long does the IVF process typically take?', a: 'A typical IVF cycle takes about 4-6 weeks from the start of medications to embryo transfer.' },
    { q: 'What are your payment options?', a: 'We accept cash, bank transfers, and major credit cards. We also offer flexible payment plans for fertility treatments.' },
];

const ServicesPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-sky-50 relative overflow-hidden">
                <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--secondary-blue)]/5 rounded-full blur-3xl" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block text-[var(--primary-teal)] font-semibold text-sm uppercase tracking-widest mb-4">
                            Our Services
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[var(--text-main)] leading-tight">
                            Comprehensive 
                            <span className="text-[var(--primary-blue)]"> Healthcare Services</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-[var(--text-main)] mb-4">
                            What We Offer
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)]">
                            At Well Life Hospital, we specialize in several key areas of healthcare
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">{service.title}</h3>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">{service.description}</p>
                                <a href="#" className="inline-flex items-center gap-2 text-[var(--primary-teal)] font-semibold text-sm group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </a>
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
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block text-[var(--primary-teal)] font-semibold text-sm uppercase tracking-widest mb-4">
                            FAQ
                        </span>
                        <h2 className="text-4xl font-bold text-[var(--text-main)]">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="font-semibold text-[var(--text-main)] pr-4">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-[var(--primary-teal)] flex-shrink-0 transition-transform duration-300 ${
                                            openFaq === index ? 'rotate-180' : ''
                                        }`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${
                                        openFaq === index ? 'max-h-40' : 'max-h-0'
                                    }`}>
                                        <div className="px-6 pb-5 text-[var(--text-secondary)]">
                                            {faq.a}
                                        </div>
                                    </div>
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
