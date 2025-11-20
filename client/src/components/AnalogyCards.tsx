import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Building2 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const analogies = [
  {
    icon: GraduationCap,
    keyword: "The Talking Brain",
    title: "Large Language Model (LLM)",
    subtitle: "The Smart Student",
    description:
      "An LLM can read all the books in the library and tell you what they say. It knows facts and can write a good essay, but it can't open a door, click a mouse, or do anything in the real world. It only talks.",
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    icon: Briefcase,
    keyword: "The Doing Assistant",
    title: "AI Agent",
    subtitle: "The Automated Assistant",
    description:
      "An Agent has the Talking Brain (the LLM), but it also has a to-do list, tools (like a calculator or a phone), and it can decide the steps needed to reach a goal. It turns words into actions.",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    icon: Building2,
    keyword: "The Intelligent Manager",
    title: "Agentic AI System",
    subtitle: "The Manager of Managers",
    description:
      "This is a huge system that coordinates many Assistants (Agents). It learns from every task, makes the whole process smarter over time, and manages complicated goals without needing help at every step.",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
];

export function AnalogyCards() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {analogies.map((analogy, index) => {
        const Icon = analogy.icon;
        return (
          <Card
            key={index}
            className={`p-6 hover-elevate transition-all duration-700 border-card-border ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
            data-testid={`card-analogy-${index}`}
          >
            <div className="space-y-4">
              <div className={`inline-flex p-3 rounded-lg ${analogy.bgColor}`}>
                <Icon className={`h-8 w-8 ${analogy.color}`} />
              </div>

              <div className="space-y-2">
                <Badge variant="secondary" className="font-mono text-xs">
                  {analogy.keyword}
                </Badge>
                <h3 className="font-heading font-semibold text-xl">{analogy.title}</h3>
                <p className="text-sm font-medium text-muted-foreground">{analogy.subtitle}</p>
              </div>

              <p className="text-sm leading-relaxed text-foreground/80">{analogy.description}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
