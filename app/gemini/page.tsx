"use client";

import { useRouter } from "next/navigation";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function gemini() {

  const router = useRouter()
  return (
    <div>
      <div>
        <section>
          <div>
          <h1>Choose your domain</h1>
          </div>
          <div>
          <Card onClick={() => router.push('gemini/itcoach')}>
            <CardTitle>Software Engineering</CardTitle>
            <CardDescription>This coach is asks you questions especially for Software Engineering Topics</CardDescription>
          </Card>
          </div>
          <div>
          <Card onClick={() => router.push('gemini/itcoach')}>
            <CardTitle>HR</CardTitle>
            <CardDescription>This coach is asks you questions especially for Human-Ressource Topics</CardDescription>
          </Card>
          </div>
        </section>
        <section>
          <div>
          <h1>Reverse: You are the interviewer and asking the Coach</h1>
          </div>
          <div>
          <Card onClick={() => router.push('gemini/itcoach')}>
            <CardTitle>Software Engineering</CardTitle>
            <CardDescription>This coach is asks you questions especially for Software Engineering Topics</CardDescription>
          </Card>
          </div>
          <div>
          <Card onClick={() => router.push('gemini/itcoach')}>
            <CardTitle>HR</CardTitle>
            <CardDescription>This coach is asks you questions especially for Human-Ressource Topics</CardDescription>
          </Card>
          </div>
        </section>
        <section>
          <div>
          <h1>Fun-Section</h1>
          </div>
          <div>
          <Card onClick={() => router.push('gemini/itcoach')}>
            <CardTitle>Software Engineering</CardTitle>
            <CardDescription>This coach is asks you questions especially for Software Engineering Topics</CardDescription>
          </Card>
          </div>
          <div>
          <Card onClick={() => router.push('gemini/itcoach')}>
            <CardTitle>HR</CardTitle>
            <CardDescription>This coach is asks you questions especially for Human-Ressource Topics</CardDescription>
          </Card>
          </div>
        </section>



      </div>

    </div>)
}
