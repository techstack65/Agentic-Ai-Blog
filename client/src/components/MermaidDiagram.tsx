import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    primaryColor: "#3b82f6",
    primaryTextColor: "#fff",
    primaryBorderColor: "#2563eb",
    lineColor: "#94a3b8",
    secondaryColor: "#8b5cf6",
    tertiaryColor: "#14b8a6",
    background: "#ffffff",
    mainBkg: "#eff6ff",
    secondBkg: "#f5f3ff",
    tertiaryBkg: "#f0fdfa",
    textColor: "#0f172a",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
  },
  flowchart: {
    curve: "basis",
    padding: 20,
    nodeSpacing: 50,
    rankSpacing: 80,
  },
});

interface MermaidDiagramProps {
  chart: string;
  id?: string;
}

export function MermaidDiagram({ chart, id = "mermaid-diagram" }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRenderedRef = useRef(false);
  const [svgContent, setSvgContent] = useState<string>("");
  const { ref: intersectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    const renderDiagram = async () => {
      if (isVisible && !hasRenderedRef.current && chart) {
        try {
          hasRenderedRef.current = true;
          const { svg } = await mermaid.render(`${id}-svg`, chart);
          setSvgContent(svg);
        } catch (error) {
          console.error("Mermaid rendering error:", error);
        }
      }
    };

    renderDiagram();
  }, [isVisible, chart, id]);

  return (
    <div ref={intersectionRef}>
      <Card 
        className={`p-8 overflow-auto border-border transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        data-testid="mermaid-diagram"
      >
        <div 
          ref={containerRef} 
          className="flex justify-center items-center min-h-[400px]"
          data-testid="mermaid-content"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </Card>
    </div>
  );
}
