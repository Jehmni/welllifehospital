import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionLabel: string;
  variant?: "primary" | "secondary";
  delay?: number;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  actionLabel,
  variant = "primary",
  delay = 0 
}: FeatureCardProps) => {
  return (
    <div 
      className="feature-card p-6 md:p-8 opacity-0 animate-fade-in-up group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-5">
        {/* Icon */}
        <div className="feature-icon">
          <Icon size={26} strokeWidth={1.75} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Action Button */}
        <button 
          className={variant === "primary" ? "btn-secondary" : "btn-teal"}
        >
          <span className="flex items-center gap-2">
            {actionLabel}
            <ArrowRight 
              size={16} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
