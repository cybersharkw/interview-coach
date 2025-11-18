import { ChatComponent } from "@/components/chat";

export default function training() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/openai/training/softwareEngineering" notStart={false}/>
    </div>
  
  
  )
}

