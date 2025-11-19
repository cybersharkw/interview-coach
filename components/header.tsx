"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/route-config";

export function Header() {
  const router = useRouter();

  // Find route configs
  const openaiEnabled = routes.find(r => r.path === '/openai')?.enabled || false;
  const geminiEnabled = routes.find(r => r.path === '/gemini')?.enabled || false;
  const awsEnabled = routes.find(r => r.path === '/aws')?.enabled || false;

  const handleNavigation = (path: string, enabled: boolean) => {
    if (enabled) {
      router.push(path);
    }
  };

  return (
    <header className="pl-8 pr-8 sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Left: Logo */}
        <div className="font-semibold text-xl tracking-tight">
           <Button variant="default" onClick={() => router.push('/')}>
             AInterview Coach
          </Button>
        </div>

        {/* Middle: Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Button 
            variant="outline" 
            onClick={() => handleNavigation('/openai', openaiEnabled)}
            disabled={!openaiEnabled}
            className={!openaiEnabled ? 'opacity-50 cursor-not-allowed' : ''}
            title={!openaiEnabled ? 'OpenAI API key not configured' : ''}
          >
            Openai
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleNavigation('/gemini', geminiEnabled)}
            disabled={!geminiEnabled}
            className={!geminiEnabled ? 'opacity-50 cursor-not-allowed' : ''}
            title={!geminiEnabled ? 'Gemini API key not configured' : ''}
          >
            Gemini
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleNavigation('/aws', awsEnabled)}
            disabled={!awsEnabled}
            className={!awsEnabled ? 'opacity-50 cursor-not-allowed' : ''}
            title={!awsEnabled ? 'AWS credentials not configured' : ''}
          >
            Aws-nova
          </Button>
        </div>
      </div>
    </header>
  );
}