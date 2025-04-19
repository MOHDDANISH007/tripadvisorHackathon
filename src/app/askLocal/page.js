'use client';

import React, { useState } from "react";
import service from "./gemini/service";
import TextareaAutosize from "react-textarea-autosize";
import { marked } from "marked";
import Image from "next/image";
import Logoimage from "../../asset/greenLogo.svg";
import { VscAccount } from "react-icons/vsc";
import upArrow from "../../asset/up-arrow.png";


const Chat = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState("");
  const [localName, setLocalName] = useState("");
  const [step, setStep] = useState("location");

  const [locationInput, setLocationInput] = useState("");

  const handleLocationSubmit = async (e) => {
    e.preventDefault();
    if (!locationInput.trim()) return;
    setLocation(locationInput);
    setStep("connecting");

    try {
      const prompt = [
        {
          role: "user",
          parts: [
            {
              text: `Give me a common first name used in ${locationInput}. Just return the name without any explanation.`
            }
          ]
        }
      ];

      const nameResponse = await service.generateContent(prompt);
      const cleanedName = nameResponse?.trim().split(" ")[0] || "Ali";

      setLocalName(cleanedName);
    } catch (error) {
      console.error("Error generating name:", error);
      setLocalName("Ali"); // Fallback
    }

    setTimeout(() => setStep("chat"), 2000); // simulate delay
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    const geminiHistory = [
      {
        role: "user",
        parts: [
          {
            text: `You are ${localName}, a friendly local from ${location}. Answer naturally like you're from there and share insights about the place in terms of tourism and trips. Answer shortly and avoid unrelated topics. If asked something off-topic, say you're here to talk about tourism in ${location}. Some words can be of any language but the writing of those words should be in English.`
          }
        ]
      },
      ...updatedMessages.map((msg) => ({
        role: msg.sender === "user" ? "user" : "model",
        parts: [{ text: msg.text }],
      }))
    ];

    const aiResponse = await service.generateContent(geminiHistory);
    const aiMessage = { sender: "ai", text: aiResponse };
    const finalMessages = [...updatedMessages, aiMessage];

    setMessages(finalMessages);
    setLoading(false);
  };

  if (step === "location") {
    return (
      <div className="flex items-center justify-center h-screen bg-white text-zinc-900">
        <form onSubmit={handleLocationSubmit} className="space-y-4 w-full max-w-xl py-15 px-4 text-center shadow-lg rounded-2xl">
          <h2 className="text-5xl font-extrabold text-center mb-5">Ask A Local</h2>
          <p className="mb-10">Please enter the location whose local you want to connect with:</p>
          <input
            type="text"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            placeholder="e.g. Tokyo, Paris, Cairo..."
            className="w-full p-3 rounded-full shadow-lg border-2 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#11d98f]"
          />
          <button
            type="submit"
            className="rounded-full text-black bg-[#11d98f] px-4 py-2 hover:bg-[#81e5c0] transition"
          >
            Connect Me
          </button>
        </form>
      </div>
    );
  }

  if (step === "connecting") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white text-zinc-900 space-y-4">
<Image
          src={Logoimage}
          alt="Connecting..."
          width={48}
          height={48}
          className="animate-bounce"
        />
        <p className="text-xl">Connecting you with a local from <strong>{location}</strong>...</p>
        

      </div>
    );
  }

  return (
    <div className="max-w-3xl w-full mx-auto border-2 rounded-xl shadow-lg flex flex-col h-[80vh] p-2">
      <div className="text-center text-[#10c583] font-medium pb-2">
        Connected with <strong>{localName}</strong>, your local from <strong>{location}</strong>.
      </div>

      <div className="flex-grow overflow-y-auto mb-2 space-y-2 p-2 text-base custom-scrollbar border-b border-gray-200 relative">
        {messages.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl font-mono font-bold text-center text-neutral-400 px-2">
              What do you want to ask about in {location}?
            </h2>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, index) => (
  <div
    key={index}
    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-start gap-2`}
  >
    {msg.sender === "ai" && (
      <div className="mt-1 text-[#ffffff] bg-[#89ac9a] rounded-full p-1">
        <VscAccount size={18} />
      </div>
    )}

    <div
      className={`p-2 rounded-xl leading-relaxed ${msg.sender === "user"
          ? "bg-neutral-200 max-w-lg rounded-tr-none"
          : "bg-[#16d48e] max-w-lg rounded-tl-none text-white"
        }`}
    >
      {msg.sender === "ai" ? (
        <div
          className="prose prose-invert prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }}
        />
      ) : (
        <div><strong>You:</strong> {msg.text}</div>
      )}
    </div>
  </div>
))}

          </div>
        )}
        {loading && (
          <div>
            <Image
              src={Logoimage}
              alt="Connecting..."
              width={32}
              height={32}
              className="animate-bounce"
            />

          </div>
        )}
      </div>

      <div className="mt-2">
        <div className="flex items-center gap-2">
          <TextareaAutosize
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about places, food, culture..."
            minRows={1}
            maxRows={4}
            className="flex-grow resize-none py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-[#48726b] text-white bg-zinc-900 overflow-y-auto custom-scrollbar"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`p-2 rounded-lg transition-all duration-200 w-9 h-9 flex items-center justify-center ${input.trim()
                ? "bg-[#16d48e] hover:bg-[#89ffd4] text-white cursor-pointer"
                : "bg-gray-100 text-zinc-500 cursor-not-allowed"
              }`}
          >
            <Image src={upArrow} alt="send" className="w-4 h-4" />
          </button>
        </div>
        <p className="hidden md:block text-xs text-neutral-500 mt-2 text-center">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  );
};

export default Chat;