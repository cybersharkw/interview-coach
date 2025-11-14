"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";


export function Header() {
  const router = useRouter(); 
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
          <Button variant="outline" onClick={() => router.push('./openai')}>
            Openai
          </Button>
          <Button variant="outline" onClick={() => router.push('./gemini')}>
            Gemini
          </Button>
          <Button variant="outline" onClick={() => router.push('./aws')}>
            aws-Bedrock
          </Button>
        </div>

        {/* Right: Mobile Menu */}
        <div className="flex md:hidden items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => alert("Chat Bot clicked!")}>
                Chat Bot
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert("Image Bot clicked!")}>
                Image Bot
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
