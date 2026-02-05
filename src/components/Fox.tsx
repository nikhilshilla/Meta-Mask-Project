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
  width = 150, 
  height = 150,
  followMouse = true,
  slowDrift = false,
}) => {
  const foxContainerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const hasFallenRef = useRef(false);

  // CHANGED: Size reduced from 200 to 150 (Extra Compact)
  const compactSize = 150; 

  useEffect(() => {
    let viewer: any = null;

    const initFox = async () => {
      if (foxContainerRef.current) {
        try {
          const metamaskLogo = await import("@metamask/logo");
          const createViewer = metamaskLogo.default || metamaskLogo;

          if (viewerRef.current) return;

          viewer = createViewer({
            pxNotRatio: true,
            width: compactSize, // Using 150px
            height: compactSize, // Using 150px
            followMouse: false,
            slowDrift,
          });

          foxContainerRef.current.appendChild(viewer.container);
          viewerRef.current = viewer;

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
      if (viewerRef.current) {
        try {
          viewerRef.current.stopAnimation();
          if (foxContainerRef.current && viewerRef.current.container) {
             if (foxContainerRef.current.contains(viewerRef.current.container)) {
                foxContainerRef.current.removeChild(viewerRef.current.container);
             }
          }
        } catch (e) {
          console.error("Error cleaning up fox:", e);
        }
        viewerRef.current = null;
      }
    };
  }, [compactSize, followMouse, slowDrift]);

  useGSAP(() => {
    if (foxContainerRef.current) {
      gsap.set(foxContainerRef.current, { opacity: 1, y: 0, rotation: 0 });

      ScrollTrigger.create({
        trigger: ".footer-trigger",
        start: "top bottom",
        onEnter: () => {
          if (!hasFallenRef.current) {
            hasFallenRef.current = true;
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
      id="fox-wrapper"
      style={{
        position: "fixed",
        bottom: "0px",
        left: "50%",
        transform: "translateX(-50%)",
        width: `${compactSize}px`, // 150px
        height: `${compactSize}px`, // 150px
        zIndex: 9999,
        top: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        pointerEvents: "none",
      }}
    />
  );
};

export default Fox;
export default Fox;




