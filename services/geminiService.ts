import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Você é a Nova, uma assistente de IA altamente inteligente, profissional e útil. Responda sempre em português do Brasil. Seja concisa, amigável e técnica quando necessário. Seu objetivo é demonstrar as capacidades da plataforma Nova Intelligence.",
      }
    });
    
    return response.text || "Desculpe, não consegui gerar uma resposta no momento.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Houve um erro ao conectar com o sistema de IA. Por favor, verifique sua conexão ou a Chave de API.";
  }
};