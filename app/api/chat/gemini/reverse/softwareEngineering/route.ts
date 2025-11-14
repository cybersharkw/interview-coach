import { google } from "@ai-sdk/google"
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Prompts which reooccur are in lib
import {rules, promptReverse} from '../../../../../../lib/itcoach'


// Allow streaming responses up to 30 seconds
export const maxDuration = 30;



export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
        model: google("gemini-2.5-flash-lite"),
        system: 

              `${promptReverse}` +
            `***${rules}***`
    ,
        messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}