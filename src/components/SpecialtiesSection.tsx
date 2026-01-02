import * as React from 'react';
import { Baby, Heart, Stethoscope, Scissors, ArrowRight } from 'lucide-react';

const specialties = [
    {
        category: 'Infertility Treatments',
        icon: Baby,
        items: [
            'Full Infertility Work-up and Treatments',
            'IVF (In Vitro Fertilization)',
            'IUI (Intrauterine Insemination)',
            'ICSI (Intracytoplasmic Sperm Injection)',
            'Donor Services',
            'Fertility Preservation',
            'Preimplantation Genetic Diagnosis (PGD)',
        ],
    },
    {
        category: 'Obstetrics & Gynaecology',
        icon: Heart,
        items: [
            'Prenatal care and pregnancy management',
            'Labor and delivery',
            'Gynecological exams and screenings',
            'Contraception counseling',
            'Menstrual disorder and menopause management',
            'Treatment of gynecological conditions',
            'Minimally invasive surgeries',
            'Fertility evaluations and treatments',
        ],
    },
    {
        category: 'Minimal Access Surgery',
        icon: Scissors,
        items: [
            'Laparoscopic Hysterectomy',
            'Laparoscopic myomectomy (removal of uterine fibroids)',
            'Laparoscopic ovarian cystectomy (removal of ovarian cysts)',
            'Hysteroscopic polypectomy (removal of uterine polyps)',
            'Hysteroscopic septum resection (correction of uterine septum)',
            'Fetoscopy',
        ],
    },
];

const SpecialtiesSection: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block bg-[var(--primary-teal)]/10 text-[var(--primary-teal)] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-blue)] mb-4">
                        Our Specialties
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-3xl mx-auto text-lg">
                        We offer a comprehensive range of services to address infertility concerns and provide personalized treatment options. Our team of experts is dedicated to helping individuals and couples navigate the journey to parenthood.
                    </p>
                </div>

                <div className="text-center mb-12">
                    <span className="text-[var(--primary-teal)] font-semibold uppercase tracking-wider text-sm">
                        Here are some of the services we provide
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {specialties.slice(0, 2).map((specialty, index) => (
                        <div
                            key={index}
                            className="bg-[var(--bg-light)] rounded-3xl p-8 hover:shadow-xl transition-shadow border border-transparent hover:border-[var(--primary-teal)]/20"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] flex items-center justify-center">
                                    <specialty.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-main)]">{specialty.category}</h3>
                            </div>
                            <ul className="space-y-3 mb-6">
                                {specialty.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                        <span className="w-2 h-2 rounded-full bg-[var(--primary-teal)] mt-2 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex items-center gap-2 text-[var(--primary-teal)] font-semibold hover:gap-3 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto">
                    {specialties.slice(2).map((specialty, index) => (
                        <div
                            key={index}
                            className="bg-[var(--bg-light)] rounded-3xl p-8 hover:shadow-xl transition-shadow border border-transparent hover:border-[var(--primary-teal)]/20"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-teal)] to-[var(--accent-teal)] flex items-center justify-center">
                                    <specialty.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-main)]">{specialty.category}</h3>
                            </div>
                            <ul className="space-y-3 mb-6">
                                {specialty.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                        <span className="w-2 h-2 rounded-full bg-[var(--primary-teal)] mt-2 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex items-center gap-2 text-[var(--primary-teal)] font-semibold hover:gap-3 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialtiesSection;
