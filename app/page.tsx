'use client';

import Image from "next/image";
import AIman from '../public/AIman.png'; // Make sure this path is correct
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"; // Consolidated Select imports
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [domain, setDomain] = useState("Your Domain");
  const router = useRouter();

  function gotoTraining() {

    switch (domain) {
      case "software": router.push('./gemini/training/softwareEngineering');
        break;
      case "gastro": router.push('./gemini/training/bank');
        break;
      case "bank": router.push('./gemini/training/gastro');
        break;
    }

  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground p-4 sm:p-8">
      <section className="container max-w-6xl flex flex-col md:flex-row items-center md:justify-between gap-12 py-12">

        {/* Left Section: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 lg:w-[45%]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Master Your Future Job Interview
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            cing an upcoming job interview? Don't worry! Begin your training journey with me, your AI Interview Coach. Select your preferred coach and topic to start preparing confidently!
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Domain Select */}
            <div className="w-full sm:w-[180px]">
              <Select value={domain} onValueChange={setDomain}>
                <SelectTrigger>
                  <SelectValue  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="software">Software Engineering</SelectItem>
                  <SelectItem value="gastro">Gastronomy</SelectItem>
                  <SelectItem value="bank">Banking & Finance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Let's Start Button */}
            <Button onClick={gotoTraining} className="w-full sm:w-auto px-6 py-2 text-lg">
              Let's start
            </Button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center md:justify-end md:w-1/2 lg:w-[55%]">
          <Image
            src={AIman}
            alt={"AI Coach Man"} // More descriptive alt text
            width={500} // Increased width for better presence
            height={500} // Set height as well for aspect ratio
            priority // Optimizes loading for LCP
            className="max-w-full h-auto" // Ensures image scales responsively
          />
        </div>

      </section>
    </div>
  );
}