import { ChatComponent } from "@/components/chat";

export default function reverseTraining() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/gemini/reverse/gastro" notStart={true}/>
    </div>
  
  
  )
}