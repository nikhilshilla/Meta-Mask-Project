"use client";

import React, { useRef, useState, useMemo } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// --- ASSETS ---
import foxIcon from "@/assets/foxi.svg";
import globeIcon from "@/assets/globeright.svg";

// Animation Settings
const ANIM_DURATION = 0.4;
const ANIM_EASE = "power3.inOut";

// --- SUPPORT CARD (NO CHANGES) ---
const SupportCard: React.FC<{ isCompressed: boolean }> = ({ isCompressed }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const bubble1Ref = useRef<HTMLDivElement>(null);
  const bubble2Ref = useRef<HTMLDivElement>(null);
  const bubble3Ref = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleMouseEnter = contextSafe(() => {
    if (isCompressed) return;
    gsap.to(bubble1Ref.current, { y: -50, opacity: 0, duration: 1, ease: "power3.inOut" });
    gsap.to(bubble2Ref.current, { y: -50, opacity: 0.5, duration: 1, ease: "power3.inOut" });
    gsap.to(bubble3Ref.current, { y: -50, opacity: 1, duration: 1, ease: "power3.inOut" });
  });

  const handleMouseLeave = contextSafe(() => {
    if (isCompressed) return;
    gsap.to(bubble1Ref.current, { y: 0, opacity: 0.5, duration: 1, ease: "power3.inOut" });
    gsap.to(bubble2Ref.current, { y: 0, opacity: 1, duration: 1, ease: "power3.inOut" });
    gsap.to(bubble3Ref.current, { y: 0, opacity: 0, duration: 1, ease: "power3.inOut" });
  });

  useGSAP(() => {
    if (isCompressed) {
      gsap.to(containerRef.current, { height: 100, duration: ANIM_DURATION, ease: ANIM_EASE });
      gsap.to(textRef.current, { scale: 0.9, y: -2, duration: ANIM_DURATION, ease: ANIM_EASE });
      gsap.to([bubble1Ref.current, bubble2Ref.current, bubble3Ref.current], { opacity: 0, duration: 0.2 });
    } else {
      gsap.to(containerRef.current, { height: 220, duration: ANIM_DURATION, ease: ANIM_EASE });
      gsap.to(textRef.current, { scale: 1, y: 0, duration: ANIM_DURATION, ease: ANIM_EASE });
      gsap.to(bubble1Ref.current, { opacity: 0.5, duration: 0.3, delay: 0.1 });
      gsap.to(bubble2Ref.current, { opacity: 1, duration: 0.3, delay: 0.1 });
    }
  }, [isCompressed]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-[220px] bg-[#E9DEFA] rounded-2xl p-6 relative overflow-hidden shadow-sm cursor-pointer select-none border border-transparent hover:border-purple-300 transition-colors"
    >
      <h2
        ref={textRef}
        className="relative z-30 text-xl font-bold text-[#1A0266] leading-snug origin-top-left transition-transform -mt-2"
      >
        24/7 support and <br />
        real-time threat <br />
        monitoring
      </h2>
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none pl-6">
        <div ref={bubble1Ref} className="absolute left-6 top-[105px] w-[170px] h-[40px] bg-[#C1B2E0] rounded-xl flex items-center px-3 opacity-50">
           <div className="w-5 h-5 mr-3 relative"><Image src={foxIcon} alt="fox" fill className="object-contain" /></div>
           <div className="flex flex-col gap-1"><div className="w-20 h-1 bg-[#1A0266] opacity-20 rounded-full"></div><div className="w-14 h-1 bg-[#1A0266] opacity-20 rounded-full"></div></div>
        </div>
        <div ref={bubble2Ref} className="absolute left-6 top-[155px] w-[170px] h-[40px] bg-[#3B006D] rounded-xl flex items-center px-3 shadow-lg z-20">
           <div className="w-5 h-5 mr-3 flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
           <div className="flex flex-col gap-1"><div className="w-24 h-1 bg-white opacity-20 rounded-full"></div><div className="w-10 h-1 bg-white opacity-20 rounded-full"></div></div>
        </div>
        <div ref={bubble3Ref} className="absolute left-6 top-[205px] w-[170px] h-[40px] bg-[#3B006D] rounded-xl flex items-center px-3 shadow-lg opacity-0">
           <div className="w-5 h-5 mr-3 relative"><Image src={foxIcon} alt="fox" fill className="object-contain" /></div>
           <div className="flex flex-col gap-1"><div className="w-20 h-1 bg-white opacity-20 rounded-full"></div><div className="w-14 h-1 bg-white opacity-20 rounded-full"></div></div>
        </div>
      </div>
    </div>
  );
};

// --- GLOBE CARD (ROTATION CHANGED) ---
const GlobeCard: React.FC<{
  isExpanded: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}> = ({ isExpanded, onHoverStart, onHoverEnd }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const hiddenTextRef = useRef<HTMLDivElement>(null);
  const mainTextRef = useRef<HTMLHeadingElement>(null);

  // Generate random dots configuration
  const dots = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      top: `${Math.random() * 85 + 7}%`, 
      left: `${Math.random() * 85 + 7}%`,
      size: Math.random() > 0.7 ? 5 : 3,
      duration: `${Math.random() * 2 + 1}s`,
      delay: `${Math.random() * 1}s` 
    }));
  }, []);

  useGSAP(() => {
    if (isExpanded) {
      // --- HOVER STATE ---
      gsap.to(containerRef.current, { height: 340, duration: ANIM_DURATION, ease: ANIM_EASE });
      
      gsap.to(mainTextRef.current, { opacity: 0, y: -10, duration: 0.2 });

      // Globe: Move Up & Center
      gsap.to(globeRef.current, { 
        y: -130,   
        x: -70,    
        scale: 1, 
        duration: 0.6, 
        ease: "back.out(1.1)" 
      });

      gsap.to(hiddenTextRef.current, { y: 0, opacity: 1, duration: 0.4, delay: 0.15 });

    } else {
      // --- IDLE STATE ---
      gsap.to(containerRef.current, { height: 220, duration: ANIM_DURATION, ease: ANIM_EASE });
      
      gsap.to(mainTextRef.current, { opacity: 1, y: 0, duration: 0.4, delay: 0.1 });

      gsap.to(globeRef.current, { 
        y: 0, 
        x: 0, 
        scale: 0.8, 
        duration: 0.5, 
        ease: "power3.inOut" 
      });

      gsap.to(hiddenTextRef.current, { y: 20, opacity: 0, duration: 0.2 });
    }
  }, [isExpanded]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="w-full h-[220px] bg-[#100829] rounded-2xl p-6 relative overflow-hidden shadow-lg cursor-pointer group select-none"
    >
      {/* CSS for In/Out Pulse Animation */}
      <style jsx>{`
        @keyframes moveInOut {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0); opacity: 0; }
        }
      `}</style>

      {/* 1. Main Text (Unchanged) */}
      <h2 
        ref={mainTextRef} 
        className="relative z-20 text-xl font-bold text-white leading-tight origin-top-left tracking-wide"
      >
        Powering 5+ <br />
        billion <br />
        transactions <br />
        since 2021
      </h2>

      {/* 2. Globe Wrapper */}
      <div 
        ref={globeRef} 
        className="absolute right-[-30px] bottom-[-40px] w-[180px] h-[180px] pointer-events-none z-10"
      >
        {/* --- LAYER A: GLOBE IMAGE --- */}
        {/* CHANGED: Added '_reverse' here. Now it rotates Counter-Clockwise */}
        <div className="absolute inset-0 w-full h-full group-hover:animate-[spin_10s_linear_infinite_reverse]">
          <Image 
            src={globeIcon} 
            alt="Globe" 
            fill 
            className="object-contain opacity-90" 
          />
        </div>

        {/* --- LAYER B: DOTS --- */}
        {/* CHANGED: Removed '_reverse' here. Now it rotates Clockwise (Opposite to globe) */}
        <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-[spin_10s_linear_infinite]">
          {dots.map((dot, idx) => (
            <div
              key={idx}
              className="absolute rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]"
              style={{
                top: dot.top,
                left: dot.left,
                width: dot.size,
                height: dot.size,
                animation: `moveInOut ${dot.duration} ease-in-out infinite`,
                animationDelay: dot.delay
              }}
            />
          ))}
        </div>
      </div>

      {/* 3. Hidden Text (Unchanged) */}
      <div 
        ref={hiddenTextRef} 
        className="absolute bottom-8 left-6 z-20 opacity-0 translate-y-4"
      >
        <p className="text-white text-2xl font-bold leading-tight">
          Regularly audited <br /> 
          by security firms
        </p>
      </div>
    </div>
  );
};

export default function Globecard() {
  const [isBottomHovered, setIsBottomHovered] = useState(false);

  return (
    <div className="w-full flex justify-center pt-0 pb-10">
      <div className="w-full max-w-[340px] flex flex-col gap-4">
        <SupportCard isCompressed={isBottomHovered} />
        <GlobeCard
          isExpanded={isBottomHovered}
          onHoverStart={() => setIsBottomHovered(true)}
          onHoverEnd={() => setIsBottomHovered(false)}
        />
      </div>
    </div>
  );
}