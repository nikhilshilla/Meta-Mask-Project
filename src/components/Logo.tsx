"use client";

import { useEffect, useRef } from "react";
import MetamaskLogo from "@metamask/logo";
import { useGSAP } from "@gsap/react";
import { LogoAnimation } from "@/animations/LogoAnimation";

const Logo = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    LogoAnimation()
  }, [])

  useEffect(() => {
    if (!logoRef.current) return;

    const viewer = MetamaskLogo({
      pxNotRatio: true,
      followMouse: true,
      slowDrift: false,
      mouseFollowStrength: 3,
    });

    logoRef.current.appendChild(viewer.container);
    viewer.startAnimation();

    return () => {
      viewer.stopAnimation();
    };
  }, []);

  return (
    <section className="logo_section w-screen overflow-hidden min-h-screen  z-[99999999] flex items-center justify-center absolute bg-transparent">
      <div
        className="metamask_logo h-[100vh] relative"
        ref={logoRef}
      />
    </section>
  );
};

export default Logo;
