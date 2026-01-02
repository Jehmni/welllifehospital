interface FeatureCardProps {
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="feature-card relative p-6 md:p-8 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
      
      {/* Subtle accent indicator */}
      <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-secondary opacity-60" />
    </div>
  );
};

export default FeatureCard;
