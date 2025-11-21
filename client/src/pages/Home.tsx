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
import { useLanguage } from "@/components/language-provider";
import { TextToSpeech } from "@/components/TextToSpeech";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 font-sans">
      <Navigation />
      <Hero />

      <div className="max-w-3xl mx-auto px-6">
        <ContentSection
          id="introduction"
          badge="Section I"
          title={t("section.talking_vs_doing")}
          subtitle={t("section.talking_vs_doing.subtitle")}
        >
          <AnalogyCards />

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20 my-8">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold text-xl mb-2">{t("section.intro.big_shift.title")}</h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {t("section.intro.big_shift.text")}
                    </p>
                  </div>
                </div>
              </div>
              <TextToSpeech text={`${t("section.intro.big_shift.title")}. ${t("section.intro.big_shift.text")}`} />
            </div>
          </Card>

          <TextContent
            content={[
              t("section.intro.analogy.text1"),
              t("section.intro.analogy.text2")
            ]}
          />

          <Card className="p-6 border-chart-3/30 bg-chart-3/5 mt-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-chart-3 shrink-0 mt-1" />
                <div className="space-y-2">
                  <h5 className="font-semibold">{t("section.intro.future.title")}</h5>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {t("section.intro.future.text")}
                  </p>
                </div>
              </div>
              <TextToSpeech text={`${t("section.intro.future.title")}. ${t("section.intro.future.text")}`} />
            </div>
          </Card>
        </ContentSection>
      </div>

      <div className="bg-muted/30 relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6">
          <ContentSection
            id="diagram"
            badge="Section II"
            title={t("section.diagram")}
            subtitle={t("section.diagram.subtitle")}
          >
            <ORADiagram />
          </ContentSection>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <ContentSection
          id="llms"
          badge="Section III"
          title={t("section.llms")}
          subtitle={t("section.llms.subtitle")}
        >
          <Card className="p-8 bg-gradient-to-br from-chart-1/10 to-chart-1/5 border-chart-1/30 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-chart-1" />
                <h4 className="font-heading font-semibold text-xl">{t("section.llms.student.title")}</h4>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                {t("section.llms.student.text")}
              </p>
              <TextToSpeech text={`${t("section.llms.student.title")}. ${t("section.llms.student.text")}`} />
            </div>
          </Card>

          <div className="mb-12">
            <h3 className="font-heading font-semibold text-2xl mb-6">{t("section.llms.pros_cons.title")}</h3>
            <FeatureList
              items={[
                {
                  icon: <Zap className="h-5 w-5" />,
                  title: t("section.llms.pros_cons.fast.title"),
                  description: t("section.llms.pros_cons.fast.desc")
                },
                {
                  icon: <AlertCircle className="h-5 w-5" />,
                  title: t("section.llms.pros_cons.cant_act.title"),
                  description: t("section.llms.pros_cons.cant_act.desc")
                },
                {
                  icon: <AlertCircle className="h-5 w-5" />,
                  title: t("section.llms.pros_cons.wrong.title"),
                  description: t("section.llms.pros_cons.wrong.desc")
                },
                {
                  icon: <AlertCircle className="h-5 w-5" />,
                  title: t("section.llms.pros_cons.memory.title"),
                  description: t("section.llms.pros_cons.memory.desc")
                }
              ]}
            />
          </div>

          <div>
            <h3 className="font-heading font-semibold text-2xl mb-6">{t("section.llms.smarter.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-purple-500/30 bg-purple-500/5">
                <div className="space-y-3">
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30">
                    Fine-Tuning
                  </Badge>
                  <h4 className="font-heading font-semibold text-lg">{t("section.llms.smarter.finetuning.title")}</h4>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {t("section.llms.smarter.finetuning.desc")}
                  </p>
                  <TextToSpeech text={`${t("section.llms.smarter.finetuning.title")}. ${t("section.llms.smarter.finetuning.desc")}`} />
                </div>
              </Card>

              <Card className="p-6 border-teal-500/30 bg-teal-500/5">
                <div className="space-y-3">
                  <Badge variant="outline" className="bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30">
                    RAG
                  </Badge>
                  <h4 className="font-heading font-semibold text-lg">{t("section.llms.smarter.rag.title")}</h4>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {t("section.llms.smarter.rag.desc")}
                  </p>
                  <TextToSpeech text={`${t("section.llms.smarter.rag.title")}. ${t("section.llms.smarter.rag.desc")}`} />
                </div>
              </Card>
            </div>
          </div>
        </ContentSection>
      </div>

      <div className="bg-muted/30 relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6">
          <ContentSection
            id="agents"
            badge="Section IV"
            title={t("section.agents")}
            subtitle={t("section.agents.subtitle")}
          >
            <Card className="p-8 bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/30 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-chart-2" />
                  <h4 className="font-heading font-semibold text-xl">{t("section.agents.worker.title")}</h4>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {t("section.agents.worker.text")}
                </p>
                <div className="bg-background/50 p-4 rounded-lg border border-chart-2/20">
                  <p className="text-sm font-semibold text-foreground/90">
                    {t("section.agents.worker.note")}
                  </p>
                </div>
                <TextToSpeech text={`${t("section.agents.worker.title")}. ${t("section.agents.worker.text")}. ${t("section.agents.worker.note")}`} />
              </div>
            </Card>

            <div className="mb-12">
              <h3 className="font-heading font-semibold text-2xl mb-6">{t("section.agents.diff.title")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-card-border">
                  <div className="space-y-3">
                    <h4 className="font-heading font-semibold text-lg">{t("section.agents.diff.llm.title")}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t("section.agents.diff.llm.desc")}
                    </p>
                    <TextToSpeech text={`${t("section.agents.diff.llm.title")}. ${t("section.agents.diff.llm.desc")}`} />
                  </div>
                </Card>

                <Card className="p-6 border-chart-2/30 bg-chart-2/5">
                  <div className="space-y-3">
                    <h4 className="font-heading font-semibold text-lg">{t("section.agents.diff.agent.title")}</h4>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {t("section.agents.diff.agent.desc")}
                    </p>
                    <TextToSpeech text={`${t("section.agents.diff.agent.title")}. ${t("section.agents.diff.agent.desc")}`} />
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-2xl mb-6 text-center">{t("section.agents.comparison.title")}</h3>
              <ComparisonTable />
            </div>
          </ContentSection>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <ContentSection
          id="architecture"
          badge="Section V"
          title={t("section.architecture")}
          subtitle={t("section.architecture.subtitle")}
        >
          <TextContent
            content={[
              t("section.architecture.text")
            ]}
          />

          <ArchitectureCards />

          <div className="mt-12">
            <h3 className="font-heading font-semibold text-2xl mb-6">{t("section.architecture.react.title")}</h3>
            <Card className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/30">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30">
                  {t("section.architecture.react.subtitle")}
                </Badge>
                <h4 className="font-heading font-semibold text-xl">{t("section.architecture.react.title")}</h4>
                <p className="text-foreground/80 leading-relaxed">
                  {t("section.architecture.react.text")}
                </p>
                <TextToSpeech text={`${t("section.architecture.react.title")}. ${t("section.architecture.react.text")}`} />
              </div>
            </Card>
          </div>
        </ContentSection>
      </div>

      <div className="bg-muted/30 relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6">
          <ContentSection
            id="workflows"
            badge="Section VI"
            title={t("section.workflows")}
            subtitle={t("section.workflows.subtitle")}
          >
            <Card className="p-8 bg-gradient-to-br from-chart-3/10 to-chart-3/5 border-chart-3/30 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-chart-3" />
                  <h4 className="font-heading font-semibold text-xl">{t("section.workflows.title")}</h4>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {t("section.workflows.text")}
                </p>
                <TextToSpeech text={`${t("section.workflows.title")}. ${t("section.workflows.text")}`} />
              </div>
            </Card>

            <div className="mb-12">
              <h3 className="font-heading font-semibold text-2xl mb-6">{t("section.workflows.advanced.title")}</h3>
              <FeatureList
                items={[
                  {
                    title: t("section.workflows.advanced.teamwork.title"),
                    description: t("section.workflows.advanced.teamwork.desc")
                  },
                  {
                    title: t("section.workflows.advanced.reflection.title"),
                    description: t("section.workflows.advanced.reflection.desc")
                  },
                  {
                    title: t("section.workflows.advanced.human.title"),
                    description: t("section.workflows.advanced.human.desc")
                  },
                  {
                    title: t("section.workflows.advanced.adapt.title"),
                    description: t("section.workflows.advanced.adapt.desc")
                  }
                ]}
              />
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h5 className="font-semibold">{t("section.workflows.future.title")}</h5>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {t("section.workflows.future.text")}
                    </p>
                  </div>
                </div>
                <TextToSpeech text={`${t("section.workflows.future.title")}. ${t("section.workflows.future.text")}`} />
              </div>
            </Card>
          </ContentSection>
        </div>
      </div>

      <Footer />
    </div>
  );
}
