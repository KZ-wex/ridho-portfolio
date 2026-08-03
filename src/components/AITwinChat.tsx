import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, RefreshCw, Terminal, User, Bot, AlertCircle, X, Cpu } from "lucide-react";
import { Message } from "../types";

interface AITwinChatProps {
  onClose?: () => void;
}

const PRESET_CHIPS = [
  "Pengalaman Kerja",
  "Proyek Favorit",
  "Tech Stack Utama",
  "Kontak & LinkedIn"
];

export default function AITwinChat({ onClose }: AITwinChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "ai",
      content: "Halo! Saya adalah Ridho's AI Twin, representasi digital dari Ridho Wicaksono ditenagai Google Gemini API. Tanyakan apa saja tentang pengalaman kerja, proyek unggulan, atau tumpukan teknologi saya!",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setErrorStatus(null);
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const conversationPayload = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversationPayload })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Gagal menghubungi AI Server.");
      }

      const data = await response.json();
      
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        role: "ai",
        content: data.reply,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      console.error(err);
      setErrorStatus(err.message || "Gagal mengirim pesan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "ai",
        content: "Halo! Saya adalah Ridho's AI Twin, representasi digital dari Ridho Wicaksono ditenagai Google Gemini API. Tanyakan apa saja tentang pengalaman kerja, proyek unggulan, atau tumpukan teknologi saya!",
        timestamp: new Date()
      }
    ]);
    setErrorStatus(null);
  };

  const formatMessage = (content: string) => {
    const parts = content.split(/\*\*([^*]+)\*\*/g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index} className="text-[#E6EDF3] font-bold">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#0D1117]/85 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl h-[620px] max-h-[90vh] bg-[#161B22] border border-[#30363D] rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans">
        
        {/* Top Accent Bar */}
        <div className="h-1 w-full bg-[#6366F1] shrink-0"></div>

        {/* Modal Header */}
        <div className="bg-[#0D1117] px-5 py-4 border-b border-[#30363D] flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-md bg-[#6366F1] flex items-center justify-center text-white font-mono font-bold text-xs shadow-inner">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#10B981] rounded-full border-2 border-[#0D1117]"></span>
            </div>
            <div>
              <h3 className="font-sans font-bold text-[#E6EDF3] text-sm tracking-tight flex items-center gap-1.5">
                AI Twin - Ridho's Digital Persona
                <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
              </h3>
              <p className="text-[10px] text-[#8B949E] font-mono tracking-wider uppercase font-medium">
                Gemini 2.5 Flash • Interactive Playground
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <button 
              onClick={handleResetChat}
              title="Reset Percakapan"
              className="p-1.5 text-[#8B949E] hover:text-[#E6EDF3] rounded-md hover:bg-[#30363D]/50 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            {onClose && (
              <button 
                onClick={onClose}
                title="Tutup Playground"
                className="p-1.5 text-[#8B949E] hover:text-[#E6EDF3] rounded-md hover:bg-[#30363D]/50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Quick Suggestion Chips Header Row */}
        <div className="px-5 py-2.5 bg-[#161B22] border-b border-[#30363D] flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-none">
          <span className="text-[10px] font-mono text-[#8B949E] uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-[#6366F1]" />
            Saran:
          </span>
          {PRESET_CHIPS.map((chipText, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(chipText)}
              disabled={isLoading}
              className="text-xs bg-[#0D1117] hover:bg-[#30363D]/60 border border-[#30363D] text-[#E6EDF3] hover:text-white px-2.5 py-1 rounded-md cursor-pointer transition-all shrink-0 font-mono text-[11px]"
            >
              "{chipText}"
            </button>
          ))}
        </div>

        {/* Message Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#0D1117]">
          {messages.map((msg) => (
            <div 
              key={msg.id}
              className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              {/* Avatar */}
              <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 text-xs font-mono ${
                msg.role === "user" 
                  ? "bg-[#6366F1]/20 text-[#6366F1] border border-[#6366F1]/30" 
                  : "bg-[#161B22] text-[#E6EDF3] border border-[#30363D]"
              }`}>
                {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5 text-[#6366F1]" />}
              </div>

              {/* Bubble */}
              <div className={`max-w-[85%] rounded-lg px-4 py-3 text-xs leading-relaxed ${
                msg.role === "user"
                  ? "bg-[#6366F1] text-white rounded-tr-none font-sans font-medium"
                  : "bg-[#161B22] border border-[#30363D] text-[#8B949E] rounded-tl-none font-mono whitespace-pre-line leading-normal"
              }`}>
                {msg.role === "ai" ? (
                  <div className="text-[#8B949E] text-xs font-mono">
                    {formatMessage(msg.content)}
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-md bg-[#161B22] border border-[#30363D] flex items-center justify-center shrink-0">
                <Bot className="w-3.5 h-3.5 text-[#6366F1]" />
              </div>
              <div className="bg-[#161B22] border border-[#30363D] text-[#8B949E] rounded-lg rounded-tl-none px-4 py-3 text-xs font-mono flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-[11px] text-[#8B949E] ml-1">AI Twin sedang berpikir...</span>
              </div>
            </div>
          )}

          {errorStatus && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs font-mono">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-400" />
              <span>{errorStatus}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(inputText);
          }}
          className="p-4 border-t border-[#30363D] bg-[#161B22] shrink-0"
        >
          <div className="relative flex items-center">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isLoading}
              placeholder={isLoading ? "Menyusun jawaban..." : "Ketik pertanyaan Anda tentang Ridho..."}
              className="w-full bg-[#0D1117] border border-[#30363D] focus:border-[#6366F1] text-xs rounded-md pl-3.5 pr-11 py-2.5 text-[#E6EDF3] outline-none transition-all disabled:opacity-50 placeholder-[#8B949E] font-mono"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="absolute right-1.5 p-1.5 bg-[#6366F1] text-white hover:bg-[#6366F1]/90 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
