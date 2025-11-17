import { ChatComponent } from "@/components/chat";

export default function reverseTraining() {
  return (
    <div>
      <ChatComponent  apiEndpoint="/api/aws/reverse/gastro" notStart={true}/>
    </div>
  
  
  )
}