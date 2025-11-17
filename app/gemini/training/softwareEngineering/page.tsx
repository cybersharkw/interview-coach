import { ChatComponent } from "@/components/chat";

export default function training() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/gemini/training/softwareEngineering" notStart={false}/>
    </div>
  
  
  )
}

