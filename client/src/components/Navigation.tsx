import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain } from "lucide-react";

const navLinks = [
  { label: "Introduction", href: "#introduction" },
  { label: "Diagram", href: "#diagram" },
  { label: "LLMs", href: "#llms" },
  { label: "AI Agents", href: "#agents" },
  { label: "Workflows", href: "#workflows" },
  { label: "Architecture", href: "#architecture" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 font-heading font-bold text-lg hover-elevate active-elevate-2 rounded-md px-3 py-2"
            aria-label="Scroll to top of page"
            data-testid="button-logo"
          >
            <Brain className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline">AI Intelligence Era</span>
            <span className="sm:hidden">AI Era</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(link.href)}
                aria-label={`Navigate to ${link.label} section`}
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            data-testid="button-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => scrollToSection(link.href)}
                  aria-label={`Navigate to ${link.label} section`}
                  data-testid={`mobile-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
