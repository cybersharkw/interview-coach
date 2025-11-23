import { openai } from '@ai-sdk/openai';
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Prompts which reooccur are in lib
import { rules, examplesTraining, coachPerson, domain } from '../../../../../../lib/itcoach'


// Allow streaming responses up to 30 seconds
export const maxDuration = 30;



export async function POST(req: Request) {
    const { messages, model, temperature, topP, maxOutputTokens, frequencyPenalty, presencePenalty } = await req.json();

    const result = streamText({
        model: openai(model),
        system:

            `${coachPerson}` +

            `#1 Your Questions are specific in following domain:${domain[1]}. But your Questionset must include minimum 2 general Questions, which applys to different domains. You ask maximal 5 Questions in each Round. Each Question has to start with the number. ` +
            `#2 Each question set must include at least 2 general-domain questions (not domain-specific).` +
            `#3 You ask a maximum of 5 questions per conversation.` +
            `#4 Each question must start with its number (e.g., “Question 1:”).` +
            `#5 After each responded Question - You evaluate the question from 1 - 10. Afterwards you produce a JSON object summarazing` +

            
            `#Example Conversation` +
            `System: Question 1: What was your biggest challenge in your last position?` +
            `user: I had to stand up every morning` +
            `System: Note. Not the best respond. From 1 to 10. I give you a 1` +
            `System:'{"Question 1":"What was your biggest challenge in your last position?", "User-respond":"I had to stand up every morning", "Rate": 1}'` +
            `System: Question: 2: What do you like the most in your job?` +

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