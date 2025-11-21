import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface ContentSectionProps {
  id: string;
  badge?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function ContentSection({ id, badge, title, subtitle, children, className = "" }: ContentSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-20 ${className}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-12">
          <div
            ref={ref}
            className={`space-y-4 text-center max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {badge && (
              <Badge variant="outline" className="font-mono">
                {badge}
              </Badge>
            )}
            <h2 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <div className="space-y-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureListProps {
  items: Array<{
    title: string;
    description: string;
    icon?: ReactNode;
  }>;
}

export function FeatureList({ items }: FeatureListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <Card key={index} className="p-6 border-card-border hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
          <div className="space-y-3">
            {item.icon && <div className="text-primary" data-testid={`icon-feature-${index}`}>{item.icon}</div>}
            <h4 className="font-heading font-semibold text-lg" data-testid={`text-feature-title-${index}`}>{item.title}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground" data-testid={`text-feature-desc-${index}`}>{item.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

import { TextToSpeech } from "./TextToSpeech";

interface TextContentProps {
  content: string[];
}

export function TextContent({ content }: TextContentProps) {
  const fullText = content.join(" ");

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <TextToSpeech text={fullText} />
      {content.map((paragraph, index) => (
        <p key={index} className="text-foreground/80 leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
