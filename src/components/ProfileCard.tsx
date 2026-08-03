import React from "react";
import { ShieldCheck, Sparkles } from "lucide-react";

const PHOTO_URL = "https://lh3.googleusercontent.com/d/1rsOcNcVFRK-4WQDLiayMRpimkTl5Fqkf";

export default function ProfileCard() {
  return (
    <div className="relative group w-full max-w-[340px] md:max-w-[380px] aspect-[4/5] rounded-2xl p-3 bg-[#161B22] border border-[#30363D] transition-colors duration-200 hover:border-[#6366F1]">
      
      {/* Outer Card Frame */}
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0D1117] border border-[#30363D] flex flex-col justify-between">
        
        {/* Live Status Badges */}
        <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-center pointer-events-none">
          <div className="flex items-center space-x-2 bg-[#161B22]/90 border border-[#30363D] px-2.5 py-1 rounded-md text-[11px] font-mono text-[#E6EDF3] backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span className="font-medium tracking-wide">Available for Work</span>
          </div>
          <div className="bg-[#161B22]/90 border border-[#30363D] px-2.5 py-1 rounded-md text-[11px] font-mono text-[#8B949E] flex items-center gap-1 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3 h-3 text-[#6366F1]" />
            UNPAM
          </div>
        </div>

        {/* Profile Image Container */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0D1117]">
          <img 
            src={PHOTO_URL} 
            alt="Ridho Wicaksono" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              console.error("Gagal memuat gambar profile");
            }}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        {/* Bottom Status Card Info */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-[#161B22] via-[#161B22]/90 to-transparent pt-10">
          <div>
            <h3 className="text-[#E6EDF3] font-sans font-bold text-base tracking-tight flex items-center gap-1.5">
              Ridho Wicaksono
              <ShieldCheck className="w-4 h-4 text-[#6366F1]" />
            </h3>
            <p className="text-[11px] font-mono text-[#8B949E] uppercase tracking-wider mt-0.5 font-semibold">
              FULL-STACK &amp; AI INTEGRATION ENGINEER
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}


