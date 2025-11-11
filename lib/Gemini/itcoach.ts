import { GoogleGenAI, HarmBlockThreshold, HarmCategory } from "@google/genai";
import { NextResponse } from 'next/server';


// Initialize Gemini Pro model
const genAI = new GoogleGenAI({env.GEMINI_API_KEY});


// Basic chat history to maintain context
let chatHistory: { role: string; parts: string }[] = [];

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not set" }, { status: 500 });
    }

    // Initialize chat session if first message or history is cleared
    // For a more robust solution, you'd manage sessions per user
    if (chatHistory.length === 0) {
      chatHistory = [
        { role: "user", parts: "Hello, I'm ready to chat!" },
        { role: "model", parts: "Great! What can I help you with today?" },
      ];
    }

    const chat = startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 500,
      },
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    // Update chat history
    chatHistory.push({ role: "user", parts: message });
    chatHistory.push({ role: "model", parts: text });

    return NextResponse.json({ response: text });

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    // You might want to provide more specific error messages in production
    return NextResponse.json(
      { error: "Failed to communicate with the AI model.", details: error.message },
      { status: 500 }
    );
  }
}