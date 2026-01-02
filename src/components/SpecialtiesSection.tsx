import * as React from 'react';
import { Baby, Heart, Scissors, ArrowRight } from 'lucide-react';

const specialties = [
    {
        category: 'Infertility Treatments',
        icon: Baby,
        color: 'primary-blue',
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
        color: 'primary-teal',
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
        color: 'secondary-blue',
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
        <section className="py-24 bg-slate-50" id="services">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-[var(--primary-teal)] font-semibold text-sm uppercase tracking-widest mb-4">
                        Our Services
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6">
                        Our Specialties
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                        We offer a comprehensive range of services to address infertility concerns and provide personalized treatment options.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {specialties.map((specialty, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-transparent"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-[var(--${specialty.color})]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <specialty.icon className={`w-8 h-8 text-[var(--${specialty.color})]`} />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-[var(--text-main)] mb-6">{specialty.category}</h3>

                            {/* Items List */}
                            <ul className="space-y-3 mb-8">
                                {specialty.items.slice(0, 5).map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-teal)] mt-2.5 flex-shrink-0" />
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                                {specialty.items.length > 5 && (
                                    <li className="text-sm text-[var(--text-secondary)] pl-4">
                                        +{specialty.items.length - 5} more services
                                    </li>
                                )}
                            </ul>

                            {/* CTA */}
                            <a 
                                href="#" 
                                className="inline-flex items-center gap-2 text-[var(--primary-teal)] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                            >
                                Learn More 
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialtiesSection;
