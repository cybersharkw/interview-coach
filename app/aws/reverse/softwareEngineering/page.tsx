import { ChatComponent } from "@/components/chat";

export default function reverse() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/aws/reverse/softwareEngineering" notStart={true}/>
    </div>
  
  
  )
}