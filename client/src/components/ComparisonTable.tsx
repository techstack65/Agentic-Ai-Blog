import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const features = [
  {
    category: "Primary Function",
    llm: "Generate text, answer questions, summarize",
    agent: "Execute complex tasks, use tools, solve problems",
    agentic: "Autonomously manage multi-step, adaptive goals",
  },
  {
    category: "Key Capability",
    llm: "Natural Language Processing (NLP)",
    agent: "Reasoning and Action (ReAct)",
    agentic: "Dynamic Workflow Orchestration",
  },
  {
    category: "Autonomy Level",
    llm: "Low (Requires constant prompting)",
    agent: "Medium (Can plan and take action)",
    agentic: "High (Self-corrects, adapts, learns)",
  },
  {
    category: "Analogy",
    llm: "Well-Read Librarian / Student",
    agent: "Automated Assistant",
    agentic: "Intelligent Manager",
  },
];

export function ComparisonTable() {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground">
              Feature
            </div>
            <div className="text-center">
              <Badge variant="outline" className="bg-chart-1/10 text-chart-1 border-chart-1/30">
                Large Language Model
              </Badge>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/30">
                AI Agent (Single)
              </Badge>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="bg-chart-3/10 text-chart-3 border-chart-3/30">
                Agentic AI System
              </Badge>
            </div>
          </div>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="grid grid-cols-4 gap-4 p-4 items-center border-card-border"
                data-testid={`row-feature-${index}`}
              >
                <div className="font-medium text-sm">{feature.category}</div>
                <div className="text-sm text-muted-foreground flex items-start gap-2">
                  <Check className="h-4 w-4 text-chart-1 shrink-0 mt-0.5" />
                  <span>{feature.llm}</span>
                </div>
                <div className="text-sm text-muted-foreground flex items-start gap-2">
                  <Check className="h-4 w-4 text-chart-2 shrink-0 mt-0.5" />
                  <span>{feature.agent}</span>
                </div>
                <div className="text-sm text-muted-foreground flex items-start gap-2">
                  <Check className="h-4 w-4 text-chart-3 shrink-0 mt-0.5" />
                  <span>{feature.agentic}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden space-y-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 space-y-4 border-card-border" data-testid={`card-feature-mobile-${index}`}>
            <h4 className="font-heading font-semibold text-lg">{feature.category}</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Badge variant="outline" className="bg-chart-1/10 text-chart-1 border-chart-1/30 shrink-0">
                  LLM
                </Badge>
                <p className="text-sm text-muted-foreground" data-testid={`text-llm-${index}`}>{feature.llm}</p>
              </div>
              <div className="flex gap-3">
                <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/30 shrink-0">
                  Agent
                </Badge>
                <p className="text-sm text-muted-foreground" data-testid={`text-agent-${index}`}>{feature.agent}</p>
              </div>
              <div className="flex gap-3">
                <Badge variant="outline" className="bg-chart-3/10 text-chart-3 border-chart-3/30 shrink-0">
                  Agentic
                </Badge>
                <p className="text-sm text-muted-foreground" data-testid={`text-agentic-${index}`}>{feature.agentic}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
