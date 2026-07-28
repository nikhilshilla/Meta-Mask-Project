"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Import your existing images
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

// --- ICONS (SVG) ---
const LockIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const WalletIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-slate-700">
        <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" />
        <path d="M20 7V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

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
                    <div key={`${avatar.id}-${idx}`} className="relative w-10 h-10 flex-shrink-0">
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

// --- TRUSTED CARD (Shrinkable) ---
interface TrustedCardProps {
    isShrunk: boolean;
}

const TrustedCard: React.FC<TrustedCardProps> = ({ isShrunk }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null); // To hide marquees
    const titleRef = useRef<HTMLHeadingElement>(null);

    // --- ANIMATE BASED ON PROP CHANGES ---
    useGSAP(() => {
        if (isShrunk) {
            // Shrink State: Height becomes small (e.g., 80px), hide marquees
            gsap.to(containerRef.current, { height: 80, duration: 0.5, ease: "power3.inOut" });
            gsap.to(contentRef.current, { opacity: 0, scale: 0.9, duration: 0.3, ease: "power2.out" });
            gsap.to(titleRef.current, { scale: 0.8, y: -5, duration: 0.5, transformOrigin: "left center" });
        } else {
            // Default State: Height 220px, show marquees
            gsap.to(containerRef.current, { height: 220, duration: 0.5, ease: "power3.inOut" });
            gsap.to(contentRef.current, { opacity: 1, scale: 1, duration: 0.5, delay: 0.1, ease: "power2.out" });
            gsap.to(titleRef.current, { scale: 1, y: 0, duration: 0.5 });
        }
    }, [isShrunk]); // Re-run when props change

    return (
        <div
            ref={containerRef}
            className="w-full h-[220px] bg-[#D4F7C5] rounded-3xl p-8 relative overflow-hidden shadow-sm border border-transparent transition-colors group"
        >
            <h2 ref={titleRef} className="relative z-20 text-2xl font-bold text-[#0D3613] leading-tight mb-2 tracking-tight whitespace-nowrap">
                Trusted by millions
            </h2>
            
            {/* Wrapper for content that disappears on shrink */}
            <div ref={contentRef} className="absolute inset-0 top-0 left-0 w-full h-full pointer-events-none">
                 {/* Re-added text to ensure it matches specific layout when fully visible */}
                 <div className="absolute top-8 left-8 z-10">
                    <h2 className="text-2xl font-bold text-[#0D3613] leading-tight tracking-tight opacity-0">
                         Trusted by <br/> millions of users
                    </h2>
                 </div>

                <div className="flex flex-col gap-3 absolute -left-[25%] w-[150%] top-[95px]">
                    <div className="origin-center"><MarqueeRow avatars={AVATARS.slice(0, 8)} direction="left" speed={30} /></div>
                    <div className="origin-center"><MarqueeRow avatars={AVATARS.slice(7, 15)} direction="right" speed={35} /></div>
                </div>
                
                {/* Side Fades */}
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#D4F7C5] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#D4F7C5] to-transparent z-10" />
            </div>
        </div>
    );
};

// --- SECURITY CARD (Expands Upwards) ---
interface SecurityCardProps {
    onExpand: (expanded: boolean) => void;
}

