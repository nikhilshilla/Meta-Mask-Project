"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// === Asset Imports ===
import imgPenguin from '../assets/Left4.webp';       
import imgBoy from '../assets/Leftcard5.webp';       
import imgPineapple from '../assets/Leftcard6.webp'; 
import imgCard1 from '../assets/Leftcard.avif';
import imgCard2 from '../assets/Leftcard1.avif';
import imgCard3 from '../assets/Leftcard2.avif';

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const ConnectRight: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const topCardRef = useRef<HTMLDivElement>(null);
  const bottomCardRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const hiddenTextRef = useRef<HTMLDivElement>(null); 
  const titleTextRef = useRef<HTMLHeadingElement>(null); 
  const passwordBoxRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLHeadingElement>(null);
  const dotsRef = useRef<HTMLSpanElement>(null); 

  const { contextSafe } = useGSAP({ scope: containerRef });

  // === INITIAL SETUP ===
  useGSAP(() => {
    // Dots shuru mein hidden rahenge
    gsap.set(dotsRef.current, { autoAlpha: 0, y: 10 });
  }, { scope: containerRef });

  // === TOP CARD HOVER (Original Text Behavior & Scatter) ===
  const handleMouseEnter = contextSafe(() => {
    if (!topCardRef.current || !bottomCardRef.current || !imagesRef.current) return;
    
    const cards = Array.from(imagesRef.current.children);
    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power4.out" } });

    // 1. Hide Title
    gsap.set(titleTextRef.current, { autoAlpha: 0 });

    // 2. Resize Cards
    tl.to(topCardRef.current, { height: '340px' } as any, 0);
    tl.to(bottomCardRef.current, { height: '100px', paddingBottom: '0px' } as any, 0);

    // 3. RESTORED ORIGINAL BOTTOM ELEMENT LOGIC
    // Password Box hides completely (so no dots issue here)
    gsap.to(passwordBoxRef.current, { autoAlpha: 0, duration: 0.2 } as any); 
    // Text behaves exactly like before (moves up & scales, doesn't disappear completely)
    gsap.to(bottomTextRef.current, { y: -8, scale: 0.9, transformOrigin: "top left", duration: 0.5 } as any);

    // 4. Reveal "Browse. Mint. Repeat."
    gsap.to(hiddenTextRef.current, { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.1 } as any);

    // 5. Move Image Container Up
    gsap.to(imagesRef.current, { bottom: '35%', duration: 0.8, ease: "power4.out" } as any);

    // 6. SCATTER ANIMATION
    const scatterDur = 0.8;
    const scatterEase = "power4.out"; 

    gsap.to(cards[5], { y: -190, x: 0, scale: 1.3, rotation: 0, zIndex: 60, duration: scatterDur, ease: scatterEase } as any);
    gsap.to(cards[4], { x: -90, y: -110, rotation: -20, opacity: 1, scale: 1, zIndex: 50, duration: scatterDur, ease: scatterEase } as any);
    gsap.to(cards[3], { x: 90, y: -100, rotation: 20, opacity: 1, scale: 1, zIndex: 40, duration: scatterDur, ease: scatterEase } as any);
    gsap.to(cards[2], { x: -110, y: 0, rotation: -15, opacity: 1, scale: 0.85, zIndex: 30, duration: scatterDur, ease: scatterEase } as any);
    gsap.to(cards[1], { x: 110, y: -10, rotation: 15, opacity: 1, scale: 0.85, zIndex: 20, duration: scatterDur, ease: scatterEase } as any);
    gsap.to(cards[0], { x: 0, y: -160, rotation: 0, opacity: 1, scale: 0.7, zIndex: 10, duration: scatterDur, ease: scatterEase } as any);
  });

  // === TOP CARD LEAVE (Reset) ===
  const handleMouseLeave = contextSafe(() => {
    if (!topCardRef.current || !bottomCardRef.current || !imagesRef.current) return;
    const cards = Array.from(imagesRef.current.children);
    const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power3.inOut" } });

    tl.to(topCardRef.current, { height: '220px' } as any, 0);
    tl.to(bottomCardRef.current, { height: '220px', paddingBottom: '24px' } as any, 0);

    gsap.to(titleTextRef.current, { autoAlpha: 1, duration: 0.4, delay: 0.3 } as any);

    // Reset Elements (Bring Box Back, Reset Text)
    gsap.to(passwordBoxRef.current, { autoAlpha: 1, duration: 0.4, delay: 0.2 } as any);
    gsap.to(bottomTextRef.current, { y: 0, scale: 1, duration: 0.4 } as any);

    gsap.to(hiddenTextRef.current, { autoAlpha: 0, y: 20, duration: 0.2 } as any);
    gsap.to(imagesRef.current, { bottom: '-20%', duration: 0.6 } as any);
    
    gsap.to(cards[5], { x: 0, y: 0, rotation: 0, scale: 1, zIndex: 20, duration: 0.6 } as any);
    gsap.to(cards[4], { x: 0, y: 0, rotation: -6, scale: 0.95, opacity: 1, zIndex: 10, duration: 0.6 } as any);
    gsap.to([cards[0], cards[1], cards[2], cards[3]], { x: 0, y: 0, rotation: 0, scale: 0.9, opacity: 0, zIndex: 0, duration: 0.5 } as any);
  });

  // === BOTTOM CARD HOVER (Dots Appear HERE) ===
  const handleBottomEnter = contextSafe(() => {
    // Sirf jab bottom card hover ho, tab dots niche se upar aaye
    gsap.to(dotsRef.current, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" } as any);
  });

  const handleBottomLeave = contextSafe(() => {
    // Hover hatne par wapis hide ho jaye
    gsap.to(dotsRef.current, { autoAlpha: 0, y: 10, duration: 0.3 } as any);
  });

  return (
    <div ref={containerRef} className="flex flex-col gap-5 w-full h-[460px] font-sans text-left">
      
      {/* === TOP CARD === */}
      <div 
        ref={topCardRef}
        className="relative w-full h-[220px] bg-[#012A29] rounded-xl overflow-hidden cursor-pointer group p-6 flex flex-col justify-between z-20"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 ref={titleTextRef} className="text-[28px] leading-[1.1] font-medium text-[#EBE0F5] relative z-30 pointer-events-none mt-1">
          Collect & <br /> trade NFTs
        </h2>

        <div 
          ref={imagesRef}
          className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 w-[110px] h-[110px] pointer-events-none z-10"
        >
            <img src={imgCard1.src} className="absolute inset-0 w-full h-full object-cover rounded-xl border border-white/10 shadow-xl opacity-0" alt="" />
            <img src={imgCard2.src} className="absolute inset-0 w-full h-full object-cover rounded-xl border border-white/10 shadow-xl opacity-0" alt="" />
            <img src={imgCard3.src} className="absolute inset-0 w-full h-full object-cover rounded-xl border border-white/10 shadow-xl opacity-0" alt="" />
            <img src={imgPenguin.src} className="absolute inset-0 w-full h-full object-cover rounded-xl border border-white/10 shadow-xl opacity-0" alt="" />
            <img src={imgBoy.src} className="absolute inset-0 w-full h-full object-cover rounded-xl border border-white/10 shadow-xl" style={{ transform: 'rotate(-6deg) scale(0.95)', zIndex: 10 }} alt="" />
            <img src={imgPineapple.src} className="absolute inset-0 w-full h-full object-cover rounded-xl border border-white/10 shadow-2xl" style={{ zIndex: 20 }} alt="" />
        </div>

        <div ref={hiddenTextRef} className="relative z-30 opacity-0 translate-y-4 mt-auto">
          <h3 className="text-[26px] font-medium text-white leading-tight">
            Browse. Mint. <br /> Repeat.
          </h3>
        </div>
      </div>

      {/* === BOTTOM CARD === */}
      <div 
        ref={bottomCardRef}
        className="relative w-full h-[220px] bg-[#FFAF86] rounded-xl p-6 flex flex-col justify-between overflow-hidden cursor-pointer"
        onMouseEnter={handleBottomEnter} 
        onMouseLeave={handleBottomLeave}
      >
        <div 
          className="absolute bottom-0 right-0 w-[120px] h-[120px] bg-[#FF5C00]"
          style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}
        ></div>

        <h2 ref={bottomTextRef} className="text-[28px] leading-[1.1] font-medium text-[#481E08] relative z-10">
          Privacy-first: You <br />
          set the terms for <br />
          your data
        </h2>

        <div ref={passwordBoxRef} className="relative z-10 bg-white w-full h-12 rounded-xl flex items-center px-4 shadow-sm mt-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <div className="w-[1.5px] h-4 bg-gray-300 mx-3"></div>
            <div className="flex items-center pt-1 overflow-hidden">
                 <span ref={dotsRef} className="text-2xl leading-none font-bold text-black tracking-widest inline-block">•••••••</span>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ConnectRight;