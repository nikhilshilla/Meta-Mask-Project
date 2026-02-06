"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// --- ASSETS ---
import horsepower from "@/assets/horsepower.svg";
import logo from "@/assets/Logo.svg";
import walletIcon from "@/assets/wallet.svg"; 
import dollar2Icon from "@/assets/dollar2.svg"; 
import triangleIcon from "@/assets/triangle.svg"; 
import dollar3Icon from "@/assets/dollar3.svg"; 

const SLIDES = [
  { id: 0, text: "Connect Wallet", icon: logo },
  { id: 1, text: "Install Games", icon: horsepower },
  { id: 2, text: "Mint NFTs", icon: logo },
  { id: 3, text: "Swap Tokens", icon: horsepower },
];

// ==========================================
// 1. TOP CARD (UNCHANGED)
// ==========================================
const ConnectDappsCard: React.FC<{ isCompressed: boolean }> = ({ isCompressed }) => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null); 
  const textRef = useRef<HTMLHeadingElement>(null); 
  const dotsRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleNextSlide = contextSafe(() => {
    if (isCompressed) return; 
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  });

  const currentSlide = SLIDES[currentIndex];

  useGSAP(() => {
    if (isCompressed) {
      gsap.to(containerRef.current, { height: 100, duration: 0.4, ease: "power3.out" });
      gsap.to(sliderRef.current, { opacity: 0, scale: 0.9, duration: 0.2 });
      gsap.to(dotsRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(textRef.current, { scale: 0.9, y: 5, duration: 0.3 });
    } else {
      gsap.to(containerRef.current, { height: 220, duration: 0.4, ease: "power3.out" });
      gsap.to(sliderRef.current, { opacity: 1, scale: 1, duration: 0.3, delay: 0.1 });
      gsap.to(dotsRef.current, { opacity: 1, duration: 0.3, delay: 0.1 });
      gsap.to(textRef.current, { scale: 1, y: 0, duration: 0.3 });
    }
  }, [isCompressed]);

  return (
    <div 
      ref={containerRef} 
      onClick={handleNextSlide}
      className="w-full h-[220px] bg-[#1A0266] rounded-xl p-6 flex flex-col relative overflow-hidden shadow-lg cursor-pointer select-none"
    >
      <div className="absolute top-[-40%] right-[-40%] w-48 h-48 bg-white/10 rounded-full blur-[60px] pointer-events-none" />
      <div className="relative z-10 w-full flex flex-col justify-center h-full">
        <h2 ref={textRef} className="text-2xl font-bold text-white leading-tight transition-transform">
          Connect to <br/> thousands of <br/> crypto dapps
        </h2>
      </div>
      <div ref={sliderRef} className="relative z-10 w-full flex flex-col items-center mt-auto h-[50px]">
        <div className="absolute bottom-0 w-full max-w-[180px] h-[45px] bg-white rounded-full flex items-center justify-center gap-2 shadow-xl z-20">
            <Image src={currentSlide.icon} alt="icon" className="w-4 h-4 object-contain" />
            <span className="text-black font-bold text-xs uppercase whitespace-nowrap">{currentSlide.text}</span>
        </div>
      </div>
      <div ref={dotsRef} className="flex justify-center gap-1.5 mt-4 z-10 transition-all">
        {SLIDES.map((_, index) => (
          <div key={index} className={`transition-all duration-300 rounded-full ${currentIndex === index ? "w-5 h-1 bg-white opacity-100" : "w-1 h-1 bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 2. BOTTOM CARD (UPDATED: Icons stick to circle)
// ==========================================
const AggregatorCard: React.FC<{ isExpanded: boolean; onHoverStart: () => void; onHoverEnd: () => void }> = ({ isExpanded, onHoverStart, onHoverEnd }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialTextRef = useRef<HTMLHeadingElement>(null);
  const hoverTextRef = useRef<HTMLHeadingElement>(null);
  const iconsContainerRef = useRef<HTMLDivElement>(null); 
  const orbitRef = useRef<HTMLDivElement>(null); 
  
  // Existing Icons
  const leftTopRef = useRef<HTMLDivElement>(null);   
  const leftBottomRef = useRef<HTMLDivElement>(null); 
  const rightRef = useRef<HTMLDivElement>(null);      

  // Extra Icons
  const extra1Ref = useRef<HTMLDivElement>(null);
  const extra2Ref = useRef<HTMLDivElement>(null);
  const extra3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial positions
    gsap.set(leftTopRef.current, { x: -35, y: -8 }); 
    gsap.set(leftBottomRef.current, { x: -18, y: 32 });
    gsap.set(rightRef.current, { x: 35, y: 5 });
    
    gsap.set([extra1Ref.current, extra2Ref.current, extra3Ref.current], { scale: 0, opacity: 0 });
  }, []);

  useGSAP(() => {
    if (isExpanded) {
      // Expand Height
      gsap.to(containerRef.current, { height: 340, duration: 0.4, ease: "power3.out" });

      // Text Transitions
      gsap.to(initialTextRef.current, { opacity: 0, y: -20, duration: 0.2 });
      gsap.to(hoverTextRef.current, { opacity: 1, y: 0, duration: 0.3, delay: 0.1 });

      // Icons Container Move Up
      gsap.to(iconsContainerRef.current, { y: -40, duration: 0.4, ease: "back.out(1.2)" });
      
      // --- MAIN ICONS SCATTER (Far Out) ---
      gsap.to(leftTopRef.current, { x: -110, y: -100, rotation: -20, scale: 1.3, duration: 0.5, ease: "back.out(1.5)" });
      gsap.to(leftBottomRef.current, { x: -100, y: 110, rotation: 15, scale: 1.3, duration: 0.5, ease: "back.out(1.5)" });
      gsap.to(rightRef.current, { x: 120, y: 40, rotation: 20, scale: 1.3, duration: 0.5, ease: "back.out(1.5)" });

      // --- EXTRA ICONS (UPDATED: Two Stick to Circle, One Flies Out) ---
      
      // Extra 1: Flies out far
      gsap.to(extra1Ref.current, { x: 80, y: -90, scale: 1.2, opacity: 1, rotation: -10, duration: 0.5, ease: "back.out(1.2)", delay: 0.05 });
      
      // Extra 2 (Purple): Sticks to Circle (Left Side) - Adjusted for w-32 circle
      gsap.to(extra2Ref.current, { x: -60, y: 20, scale: 1.1, opacity: 1, rotation: 45, duration: 0.5, ease: "back.out(1.2)", delay: 0.08 });
      
      // Extra 3 (Blue): Sticks to Circle (Right Side) - Adjusted for w-32 circle
      gsap.to(extra3Ref.current, { x: 60, y: -20, scale: 1.2, opacity: 1, rotation: -15, duration: 0.5, ease: "back.out(1.2)", delay: 0.02 });

      // Orbit Animation
      gsap.to(orbitRef.current, { scale: 1.1, opacity: 1, borderColor: "#1A0266", duration: 0.5 });

    } else {
      // Restore Height
      gsap.to(containerRef.current, { height: 220, duration: 0.4, ease: "power3.out" });

      // Text Restore
      gsap.to(initialTextRef.current, { opacity: 1, y: 0, duration: 0.3 });
      gsap.to(hoverTextRef.current, { opacity: 0, y: 20, duration: 0.2 });

      // Icons Reset
      gsap.to(iconsContainerRef.current, { y: 0, duration: 0.4 });
      gsap.to([leftTopRef.current, leftBottomRef.current, rightRef.current], { x: (i) => [-35, -18, 35][i], y: (i) => [-8, 32, 5][i], rotation: 0, scale: 1, duration: 0.4 });
      
      // Hide Extras
      gsap.to([extra1Ref.current, extra2Ref.current, extra3Ref.current], { x: 0, y: 0, scale: 0, opacity: 0, duration: 0.3 });
      
      gsap.to(orbitRef.current, { scale: 0.8, opacity: 0, duration: 0.4 });
    }
  }, [isExpanded]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="w-full h-[220px] bg-[#E0D4FC] rounded-xl p-6 relative overflow-hidden shadow-lg cursor-pointer group select-none z-20"
    >
      <div className="w-full h-full flex flex-col justify-between relative z-30 pointer-events-none">
        <h2 ref={initialTextRef} className="text-2xl font-bold text-[#1A0266] leading-tight">
          The best rates, <br/> thousands of <br/> aggregated services
        </h2>
        <h2 ref={hoverTextRef} className="text-2xl font-bold text-[#1A0266] leading-tight absolute bottom-0 left-6 opacity-0 translate-y-4">
          The best of web3 <br/> brought to you
        </h2>
      </div>

      <div ref={iconsContainerRef} className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] flex items-center justify-center z-10 pointer-events-none">
        
        {/* ORBIT: w-32 (128px) */}
        <div ref={orbitRef} className="absolute w-32 h-32 rounded-full border border-[#1A0266] opacity-0 scale-75 z-0" />
        
        {/* Main Icons */}
        <div ref={leftTopRef} className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md z-10">
             <Image src={triangleIcon} alt="eth" className="w-6 h-6 object-contain" />
        </div>
        <div ref={leftBottomRef} className="absolute w-12 h-12 bg-[#D4C2FC] rounded-full flex items-center justify-center shadow-md z-10">
             <Image src={dollar2Icon} alt="dollar" className="w-7 h-7 object-contain" />
        </div>
        <div ref={rightRef} className="absolute w-12 h-12 bg-[#C8F5FF] rounded-full flex items-center justify-center shadow-md z-10">
             <Image src={dollar3Icon} alt="dollar" className="w-6 h-6 object-contain" />
        </div>

        {/* Extra Icons */}
        <div ref={extra1Ref} className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-0">
             <Image src={dollar3Icon} alt="decoration" className="w-5 h-5 object-contain" />
        </div>
        <div ref={extra2Ref} className="absolute w-10 h-10 bg-[#D4C2FC] rounded-full flex items-center justify-center shadow-md z-0">
             <Image src={triangleIcon} alt="decoration" className="w-4 h-4 object-contain" />
        </div>
        <div ref={extra3Ref} className="absolute w-10 h-10 bg-[#C8F5FF] rounded-full flex items-center justify-center shadow-md z-0">
             <Image src={dollar2Icon} alt="decoration" className="w-5 h-5 object-contain" />
        </div>

        {/* Main Wallet */}
        <div className="relative w-20 h-20 bg-[#1A0266] rounded-full flex items-center justify-center shadow-2xl z-20 border-[3px] border-[#E0D4FC]">
             <Image src={walletIcon} alt="wallet" className="w-10 h-10 object-contain invert" />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. MAIN LAYOUT (UNCHANGED)
// ==========================================
const MetaMaskCardsLayout = () => {
  const [isHoveringBottom, setIsHoveringBottom] = useState(false);

  return (
    <div className="w-full max-w-[340px] mx-auto p-4 flex flex-col gap-5">
      <ConnectDappsCard isCompressed={isHoveringBottom} />
      <AggregatorCard 
        isExpanded={isHoveringBottom}
        onHoverStart={() => setIsHoveringBottom(true)}
        onHoverEnd={() => setIsHoveringBottom(false)}
      />
    </div>
  );
};

export default MetaMaskCardsLayout;