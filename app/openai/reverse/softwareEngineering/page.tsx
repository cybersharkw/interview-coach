import { ChatComponent } from "@/components/chat";

export default function reverse() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/openai/reverse/softwareEngineering" notStart={true}/>
    </div>
  
  
  )
}