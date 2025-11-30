import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface UseAIOptions {
  systemPrompt?: string;
}

export const useAI = (options?: UseAIOptions) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const generateText = async (message: string): Promise<string | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: functionError } = await supabase.functions.invoke("generate-text", {
        body: { 
          message,
          systemPrompt: options?.systemPrompt 
        },
      });

      if (functionError) {
        throw new Error(functionError.message);
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      return data?.text || null;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to generate text";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    generateText,
    isLoading,
    error,
  };
};
