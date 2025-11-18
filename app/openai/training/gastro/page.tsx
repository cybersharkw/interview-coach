import { ChatComponent } from "@/components/chat";

export default function training() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/openai/training/gastro" notStart={false}/>
    </div>
  
  
  )
}
