import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { AnalogyCards } from "@/components/AnalogyCards";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ORADiagram } from "@/components/ORADiagram";
import { ArchitectureCards } from "@/components/ArchitectureCards";
import { ContentSection, FeatureList, TextContent } from "@/components/ContentSection";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Rocket, TrendingUp, Zap, BookOpen, AlertCircle, Database, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      <ContentSection
        id="introduction"
        badge="Section I"
        title="The AI Hierarchy: Talking, Doing, and Managing"
        subtitle="Understanding the three main technologies transforming AI from passive tools to active, strategic partners"
      >
        <AnalogyCards />

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-heading font-semibold text-xl mb-2">The Leap from Talking Machines to Doing Machines</h4>
                <p className="text-foreground/80 leading-relaxed">
                  The latest evolution of artificial intelligence is marked by a profound transition: AI systems are moving 
                  beyond mere generative capabilities toward <strong>autonomy</strong>. This shift is characterized by the emergence 
                  of systems capable of planning, learning, and acting independently, effectively transforming AI from a passive 
                  tool into an active, strategic partner.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <TextContent
          content={[
            "This distinction underscores the central objective of the current AI era: achieving process optimization, not merely output generation. While an LLM enhances the quality of human work by providing superior content, Agentic AI systems deliver measurable return on investment (ROI) by focusing on dynamic process improvement, cost reduction, and efficiency.",
            "The transition from simply asking AI for answers to giving AI an objective and letting it operate like an autonomous teammate represents a significant shift in enterprise strategy. This autonomy is what enables complex, multi-step tasks to be automated, which previously required constant human intervention."
          ]}
        />

        <Card className="p-6 border-chart-3/30 bg-chart-3/5">
          <div className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-chart-3 shrink-0 mt-1" />
            <div className="space-y-2">
              <h5 className="font-semibold">Industry Forecast</h5>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Gartner anticipates that by <strong>2028</strong>, autonomous action through agentic AI will account for 
                at least <strong>15% of daily work decisions</strong>, marking a decisive move beyond simple, fixed automation 
                toward systems that can act independently.
              </p>
            </div>
          </div>
        </Card>
      </ContentSection>

      <div className="bg-muted/30">
        <ContentSection
          id="diagram"
          badge="Section II"
          title="Visualizing Autonomy: The Agent's Core Loop"
          subtitle="The continuous cycle that enables agents to solve problems dynamically and refine their work"
        >
          <ORADiagram />
        </ContentSection>
      </div>

      <ContentSection
        id="llms"
        badge="Section III"
        title="The Foundational Mind: Large Language Models"
        subtitle="Understanding the cognitive engine that powers every advanced AI Agent"
      >
        <Card className="p-8 bg-gradient-to-br from-chart-1/10 to-chart-1/5 border-chart-1/30">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-chart-1" />
              <h4 className="font-heading font-semibold text-xl">The Smart Student Analogy</h4>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              A Large Language Model is an advanced artificial intelligence system trained on immense datasets, often 
              comprising trillions of words. Its core function is to analyze patterns and predict the most statistically 
              probable sequence of words to generate human-like text based on the input it receives.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              LLMs are analogous to a student progressing through high school: they are foundational models that possess 
              a broad, general knowledge base covering a wide array of subjects from language to science. This training 
              phase is the longest and requires substantial data to develop the model's generalized reasoning capabilities.
            </p>
          </div>
        </Card>

        <div>
          <h3 className="font-heading font-semibold text-2xl mb-6">Capabilities and Limitations</h3>
          <FeatureList
            items={[
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Strengths",
                description: "Excel at high-efficiency text-based tasks including content creation, summarization, translation, and complex research assistance. Power chatbots and virtual assistants with natural, context-aware conversations."
              },
              {
                icon: <AlertCircle className="h-5 w-5" />,
                title: "The Action Barrier",
                description: "LLMs act only like a well-read librarian. They can provide information, but cannot perceive the external environment or execute tasks. They generate text without the capability to interact with the real world or automate processes."
              },
              {
                icon: <AlertCircle className="h-5 w-5" />,
                title: "The Hallucination Problem",
                description: "Despite their broad knowledge, models can struggle when faced with specialized queries outside their core training distribution. They might generate inaccurate responses when certainty is required in a niche domain."
              },
              {
                icon: <AlertCircle className="h-5 w-5" />,
                title: "Brittleness in Generalization",
                description: "The LLM's intelligence is often based on sophisticated pattern-matching rather than true abstract comprehension. Reasoning capabilities can be brittle and less flexible than human cognition in far-transfer domains."
              }
            ]}
          />
        </div>

        <div>
          <h3 className="font-heading font-semibold text-2xl mb-6">Augmenting the Knowledge Base</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-purple-500/30 bg-purple-500/5">
              <div className="space-y-3">
                <Badge variant="outline" className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30">
                  Fine-Tuning
                </Badge>
                <h4 className="font-heading font-semibold text-lg">Higher Education</h4>
                <p className="text-sm leading-relaxed text-foreground/80">
                  This process sharpens an LLM's expertise in a chosen field, similar to post-secondary education. 
                  A model can be fine-tuned on a specialized knowledge base (e.g., legal terminology) or specific 
                  tasks (e.g., instruction following) to build upon its general knowledge.
                </p>
              </div>
            </Card>

            <Card className="p-6 border-teal-500/30 bg-teal-500/5">
              <div className="space-y-3">
                <Badge variant="outline" className="bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30">
                  RAG
                </Badge>
                <h4 className="font-heading font-semibold text-lg">Retrieval-Augmented Generation</h4>
                <p className="text-sm leading-relaxed text-foreground/80">
                  This technique allows the model to reference external, real-time documents or databases when generating 
                  a response. It is analogous to a professional applying specialized knowledge while referencing comprehensive 
                  knowledge bases. RAG is essential for grounding responses in reliable factual knowledge.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </ContentSection>

      <div className="bg-muted/30">
        <ContentSection
          id="agents"
          badge="Section IV"
          title="From Prediction to Action: The Rise of AI Agents"
          subtitle="Building upon the LLM's cognitive strength with memory, planning, and action execution"
        >
          <Card className="p-8 bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/30">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6 text-chart-2" />
                <h4 className="font-heading font-semibold text-xl">The Digital Assistant Analogy</h4>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                An AI Agent is a piece of software that utilizes a generative LLM as its core intelligence, enabling it 
                to comprehend user intent and reason through problems. However, unlike an LLM, an AI Agent is designed to 
                make decisions about what to do and how to do it. It is equipped with the ability to perceive, process 
                information, develop a plan, and take action within an environment to achieve specific goals.
              </p>
              <div className="bg-background/50 p-4 rounded-lg border border-chart-2/20">
                <p className="text-sm font-semibold text-foreground/90">
                  The functional difference is crucial: an LLM is powerful for generating content and answering questions; 
                  an AI Agent takes AI beyond chat—it executes tasks and automates processes.
                </p>
              </div>
            </div>
          </Card>

          <div>
            <h3 className="font-heading font-semibold text-2xl mb-6">Core Operational Difference: Statefulness</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-card-border">
                <div className="space-y-3">
                  <h4 className="font-heading font-semibold text-lg">LLM Static Nature</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    LLMs are static after their initial training; they do not hold memory across sessions and cannot 
                    learn or adapt in real-time if their responses are unsatisfactory.
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-chart-2/30 bg-chart-2/5">
                <div className="space-y-3">
                  <h4 className="font-heading font-semibold text-lg">Agent Adaptability</h4>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    AI Agents are designed to learn and adapt through accumulated experience, reinforcement learning, 
                    or a memory system. This allows them to adapt to user expectations over time and provide personalized, 
                    comprehensive responses.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-2xl mb-6 text-center">Comparison: LLMs vs AI Agents vs Agentic AI Systems</h3>
            <ComparisonTable />
          </div>
        </ContentSection>
      </div>

      <ContentSection
        id="architecture"
        badge="Section V"
        title="The Agent's Architecture"
        subtitle="Memory, Tools, and Reasoning working together to enable real-world utility"
      >
        <TextContent
          content={[
            "For an AI Agent to transition from theoretical capability to real-world operational utility, it must be supported by a sophisticated internal architecture comprising specialized modules for reasoning, memory, and tool utilization. The successful performance of an agent depends equally on the strength of the LLM and the robust engineering of these external components."
          ]}
        />

        <ArchitectureCards />

        <div>
          <h3 className="font-heading font-semibold text-2xl mb-6">Advanced Reasoning: ReAct</h3>
          <Card className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/30">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30">
                Reasoning and Acting
              </Badge>
              <h4 className="font-heading font-semibold text-xl">ReAct Framework</h4>
              <p className="text-foreground/80 leading-relaxed">
                The core mechanism that allows an LLM to serve as the sophisticated "brain" of an agent is the ReAct 
                conceptual framework. ReAct (Reasoning and Acting) is a paradigm that synergizes chain-of-thought (CoT) 
                reasoning with the capacity for external tool use.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The ReAct agent solves problems dynamically by thinking step-by-step, taking action (like searching a 
                knowledge base), observing the result of that action, and then refining its reasoning before taking the 
                next step. This framework is an important step in the evolution of generative AI, moving beyond 
                conversational chatbots toward complex problem-solving.
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-muted/50 border-border">
          <div className="flex items-start gap-3">
            <Layers className="h-5 w-5 text-primary shrink-0 mt-1" />
            <div className="space-y-2">
              <h5 className="font-semibold">Process Orchestration</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The development of autonomous systems increasingly relies on process orchestration, where the focus 
                shifts from creating monolithic models to building robust, interconnected systems that manage communication 
                between specialized modules (LLM, Memory, Tools).
              </p>
            </div>
          </div>
        </Card>
      </ContentSection>

      <div className="bg-muted/30">
        <ContentSection
          id="workflows"
          badge="Section VI"
          title="Agentic AI: Building Autonomous Workflows"
          subtitle="Connecting and coordinating multiple AI agents to perform complex, iterative, multi-step frameworks"
        >
          <Card className="p-8 bg-gradient-to-br from-chart-3/10 to-chart-3/5 border-chart-3/30">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Database className="h-6 w-6 text-chart-3" />
                <h4 className="font-heading font-semibold text-xl">Defining Agentic Workflows</h4>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Agentic workflows are structured sequences of tasks where AI agents interpret high-level goals, analyze 
                available information, and make independent decisions about the next steps in real time, with minimal 
                human intervention.
              </p>
              <div className="bg-background/50 p-4 rounded-lg border border-chart-3/20">
                <p className="text-sm font-semibold text-foreground/90">
                  This dynamic capability is what differentiates agentic workflows from traditional, fixed automation. 
                  While non-agentic systems follow a predefined, rule-based sequence, agentic systems use dynamic decision 
                  logic and can adapt instantly.
                </p>
              </div>
            </div>
          </Card>

          <div>
            <h3 className="font-heading font-semibold text-2xl mb-6">Key Aspects of Complex Agentic Workflows</h3>
            <FeatureList
              items={[
                {
                  title: "Multi-Agent Collaboration",
                  description: "The most sophisticated agentic systems are often multi-agent systems, where specialized agents interact and coordinate their decision-making processes to achieve a common, complex goal. One agent might handle data retrieval, a second performs analysis, and a third manages communication."
                },
                {
                  title: "Reflection",
                  description: "A critical pattern in agentic workflows is reflection, where the agent evaluates the results of its actions and adjusts its subsequent plan based on successful or unsuccessful outcomes."
                },
                {
                  title: "Human-in-the-Loop (HIL) Controls",
                  description: "To ensure safety and compliance, especially for high-impact or sensitive operations, agentic workflows integrate human oversight. This involves mechanisms that require manual approval before critical executions."
                },
                {
                  title: "Self-Correction Mechanism",
                  description: "If conditions change, an agentic workflow can decide to collect more data or trigger additional processes, demonstrating dynamic adaptation that goes beyond simple if-then rules."
                }
              ]}
            />
          </div>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-1" />
              <div className="space-y-2">
                <h5 className="font-semibold">The Future of Work</h5>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  This rapid increase in "digital labor" and "digital workers" is fundamentally reshaping how businesses 
                  define efficiency and scale operations. Agentic AI represents the next frontier in process automation, 
                  moving from simple task completion to intelligent, adaptive workflow management.
                </p>
              </div>
            </div>
          </Card>
        </ContentSection>
      </div>

      <Footer />
    </div>
  );
}
