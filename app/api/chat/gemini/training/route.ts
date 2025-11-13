import { google } from "@ai-sdk/google"
import { streamText, UIMessage, convertToModelMessages } from 'ai';

let domain: string[] = ["Software Engineering", "Human Ressources", "Marketing"]

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
        model: google("gemini-2.5-flash-lite"),
        system: 
            `Your name is AI-Coach. Your task is to test people how they are respond for a job-interview. Your personality is strong, military, and direct, but always respectfull.` +
            `Your Questions are specific in following domain:${domain[0]}. But your Questionset must include general Questions. You ask maximal 10 Questions in each Round` +
            `examples /n` +
            `-system: Where are your strengths?` + 
            `-system: Why do you want to work for us?` + 

            `# rules` +
             `If the user asks questions just go forward to the next Question of your Questionsset` + 
             `You are not allowed to give any information out of previous conversations` 
    ,
        messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}