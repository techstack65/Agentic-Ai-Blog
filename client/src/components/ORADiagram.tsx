import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { MermaidDiagram } from "./MermaidDiagram";

const mermaidChart = `
graph TD
    A[Start: Receive Goal] --> B{Observe & Perceive<br/>Environment}
    B --> C{Reasoning &<br/>Planning}
    C --> D[Act: Execute<br/>with Tools]
    D --> E{Observation<br/>Result}
    E -->|Goal Achieved?| F[End: Success]
    E -->|No: Refine Plan| C
    
    style A fill:#d0f8d0,stroke:#3c763d,stroke-width:2px,color:#000
    style F fill:#add8e6,stroke:#00008b,stroke-width:2px,color:#000
    style B fill:#fffacd,stroke:#daa520,stroke-width:2px,color:#000
    style C fill:#ffe0b2,stroke:#ff8c00,stroke-width:2px,color:#000
    style D fill:#f0f8ff,stroke:#4169e1,stroke-width:2px,color:#000
    style E fill:#d3d3d3,stroke:#696969,stroke-width:2px,color:#000
`;

export function ORADiagram() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="outline" className="font-mono" data-testid="badge-ora">
          The Agent's Intelligence Loop
        </Badge>
        <h3 className="font-heading font-semibold text-2xl md:text-3xl" data-testid="text-ora-title">
          Observe-Reason-Act (ORA) Cycle
        </h3>
        <p className="text-muted-foreground" data-testid="text-ora-description">
          This continuous loop enables agents to solve problems dynamically, self-correct, and update plans as needed
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <MermaidDiagram chart={mermaidChart} id="ora-cycle-diagram" />

        <Card className="mt-8 p-6 bg-muted/50 border-border" data-testid="card-ora-legend">
          <div className="flex items-start gap-3">
            <RefreshCw className="h-5 w-5 text-primary shrink-0 mt-1" data-testid="icon-refresh" />
            <div className="space-y-2">
              <h5 className="font-semibold" data-testid="text-legend-title">Iterative Refinement</h5>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-legend-description">
                After observing results, the agent evaluates whether the goal is achieved. If not, it refines its plan 
                and repeats the cycle, creating a continuous loop of improvement until the objective is met.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
