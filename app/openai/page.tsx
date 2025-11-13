import { ChatComponent } from "@/components/chat";

export default function openai() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/gemini/training"/>
    </div>
  
  
  )
}
