import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/ai_neural_network_hero_background.png";

export function Hero() {
  const scrollToContent = () => {
    const element = document.getElementById("introduction");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              The Future of AI
            </span>
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
            The Autonomous
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Intelligence Era
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Decoding Large Language Models, AI Agents, and Agentic Workflows
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the evolution from talking machines to autonomous systems that plan, learn, and act independently
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="gap-2 text-base px-8"
              onClick={scrollToContent}
              data-testid="button-explore"
            >
              Explore the Guide
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 text-base px-8 bg-background/50 backdrop-blur-sm"
              onClick={() => document.getElementById("diagram")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-diagram"
            >
              View ORA Diagram
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover-elevate active-elevate-2 rounded-full p-2"
          aria-label="Scroll to content"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}
