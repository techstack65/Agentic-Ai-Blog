import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Square, Volume2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface TextToSpeechProps {
    text: string;
}

export function TextToSpeech({ text }: TextToSpeechProps) {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    const { language, t } = useLanguage();

    useEffect(() => {
        // Cleanup on unmount
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    // Update utterance language when language changes
    useEffect(() => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            setIsPaused(false);
        }
    }, [language]);

    const handlePlay = () => {
        if (isPaused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
            setIsSpeaking(true);
        } else {
            const utterance = new SpeechSynthesisUtterance(text);
            // Map our language codes to BCP 47 tags
            const langMap: Record<string, string> = {
                "en": "en-US",
                "es": "es-ES",
                "fr": "fr-FR",
                "hi": "hi-IN",
                "gu": "gu-IN"
            };
            utterance.lang = langMap[language] || "en-US";

            utterance.onend = () => {
                setIsSpeaking(false);
                setIsPaused(false);
            };
            utteranceRef.current = utterance;
            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        }
    };

    const handlePause = () => {
        window.speechSynthesis.pause();
        setIsPaused(true);
        setIsSpeaking(false);
    };

    const handleStop = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
    };

    return (
        <div className="flex items-center gap-2 mt-2 mb-4">
            {!isSpeaking && !isPaused ? (
                <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-primary hover:text-primary/80"
                    onClick={handlePlay}
                >
                    <Volume2 className="h-4 w-4" />
                    {t("listen")}
                </Button>
            ) : (
                <div className="flex gap-2">
                    {isSpeaking ? (
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={handlePause}
                        >
                            <Pause className="h-4 w-4" />
                        </Button>
                    ) : (
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={handlePlay}
                        >
                            <Play className="h-4 w-4" />
                        </Button>
                    )}
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={handleStop}
                    >
                        <Square className="h-4 w-4 fill-current" />
                    </Button>
                </div>
            )}
        </div>
    );
}
