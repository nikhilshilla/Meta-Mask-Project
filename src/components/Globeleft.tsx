"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// --- ASSETS IMPORTS ---
import img1 from "@/assets/1.webp";
import img2 from "@/assets/2.webp";
import img3 from "@/assets/3.webp";
import img4 from "@/assets/4.webp";
import img5 from "@/assets/5.webp";
import img6 from "@/assets/6.webp";
import img7 from "@/assets/7.webp";
import img8 from "@/assets/8.webp";
import img9 from "@/assets/9.webp";
import img10 from "@/assets/10.webp";
import img11 from "@/assets/11.webp";
import img12 from "@/assets/12.webp";
import img13 from "@/assets/13.avif";
import img14 from "@/assets/14.avif";
import img15 from "@/assets/15.webp";

// --- CONFIGURATION ---
const AVATARS = [
    { id: 1, src: img1 }, { id: 2, src: img2 }, { id: 3, src: img3 },
    { id: 4, src: img4 }, { id: 5, src: img5 }, { id: 6, src: img6 },
    { id: 7, src: img7 }, { id: 8, src: img8 }, { id: 9, src: img9 },
    { id: 10, src: img10 }, { id: 11, src: img11 }, { id: 12, src: img12 },
    { id: 13, src: img13 }, { id: 14, src: img14 }, { id: 15, src: img15 },
];

// --- MARQUEE ROW COMPONENT ---
const MarqueeRow: React.FC<{
    avatars: typeof AVATARS;
    direction?: "left" | "right";
    speed?: number;
}> = ({ avatars, direction = "left", speed = 20 }) => {
    return (
        <div className="flex overflow-hidden w-full relative">
            <div
                className="flex gap-4 items-center whitespace-nowrap will-change-transform"
                style={{
                    animation: `scroll-${direction} ${speed}s linear infinite`
                }}
            >
                {[...avatars, ...avatars, ...avatars].map((avatar, idx) => (
                    // Big size kept as requested
                    <div key={`${avatar.id}-${idx}`} className="relative w-12 h-12 flex-shrink-0">
                        <div className="w-full h-full relative rounded-full overflow-hidden border-2 border-white/40">
                            <Image src={avatar.src} alt={`User ${avatar.id}`} fill className="object-cover" />
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
            @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
            @keyframes scroll-right { 0% { transform: translateX(-33.33%); } 100% { transform: translateX(0); } }
        `}</style>
        </div>
    );
};


// --- TRUSTED CARD ---
const TrustedCard: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);
    const row3Ref = useRef<HTMLDivElement>(null);
    const row4Ref = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP({ scope: containerRef });

    const handleMouseEnter = contextSafe(() => {
        // FIX: Scale reduced to 0.7 on hover to fit all 4 rows nicely
        // Y values adjusted to pull them up tighter so 4th row is visible
        
        gsap.to(row1Ref.current, { scale: 0.7, y: -5, duration: 0.5, ease: "power3.out", transformOrigin: "center" });
        gsap.to(row2Ref.current, { scale: 0.7, y: -25, duration: 0.5, ease: "power3.out", transformOrigin: "center" });
        
        // Rows 3 & 4 pull up significantly
        gsap.to(row3Ref.current, { opacity: 1, scale: 0.7, y: -45, duration: 0.5, delay: 0.05, ease: "power3.out", transformOrigin: "center" });
        gsap.to(row4Ref.current, { opacity: 1, scale: 0.7, y: -65, duration: 0.5, delay: 0.1, ease: "power3.out", transformOrigin: "center" });
    });

    const handleMouseLeave = contextSafe(() => {
        // Reset to full size
        gsap.to([row1Ref.current, row2Ref.current], { scale: 1, y: 0, duration: 0.5, ease: "power3.inOut" });
        
        // Hide extra rows
        gsap.to([row3Ref.current, row4Ref.current], { opacity: 0, scale: 0.7, y: 20, duration: 0.3, ease: "power2.in" });
    });

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full h-[220px] bg-[#D4F7C5] rounded-2xl p-6 relative overflow-hidden shadow-sm cursor-pointer border border-transparent hover:border-green-300 transition-colors group"
        >
            <h2 className="relative z-20 text-xl font-bold text-[#0D3613] leading-snug mb-2">
                Trusted by <br />
                millions of users
            </h2>

            <div className="flex flex-col gap-3 absolute -left-[25%] w-[150%] top-[85px]">

                {/* Row 1 - Fast Speed */}
                <div ref={row1Ref} className="origin-center">
                    <MarqueeRow avatars={AVATARS.slice(0, 8)} direction="left" speed={12} />
                </div>

                {/* Row 2 - Fast Speed */}
                <div ref={row2Ref} className="origin-center">
                    <MarqueeRow avatars={AVATARS.slice(7, 15)} direction="right" speed={15} />
                </div>

                {/* Row 3 - Fast Speed */}
                <div ref={row3Ref} className="opacity-0 origin-center translate-y-4">
                    <MarqueeRow avatars={AVATARS.slice(0, 8).reverse()} direction="left" speed={11} />
                </div>

                {/* Row 4 - Fast Speed */}
                <div ref={row4Ref} className="opacity-0 origin-center translate-y-4">
                    <MarqueeRow avatars={AVATARS.slice(5, 12)} direction="right" speed={17} />
                </div>
            </div>

            {/* Side Fades */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#D4F7C5] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#D4F7C5] to-transparent z-10 pointer-events-none" />
        </div>
    );
};


// --- SECURITY CARD (No Changes) ---
const SecurityCard: React.FC = () => {
    return (
        <div className="w-full h-[220px] bg-[#D0EAFF] rounded-2xl p-6 relative overflow-hidden shadow-sm flex flex-col justify-between border border-transparent hover:border-blue-300 transition-colors">
            <h2 className="relative z-20 text-xl font-bold text-[#0B1D38] leading-snug">
                Security alerts, <br />
                frontrun protection, <br />
                Wallet Guard built-in
            </h2>

            <div className="w-full relative h-12 bg-white/40 rounded-xl border border-white/50 flex items-center px-4">
                <div className="w-4 h-4 rounded-full bg-slate-400/50 mr-2"></div>
                <div className="h-2 w-24 bg-slate-400/30 rounded-full"></div>
                <div className="ml-auto w-4 h-4 rounded-full border border-slate-400/50 flex items-center justify-center text-[10px] text-slate-600">?</div>
            </div>
        </div>
    );
};


// --- MAIN EXPORT ---
export default function GlobeLeft() {
    return (
        <div className="w-full flex justify-center pt-0 pb-10">
            <div className="w-full max-w-[340px] flex flex-col gap-4">
                <TrustedCard />
                <SecurityCard />
            </div>
        </div>
    );
}