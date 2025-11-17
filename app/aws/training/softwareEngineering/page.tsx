import { ChatComponent } from "@/components/chat";

export default function training() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/chat/aws/training/softwareEngineering" notStart={false}/>
    </div>
  
  
  )
}

