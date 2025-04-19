import { GoogleGenAI } from "@google/genai";
import conf from "../../../conf";

const ai = new GoogleGenAI({ apiKey: conf.geminiApiKey });

export class Service {
    
    async generateContent(conversationHistory)  {
        try {
          const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: conversationHistory,
          });
          return response.text;
        } catch (error) {
          console.error("AI Service Error:", error);
          return "Error fetching AI response";
        }
      };
}

const service = new Service()
export default service