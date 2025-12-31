
import { GoogleGenAI, Chat } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are the Lead Engineer for 'PekerLabs', an elite startup builder. 
        PekerLabs helps founders with:
        1. Simple, Powerful CRMs.
        2. Fast Landing Pages.
        3. Heavy-duty Backends.
        4. Clean UI/UX Design.
        
        Your tone is bold, direct, and very concise. Use simple words. No jargon. 
        The goal is to help founders build and scale fast.
        Contact: pekerlabs@outlook.com.`,
      },
    });
  }

  async sendMessage(message: string) {
    try {
      const result = await this.chat.sendMessage({ message });
      return result.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "System error. Email us: pekerlabs@outlook.com";
    }
  }
}

export const geminiService = new GeminiService();
