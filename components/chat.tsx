'use client';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { Settings, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useParams } from 'next/navigation';


interface ChatComponentProps {
  apiEndpoint: string;
  notStart: Boolean;


}

export function ChatComponent({ apiEndpoint, notStart}: ChatComponentProps) {
  const [input, setInput] = useState('');

  //Settings
  const [showSettings, setShowSettings] = useState(true);
  const [model, setModel] = useState('');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(2000);
  const [topP, setTopP] = useState(1);
  const [frequencyPenalty, setFrequencyPenalty] = useState(0);
  const [presencePenalty, setPresencePenalty] = useState(0);
  //Depending on Url different Models choosable

  const [company, setCompany] = useState("");

  const customTransport = new DefaultChatTransport({ api: apiEndpoint });
  const { messages, sendMessage } = useChat({
    transport: customTransport,
  });

  const hasInitialized = useRef(false);

  useEffect(() => {
    const currentURL = window.location.href;

    if (currentURL.includes("openai")) {
      setCompany("openai");
    } else if (currentURL.includes("gemini")) {
      setCompany("gemini");
    } else if (currentURL.includes("nova")) {
      setCompany("nova");
    }

    if (notStart === true) {
      return
    }
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      sendMessage({ text: "Hello! Start the conversation." });
    }
  }, []);

  return (
    <div className="flex w-full h-screen">
      {/* Chat Area - Keep original styling */}
      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowSettings(!showSettings)}
          >
            {showSettings ? <X className="h-4 w-4" /> : <Settings className="h-4 w-4" />}
          </Button>
        </div>

        {messages.map(message => (
          <div key={message.id} className="whitespace-pre-wrap">
            {message.role === 'user' ? 'User: ' : 'AI: '}
            {message.parts.map((part, i) => {
              switch (part.type) {
                case 'text':
                  return <div key={`${message.id}-${i}`}>{part.text}</div>;
              }
            })}
            <hr />
          </div>
        ))}

        <form
          onSubmit={e => {
            e.preventDefault();
            sendMessage({ text: input },
              {
                body: {
                  temperature,
                  maxTokens,
                  topP,
                  frequencyPenalty,
                  presencePenalty
                },
              },
            );
            setInput('');
          }}
        >
          <input
            className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={e => setInput(e.currentTarget.value)}
          />
        </form>
      </div>

      {/* Settings Panel - On the right side */}
      {showSettings && (
        <div className="w-80 border-l p-6 space-y-6 overflow-y-auto bg-background h-screen">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Settings</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSettings(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          {/* Model*/}
          <div className="space-y-2">
            <Label>Model</Label>
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              {company === "openai" ? (
                <SelectContent>
                  <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                  <SelectItem value="gpt-4o-mini">GPT-4o Mini</SelectItem>
                  <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                  <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                </SelectContent>
              ) : company === "gemini" ? (
                <SelectContent>
                  <SelectItem value="gemini-2.5-flash-lite">gemini-2.5-flash-lite</SelectItem>
                  <SelectItem value="gemini-2.5-flash">gemini-2.5-flash</SelectItem>
                  <SelectItem value="gemini-2.5-pro">gemini-2.5-pro</SelectItem>
                </SelectContent>
              ) : (
                <SelectContent>
                  <SelectItem value="amazon.nova-pro-v1:0">amazon.nova-pro-v1:0</SelectItem>
                  <SelectItem value="amazon.nova-lite-v1:0">amazon.nova-lite-v1:0</SelectItem>
                  <SelectItem value="amazon.nova-micro-v1:0">amazon.nova-micro-v1:0</SelectItem>
                  <SelectItem value="amazon.nova-premier-v1:0">amazon.nova-premier-v1:0</SelectItem>
                </SelectContent>
              )}
            </Select>
          </div>
          {/* Temperature */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Temperature</Label>
              <span className="text-sm text-muted-foreground">{temperature.toFixed(1)}</span>
            </div>
            <Slider
              value={[temperature]}
              onValueChange={([value]) => setTemperature(value)}
              min={0}
              max={2}
              step={0.1}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Controls randomness: Lower is more focused, higher is more creative
            </p>
          </div>

          {/* Max Tokens */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Max Tokens</Label>
              <span className="text-sm text-muted-foreground">{maxTokens}</span>
            </div>
            <Slider
              value={[maxTokens]}
              onValueChange={([value]) => setMaxTokens(value)}
              min={100}
              max={4000}
              step={100}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Maximum length of the response
            </p>
          </div>

          {/* Top P */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Top P</Label>
              <span className="text-sm text-muted-foreground">{topP.toFixed(2)}</span>
            </div>
            <Slider
              value={[topP]}
              onValueChange={([value]) => setTopP(value)}
              min={0}
              max={1}
              step={0.05}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Nucleus sampling: Consider tokens with top_p probability mass
            </p>
          </div>

          {/* Frequency Penalty */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Frequency Penalty</Label>
              <span className="text-sm text-muted-foreground">{frequencyPenalty.toFixed(1)}</span>
            </div>
            <Slider
              value={[frequencyPenalty]}
              onValueChange={([value]) => setFrequencyPenalty(value)}
              min={-2}
              max={2}
              step={0.1}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Reduces repetition of token sequences
            </p>
          </div>

          {/* Presence Penalty */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Presence Penalty</Label>
              <span className="text-sm text-muted-foreground">{presencePenalty.toFixed(1)}</span>
            </div>
            <Slider
              value={[presencePenalty]}
              onValueChange={([value]) => setPresencePenalty(value)}
              min={-2}
              max={2}
              step={0.1}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Increases likelihood of talking about new topics
            </p>
          </div>

          {/* Reset Button */}
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setTemperature(0.7);
              setMaxTokens(2000);
              setTopP(1);
              setFrequencyPenalty(0);
              setPresencePenalty(0);
            }}
          >
            Reset to Defaults
          </Button>
        </div>
      )}
    </div>
  );
}