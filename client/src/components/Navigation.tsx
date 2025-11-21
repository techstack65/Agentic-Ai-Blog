import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Cpu, Sparkles, Globe } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useLanguage } from "@/components/language-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, setLanguage } = useLanguage();

  const navLinks = [
    { label: t("nav.intro"), href: "#introduction" },
    { label: t("nav.diagram"), href: "#diagram" },
    { label: t("nav.llms"), href: "#llms" },
    { label: t("nav.agents"), href: "#agents" },
    { label: t("nav.workflows"), href: "#workflows" },
    { label: t("nav.architecture"), href: "#architecture" },
  ];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border/40 py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 font-heading font-bold text-xl hover:opacity-80 transition-opacity"
            aria-label="Scroll to top of page"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Cpu className="h-6 w-6 text-primary absolute" />
              <Sparkles className="h-3 w-3 text-primary absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              NeuralMind
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1 bg-background/50 backdrop-blur-sm p-1 rounded-full border border-border/40">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(link.href)}
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 text-sm font-medium px-4"
              >
                {link.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Globe className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Switch Language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")}>
                  Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("fr")}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("hi")}>
                  हिंदी
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("gu")}>
                  ગુજરાતી
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ModeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/40 p-4 animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="justify-start w-full text-lg font-medium py-6"
                  onClick={() => scrollToSection(link.href)}
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
