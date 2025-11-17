import { ChatComponent } from "@/components/chat";

export default function test() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/aws/test/gastro" notStart={false}/>
    </div>
  
  
  )
}