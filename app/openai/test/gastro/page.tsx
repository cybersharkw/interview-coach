import { ChatComponent } from "@/components/chat";

export default function test() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/openai/test/gastro" notStart={false}/>
    </div>
  
  
  )
}