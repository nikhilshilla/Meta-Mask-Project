"use client";

import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FoxProps {
    width?: number;
    height?: number;
    followMouse?: boolean;
    slowDrift?: boolean;
}

const Fox: React.FC<FoxProps> = ({
    width = 400,
    height = 400,
    followMouse = true,
    slowDrift = false,
}) => {
    const foxContainerRef = useRef<HTMLDivElement>(null);
    const viewerRef = useRef<any>(null);
    const hasFallenRef = useRef(false);

    useEffect(() => {
        const initFox = async () => {
            if (foxContainerRef.current && !viewerRef.current) {
                try {
                    // Dynamically import @metamask/logo
                    const ModelViewer = (await import("@metamask/logo")).default;

                    // Initialize the MetaMask fox logo - starts looking straight
                    const viewer = ModelViewer({
                        pxNotRatio: true,
                        width,
                        height,
                        followMouse: false, // Start with mouse following disabled
                        slowDrift,
                    });

                    foxContainerRef.current.appendChild(viewer.container);
                    viewerRef.current = viewer;

                    // After 2 seconds, enable mouse following
                    setTimeout(() => {
                        if (viewerRef.current && followMouse) {
                            viewerRef.current.setFollowMouse(true);
                        }
                    }, 2000);
                } catch (error) {
                    console.error("Error loading MetaMask logo:", error);
                }
            }
        };

        initFox();

        return () => {
            // Cleanup
            if (viewerRef.current) {
                try {
                    viewerRef.current.stopAnimation();
                } catch (e) {
                    console.error("Error stopping fox animation:", e);
                }
            }
        };
    }, [width, height, followMouse, slowDrift]);

    // GSAP animation for falling effect when footer appears
    useGSAP(() => {
        if (foxContainerRef.current) {
            // Fox starts visible and fixed on screen
            gsap.set(foxContainerRef.current, {
                opacity: 1,
            });

            // Animate falling when footer section comes into view
            ScrollTrigger.create({
                trigger: ".footer-trigger",
                start: "top bottom",
                onEnter: () => {
                    if (!hasFallenRef.current) {
                        hasFallenRef.current = true;
                        // Fall down and off screen
                        gsap.to(foxContainerRef.current, {
                            y: 1000,
                            rotation: 360,
                            opacity: 0,
                            duration: 1.5,
                            ease: "power2.in",
                        });
                    }
                },
                onLeaveBack: () => {
                    // Reset when scrolling back up
                    hasFallenRef.current = false;
                    gsap.to(foxContainerRef.current, {
                        y: 0,
                        rotation: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                    });
                },
            });
        }
    }, []);

    return (
        <div
            ref={foxContainerRef}
            className="fox-container fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999]"
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        />
    );
};

export default Fox;
