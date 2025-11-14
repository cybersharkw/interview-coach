"use client";

import { useRouter } from "next/navigation";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function gemini() {

  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <section className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Classic Training</h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Card 
              onClick={() => router.push('./gemini/training/softwareEngineering')}
              className="bg-white border-2 border-black p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardTitle className="text-lg font-semibold mb-2 pb-2 border-b border-gray-300">Software Engineering</CardTitle>
              <CardDescription className="text-sm text-gray-600 pt-2">This coach asks you questions especially for Software Engineering Topics</CardDescription>
            </Card>
            <Card 
              onClick={() => router.push('./gemini/training/bank')}
              className="bg-white border-2 border-black p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardTitle className="text-lg font-semibold mb-2 pb-2 border-b border-gray-300">Bank</CardTitle>
              <CardDescription className="text-sm text-gray-600 pt-2">This coach asks you questions especially for Human-Resource Topics</CardDescription>
            </Card>
            <Card 
              onClick={() => router.push('./gemini/training/gastro')}
              className="bg-white border-2 border-black p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardTitle className="text-lg font-semibold mb-2 pb-2 border-b border-gray-300">Gastronomy</CardTitle>
              <CardDescription className="text-sm text-gray-600 pt-2">This coach asks you questions especially for Human-Resource Topics</CardDescription>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Reverse: You are the interviewer and asking the Coach</h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Card 
              onClick={() => router.push('./gemini/reverse/softwareEngineering')}
              className="bg-white border-2 border-black p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardTitle className="text-lg font-semibold mb-2 pb-2 border-b border-gray-300">Software Engineering</CardTitle>
              <CardDescription className="text-sm text-gray-600 pt-2">This coach asks you questions especially for Software Engineering Topics</CardDescription>
            </Card>
            <Card 
              onClick={() => router.push('./gemini/reverse/bank')}
              className="bg-white border-2 border-black p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardTitle className="text-lg font-semibold mb-2 pb-2 border-b border-gray-300">Bank</CardTitle>
              <CardDescription className="text-sm text-gray-600 pt-2">This coach asks you questions especially for Human-Resource Topics</CardDescription>
            </Card>
            <Card 
              onClick={() => router.push('./gemini/reverse/gastro')}
              className="bg-white border-2 border-black p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardTitle className="text-lg font-semibold mb-2 pb-2 border-b border-gray-300">Gastronomy</CardTitle>
              <CardDescription className="text-sm text-gray-600 pt-2">This coach asks you questions especially for Human-Resource Topics</CardDescription>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Test-Section</h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Card 
              onClick={() => router.push('./gemini/test/softwareEngineering')}
              className="bg-white border-2 border-black p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardTitle className="text-lg font-semibold mb-2 pb-2 border-b border-gray-300">Software Engineering</CardTitle>
              <CardDescription className="text-sm text-gray-600 pt-2">This coach asks you questions especially for Software Engineering Topics</CardDescription>
            </Card>
            <Card 
              onClick={() => router.push('./gemini/test/bank')}
              className="bg-white border-2 border-black p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardTitle className="text-lg font-semibold mb-2 pb-2 border-b border-gray-300">Bank</CardTitle>
              <CardDescription className="text-sm text-gray-600 pt-2">This coach asks you questions especially for Human-Resource Topics</CardDescription>
            </Card>
            <Card 
              onClick={() => router.push('./gemini/test/gastro')}
              className="bg-white border-2 border-black p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardTitle className="text-lg font-semibold mb-2 pb-2 border-b border-gray-300">Gastronomy</CardTitle>
              <CardDescription className="text-sm text-gray-600 pt-2">This coach asks you questions especially for Human-Resource Topics</CardDescription>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}