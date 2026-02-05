"use client";

import Image from "next/image";
import React from "react";

import payusd from "@/assets/PayUSD.png";
import payeth from "@/assets/Payeth.png";
import payusdc from "@/assets/Payusdc.png";
import finalrow from "@/assets/finalrow.png";

import { AiOutlineSwap } from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import { CardHoverAnimation } from "@/animations/CardHoverAnimation";

const BuySellCard = () => {
  useGSAP(() => {
    CardHoverAnimation();
  }, []);

  return (
    <>
      {/* ================= LEFT CARD ================= */}
      <div className="bg-[#3d085e] w-full h-full rounded-xl p-5 purple_card relative overflow-hidden">
        <div className="subtitle text-white leading-8.5">
          Buy, Sell, Swap,
          <br /> Send, Receive
        </div>

        <div className="relative h-full">
          <Image
            src={payusd}
            alt=""
            className="h-[55px] w-[130px] shadowed absolute top-2 left-1/6 z-[10]"
          />

          <Image
            src={payeth}
            alt=""
            className="h-[55px] w-[130px] shadowed absolute top-14 right-1/6"
          />

          <Image
            src={payusdc}
            alt=""
            className="h-[55px] w-[130px] shadowed absolute top-8 right-1/6 opacity-0 scale-0 z-0"
          />

          <div className="bg-[var(--purple-light)] text-white p-3 rounded-full flex items-center justify-center
            absolute top-9 right-1/3 z-[30] swap_icon">
            <AiOutlineSwap />
          </div>
        </div>

        <div className="lower_subtitle text-2xl absolute bottom-5 font-bold opacity-0 text-white leading-8.5">
          Never done that <br />
          before? We show <br />
          you how
        </div>
      </div>

      {/* ================= RIGHT CARD (HOVER IMAGE) ================= */}


<div className="group rounded-xl bg-[#1A0266] w-full h-full overflow-hidden p-5 relative">

  {/* TEXT */}
  <div className="text-2xl font-bold text-white leading-8.5 mb-20 relative z-10">
    All your networks <br />
    All your assets <br />
    All in one place
  </div>

  {/* BASE CARD – ALWAYS VISIBLE */}
  <div
    className="
      absolute bottom-4 left-1/2 -translate-x-1/2
      bg-white rounded-xl p-4 w-[90%]
      z-10
    "
  >
    <div className="flex items-center gap-2 font-bold text-black">
      <span className="bg-black text-white rounded-md px-2 py-1 text-xs">Ξ</span>
      Crypto
    </div>

    <div className="flex justify-between mt-2 text-sm font-semibold">
      <span>6,000.00 mUSD</span>
      <span className="text-gray-500">≈ 2.85041 ETH</span>
    </div>
  </div>

  {/* HOVER CARD – SHOW ON TOP */}
  <div
    className="
      absolute bottom-4 left-1/2 -translate-x-1/2
      bg-white rounded-xl p-4 w-[90%]
      opacity-0 translate-y-4
      transition-all duration-300 ease-out
      group-hover:opacity-100
      group-hover:-translate-y-12
      z-20 shadow-xl
    "
  >
    
    <div className="flex items-center gap-2 font-bold text-black">
      <span className="bg-black text-white rounded-md px-2 py-1 text-xs">Ξ</span>
      Crypto
    </div>

    <div className="flex justify-between mt-2 text-sm font-semibold">
      <span>6,250.00 mUSD</span>
      <span className="text-gray-500">≈ 2.92 ETH</span>
    </div>
  </div>
</div>





    </>
  );
};

export default BuySellCard;