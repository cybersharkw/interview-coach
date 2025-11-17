import { streamText, UIMessage, convertToModelMessages} from 'ai';

// Prompts which reooccur are in lib
import {rules, promptReverse} from '../../../../../../lib/itcoach'
import { bedrock } from "@ai-sdk/amazon-bedrock";


// Allow streaming responses up to 30 seconds
export const maxDuration = 30;



export async function POST(req: Request) {
   const { messages, model, temperature, topP, maxOutputTokens, frequencyPenalty, presencePenalty   } = await req.json();

    const result = streamText({
        model: bedrock(model),
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