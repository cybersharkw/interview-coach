import { openai } from '@ai-sdk/openai';
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Prompts which reooccur are in lib
import {rules, promptReverse} from '../../../../../../lib/itcoach'


// Allow streaming responses up to 30 seconds
export const maxDuration = 30;



export async function POST(req: Request) {
   const { messages, model, temperature, topP, maxOutputTokens, frequencyPenalty, presencePenalty   } = await req.json();

    const result = streamText({
        model: openai(model),
        system: 

              `${promptReverse}` +
            `***${rules}***`
    ,
        messages: convertToModelMessages(messages),
        temperature,
        topP,
        maxOutputTokens,
        frequencyPenalty,
        presencePenalty,
    });
    return result.toUIMessageStreamResponse();
}