import { bedrock } from '@ai-sdk/amazon-bedrock';
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Prompts which reooccur are in lib
import {rules, examplesTraining, coachPerson, domain} from '../../../../../lib/itcoach'


// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
        model: bedrock("amazon.nova-pro-v1:0"),
        system: 

            `${coachPerson}` +
            `Your Questions are specific in following domain:${domain[0]}. But your Questionset must include general Questions. You ask maximal 10 Questions in each Round. Each Question has to start with the number. ` +
            
            `***${examplesTraining}***` +

            `***${rules}***`
    ,
        messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}