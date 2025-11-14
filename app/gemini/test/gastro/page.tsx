import { ChatComponent } from "@/components/chat";

export default function test() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/gemini/test/gastro" notStart={false}/>
    </div>
  
  
  )
}