const SecurityCard: React.FC<SecurityCardProps> = ({ onExpand }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const topTextRef = useRef<HTMLHeadingElement>(null);
    const bottomTextRef = useRef<HTMLHeadingElement>(null);
    const innerCardRef = useRef<HTMLDivElement>(null);
    const skeletonRef = useRef<HTMLDivElement>(null);
    const blueShapeRef = useRef<HTMLDivElement>(null);
    const lockRef = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP({ scope: containerRef });

    const handleMouseEnter = contextSafe(() => {
        onExpand(true); // Tell parent to shrink the top card

        // 1. Expand Container Height (Fills the space left by top card)
        // Original: 220 + 220 + 16(gap) = 456 total.
        // If top shrinks to 80, bottom can grow to ~360/370.
        gsap.to(containerRef.current, {
            height: 360, 
            duration: 0.5,
            ease: "power3.inOut"
        });

        // 2. Hide Top Text
        gsap.to(topTextRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out"
        });

        // 3. Show Bottom Text
        gsap.to(bottomTextRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.2,
            ease: "power3.out"
        });

        // 4. Morph Inner Card (Pill -> Full Card)
        gsap.to(innerCardRef.current, {
            width: "85%",      
            height: 240,       // Adjusted for new height
            borderRadius: 20,  
            y: -60,            
            duration: 0.5,
            ease: "power3.inOut"
        });

        // 5. Reveal Skeleton
        gsap.to(skeletonRef.current, {
            opacity: 1,
            duration: 0.4,
            delay: 0.3
        });

        // 6. Move Lock Icon
        gsap.to(lockRef.current, {
            right: -20,
            top: 150, 
            scale: 1.1,
            duration: 0.5,
            ease: "power3.inOut"
        });
        
        // 7. Expand Blue Shape
        gsap.to(blueShapeRef.current, {
            y: -30,
            scale: 1.5,
            rotate: 15,
            duration: 0.6,
            ease: "power3.out"
        });
    });

    const handleMouseLeave = contextSafe(() => {
        onExpand(false); // Tell parent to restore top card

        // Reset Container Height
        gsap.to(containerRef.current, { height: 220, duration: 0.5, ease: "power3.inOut" });

        // Reset Texts
        gsap.to(topTextRef.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: "power3.out" });
        gsap.to(bottomTextRef.current, { opacity: 0, y: 20, duration: 0.3 });

        // Reset Inner Card
        gsap.to(innerCardRef.current, {
            width: "60%",
            height: 60,
            borderRadius: 50,
            y: 0,
            duration: 0.5,
            ease: "power3.inOut"
        });

        // Hide Skeleton
        gsap.to(skeletonRef.current, { opacity: 0, duration: 0.2 });

        // Reset Lock
        gsap.to(lockRef.current, { right: -10, top: -10, scale: 1, duration: 0.5 });

        // Reset Blue Shape
        gsap.to(blueShapeRef.current, { y: 0, scale: 1, rotate: 0, duration: 0.5 });
    });

    return (
        <div 
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full h-[220px] bg-[#CBE4FF] rounded-3xl p-8 relative overflow-hidden shadow-sm flex flex-col justify-between cursor-pointer border border-transparent hover:border-blue-300 transition-colors"
        >
            {/* --- TOP TEXT (Original State) --- */}
            {/* CHANGED: text-xl (smaller) and -mt-2 (moved up) */}
            <h2 ref={topTextRef} className="relative z-20 text-xl font-bold text-[#140D49] leading-tight tracking-tight max-w-[90%] -mt-2">
                Security alerts, <br />
                frontrun protection, <br />
                Wallet Guard built-in
            </h2>

            {/* --- BOTTOM TEXT (Hover) --- */}
            <h2 ref={bottomTextRef} className="absolute bottom-8 left-8 z-20 text-2xl font-bold text-[#140D49] leading-tight tracking-tight opacity-0 translate-y-4">
                The most secure <br />
                wallet around
            </h2>

            {/* --- BACKGROUND DECORATION --- */}
            <div 
                ref={blueShapeRef}
                className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#8EB9FF] rounded-[40px] opacity-60 z-10 transform rotate-12"
            />

            {/* --- INNER CARD --- */}
            <div 
                ref={innerCardRef}
                className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-white shadow-xl z-20 overflow-visible flex flex-col"
                style={{
                    width: "65%", 
                    height: "60px",
                    borderRadius: "50px"
                }}
            >
                {/* Header (Always Visible) */}
                <div className="flex items-center gap-3 px-4 h-[60px] flex-shrink-0 w-full">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600">
                        <WalletIcon />
                    </div>
                    <span className="text-slate-900 font-mono text-sm font-semibold tracking-wide">
                        0x8dA6 <span className="text-slate-300">••••</span> 6045
                    </span>
                </div>

                {/* Skeleton Body (Hidden initially) */}
                <div ref={skeletonRef} className="px-5 pt-1 flex flex-col gap-3 opacity-0">
                    <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                    <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                    <div className="w-2/3 h-2 bg-slate-100 rounded-full"></div>
                    <div className="w-full h-2 bg-slate-100 rounded-full mt-2"></div>
                    <div className="w-5/6 h-2 bg-slate-100 rounded-full"></div>
                </div>

                {/* Floating Lock */}
                <div 
                    ref={lockRef}
                    className="absolute -right-2 -top-2 w-12 h-12 bg-[#190553] rounded-full flex items-center justify-center shadow-lg border-[3px] border-[#CBE4FF]"
                >
                    <LockIcon />
                </div>
            </div>
        </div>
    );
};

// --- MAIN EXPORT ---
export default function GlobeLeft() {
    // Shared state to coordinate the animation (Restored)
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-full flex justify-center pt-0 pb-10">
            <div className="w-full max-w-[340px] flex flex-col gap-4">
                <TrustedCard isShrunk={isExpanded} />
                <SecurityCard onExpand={setIsExpanded} />
            </div>
        </div>
    );
}