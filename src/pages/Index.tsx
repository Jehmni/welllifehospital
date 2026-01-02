import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    title: "AI Chat Assistant",
    description:
      "Provides personalised, evidence-based fertility guidance and patient support, available 24/7 to answer questions, explain treatments, and reduce patient anxiety.",
  },
  {
    title: "Cycle Tracking",
    description:
      "Tracks menstrual and treatment cycles to support patient planning, adherence, and informed clinical decision-making throughout fertility care.",
  },
  {
    title: "IVF Success Prediction",
    description:
      "Uses advanced AI models to estimate treatment success probabilities based on clinical indicators and patient-specific data.",
  },
  {
    title: "Embryo Grading",
    description:
      "Computer-vision–based assessment of embryo quality to support embryologist decisions and improve selection confidence.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section py-16 md:py-24 lg:py-32 px-4">
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <span className="accent-badge">Well-Life Hospital Partner</span>
          </div>

          {/* Title */}
          <h1 
            className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            Fertily AI Tools for{" "}
            <span className="text-primary">Advanced Fertility Care</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            AI-powered support for personalised fertility guidance, treatment planning, 
            and clinical decision-making.
          </p>

          {/* CTA Button */}
          <div 
            className="mt-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <button className="btn-primary text-base md:text-lg">
              Start Using AI Fertility Tools
            </button>
          </div>

          {/* Trust indicator */}
          <p 
            className="mt-8 text-sm text-muted-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            Trusted by leading fertility clinics worldwide
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-soft py-16 md:py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="text-2xl md:text-3xl font-bold text-foreground opacity-0 animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              AI-Powered Features
            </h2>
            <p 
              className="mt-4 text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in"
              style={{ animationDelay: "700ms" }}
            >
              Comprehensive tools designed to support every stage of the fertility journey
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                delay={800 + index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container max-w-2xl mx-auto text-center">
          <p 
            className="text-muted-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "1200ms" }}
          >
            Ready to enhance your fertility care with AI?
          </p>
          <button 
            className="btn-primary opacity-0 animate-fade-in"
            style={{ animationDelay: "1300ms" }}
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
