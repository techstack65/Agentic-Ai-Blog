import { Brain, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-heading font-bold text-lg">AI Intelligence Era</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              A comprehensive guide to understanding the evolution of AI from Large Language Models to autonomous
              AI Agents and Agentic Workflows.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wide">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Introduction", "Diagram", "LLMs", "AI Agents", "Workflows"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const id = link.toLowerCase().replace(" ", "-");
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                  aria-label={`Navigate to ${link} section`}
                  data-testid={`footer-link-${link.toLowerCase().replace(" ", "-")}`}
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wide">Resources</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Technical Documentation</span>
              <span className="text-sm text-muted-foreground">Research Papers</span>
              <span className="text-sm text-muted-foreground">Industry Reports</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Blogtech
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
            aria-label="Scroll back to top of page"
            data-testid="button-scroll-top"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
