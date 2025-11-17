import { ChatComponent } from "@/components/chat";

export default function test() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/aws/test/softwareEngineering" notStart={false}/>
    </div>
  
  
  )
}