import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Prompts which reooccur are in lib
import {rules, examplesTraining, coachPerson, domain} from '../../../../../../lib/itcoach'
import { bedrock } from "@ai-sdk/amazon-bedrock";
import { nullable } from 'zod/v4';


// Allow streaming responses up to 30 seconds
export const maxDuration = 30;



export async function POST(req: Request) {
   const { messages, model, temperature, topP, maxOutputTokens, frequencyPenalty, presencePenalty   } = await req.json();

    const result = streamText({
        model: bedrock(model),
        system: 

            `${coachPerson}` +

            `Your Questions are specific in following domain:${domain[1]}. But your Questionset must include general Questions. You ask maximal 10 Questions in each Round. Each Question has to start with the number. ` +


            
            `***${examplesTraining}***` +

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