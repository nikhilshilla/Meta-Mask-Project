"use client";
import React, { useRef } from "react";
import Button from "./common/Button";
import { useGSAP } from "@gsap/react";
import { animateTitle } from "@/animations/TitleAnimations";
const text = "YOUR HOME IN \nWEB3";

const Hero = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (titleRef.current) {
      animateTitle(titleRef.current);
    }
  }, []);

  return (
    <section className="hero_section h-screen w-full flex flex-col items-center gap-5 justify-center ">
      <div
        ref={titleRef}
        className="title text-center mt-20 w-full text-4xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[250px] font-medium min-w-[20rem]"
      >
        {["YOUR HOME IN", "WEB3"].map((line, i) => (
          <div key={i} className="lg:leading-20 md:leading-14 leading-6  sm:leading-11 2xl:leading-37">
            {line.split("").map((char, index) => {
              if (char === " ") {
                return (
                  <span key={index} className="inline-block w-10 ">
                    &nbsp;
                  </span>
                );
              }
              return (
                <span key={index} className="inline-block ">
                  {char}
                </span>
              );
            })}
          </div>
        ))}
      </div>
      <div className=" md:mt-10">
        <Button>VIEW METAMASK WEB</Button>
      </div>
    </section>
  );
};

export default Hero;
