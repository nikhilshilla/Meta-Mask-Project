"use client";
import Image from "next/image";
import React from "react";
import payusd from "@/assets/PayUSD.png"
import payeth from "@/assets/Payeth.png"
import payusdc from "@/assets/Payusdc.png"
import { AiOutlineSwap } from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import { CardHoverAnimation } from "@/animations/CardHoverAnimation";


const BuySellCard = () => {

  useGSAP(() => {
    CardHoverAnimation()
  }, [])

  return (
    <>
      <div className="bg-[#3d085e] w-full h-full rounded-xl p-5 purple_card">
        <div className="subtitle text-white leading-8.5">
          Buy, Sell, Swap,
          <br /> Send, Receive
        </div>
        <div className="relative h-full">
          <Image src={payusd} alt="" className="h-[55px] payusd w-[130px] shadowed absolute top-2 left-1/6 z-[10]" />
          <Image src={payeth} alt="" className="h-[55px] payeth w-[130px] shadowed absolute top-14 right-1/6" />
          <Image src={payusdc} alt="" className="h-[55px] payusdc w-[130px] shadowed absolute top-8 right-1/6 opacity-0 scale-0 z-0" />
          <div className="bg-[var(--purple-light)] text-white p-3 rounded-full flex items-center justify-center h-fit w-fit absolute top-9 right-1/3 z-[30] swap_icon">
            <AiOutlineSwap />
          </div>
        </div>
        <div className="lower_subtitle text-2xl absolute top-55 font-bold opacity-0 text-white leading-8.5">
          Never done that <br /> before?
          We show you <br /> how
        </div>
      </div>

      <div className="  rounded-xl bg-[#1A0266] w-full h-full overflow-hidden p-5">
        <div className="text-2xl font-bold text-white leading-8.5">
          Connect to thousands of crypto dapps
        </div>
        <div className="bg-white mx-auto text-black font-bold mt-10 p-4 rounded-full px-10 text-center w-fit">
          Connect <br /> Wallet
        </div>
      </div>
    </>
  );
};

export default BuySellCard;
