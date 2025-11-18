'use client';
import { ChatComponent } from "@/components/chat";
import { useParams } from "next/navigation";


export default function reverseTraining() {

const params =  useParams()
  
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/openai/reverse/bank" notStart={true}/>
    </div>
  
  
  )
}