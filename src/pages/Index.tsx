import FeatureCard from "@/components/FeatureCard";
import { MessageCircle, CalendarDays, TrendingUp, Microscope, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    title: "AI Chat Assistant",
    description:
      "Provides personalised, evidence-based fertility guidance and patient support, available 24/7 to answer questions, explain treatments, and reduce patient anxiety.",
    icon: MessageCircle,
    actionLabel: "Start Chat",
    variant: "primary" as const,
  },
  {
    title: "Cycle Tracking",
    description:
      "Tracks menstrual and treatment cycles to support patient planning, adherence, and informed clinical decision-making throughout fertility care.",
    icon: CalendarDays,
    actionLabel: "Track Cycle",
    variant: "secondary" as const,
  },
  {
    title: "IVF Success Prediction",
    description:
      "Uses advanced AI models to estimate treatment success probabilities based on clinical indicators and patient-specific data.",
    icon: TrendingUp,
    actionLabel: "Get Prediction",
    variant: "secondary" as const,
  },
  {
    title: "Embryo Grading",
    description:
      "Computer-vision–based assessment of embryo quality to support embryologist decisions and improve selection confidence.",
    icon: Microscope,
    actionLabel: "Analyse Embryo",
    variant: "primary" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section relative min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Overlay */}
        <div className="hero-overlay absolute inset-0" />

        {/* Content */}
        <div className="container max-w-5xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <span className="accent-badge inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Well-Life Hospital Partner
              </span>
            </div>

            {/* Title */}
            <h1 
              className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <span className="text-foreground">Fertily AI Tools for</span>
              <br />
              <span className="gradient-text">Advanced Fertility Care</span>
            </h1>

            {/* Subtitle */}
            <p 
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              AI-powered support for personalised fertility guidance, treatment planning, 
              and clinical decision-making.
            </p>

            {/* CTA Buttons */}
            <div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <button className="btn-primary text-base md:text-lg flex items-center gap-2">
                Start Using AI Fertility Tools
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Stats Row */}
            <div 
              className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto opacity-0 animate-fade-in"
              style={{ animationDelay: "500ms" }}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">95%</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Accuracy Rate</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-2xl md:text-3xl font-bold text-secondary">24/7</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">AI Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">50k+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Patients Helped</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-soft py-20 md:py-28 px-4">
        <div className="container max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14 md:mb-20">
            <span 
              className="font-semibold text-sm uppercase tracking-wider opacity-0 animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              Powered by AI
            </span>
            <h2 
              className="mt-3 text-3xl md:text-4xl font-bold opacity-0 animate-fade-in"
              style={{ animationDelay: "700ms" }}
            >
              Comprehensive AI Features
            </h2>
            <p 
              className="mt-4 text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in"
              style={{ animationDelay: "800ms" }}
            >
              Tools designed to support every stage of the fertility journey
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                actionLabel={feature.actionLabel}
                variant={feature.variant}
                delay={900 + index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 md:py-24 px-4 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container max-w-3xl mx-auto text-center relative z-10">
          <h3 
            className="text-2xl md:text-3xl font-bold text-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: "1300ms" }}
          >
            Ready to enhance your <span className="gradient-text">fertility care</span> with AI?
          </h3>
          <p 
            className="mt-4 text-muted-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: "1400ms" }}
          >
            Join leading clinics worldwide using Fertily's intelligent tools
          </p>
          <button 
            className="btn-primary mt-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "1500ms" }}
          >
            Get Started Today
            <ChevronRight className="inline ml-2" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
