import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Wrench, Database, Repeat } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const components = [
  {
    icon: Cpu,
    title: "LLM Core",
    analogy: "The Brain / The Planner",
    keywords: "Prompt Engineering, CoT, Context Window",
    description: "Generates steps, understands intent, and dictates actions. The central intelligence that coordinates all other components.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Wrench,
    title: "Tools",
    analogy: "The Toolbelt / Extensions",
    keywords: "Function Calling, APIs, Semantic Kernel",
    description: "Executes external functions like search, calculation, and data retrieval. Extends the agent's capabilities beyond language.",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Database,
    title: "Memory",
    analogy: "The Diary / Notebook",
    keywords: "Episodic/Semantic Memory, Vectorization",
    description: "Stores past interactions and long-term knowledge for context awareness. Enables personalization and learning.",
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
  },
  {
    icon: Repeat,
    title: "Loop",
    analogy: "The Continuous Thinker",
    keywords: "Observe-Plan-Act (OPA), ReAct",
    description: "Enables iterative refinement and learning based on observations. The cycle that makes agents truly autonomous.",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
  },
];

export function ArchitectureCards() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="outline" className="font-mono">
          System Architecture
        </Badge>
        <h3 className="font-heading font-semibold text-2xl md:text-3xl">
          Core Components of an Intelligent AI Agent
        </h3>
        <p className="text-muted-foreground">
          A sophisticated architecture combining specialized modules for reasoning, memory, and tool utilization
        </p>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {components.map((component, index) => {
          const Icon = component.icon;
          return (
            <Card
              key={index}
              className={`p-6 border-2 ${component.borderColor} hover-elevate transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-testid={`card-component-${index}`}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${component.bgColor} shrink-0`}>
                    <Icon className={`h-6 w-6 ${component.color}`} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-heading font-semibold text-xl">{component.title}</h4>
                    <p className="text-sm font-medium text-muted-foreground">{component.analogy}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {component.keywords.split(", ").map((keyword, i) => (
                      <Badge key={i} variant="secondary" className="font-mono text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {component.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
