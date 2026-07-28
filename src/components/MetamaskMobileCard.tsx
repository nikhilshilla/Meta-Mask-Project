"use client";

import React from "react";
import Image from "next/image";

// Make sure these images exist in your assets folder
import AccountImg from "@/assets/Account.jpg";
import ActionImg from "@/assets/Action.png";
import AssetImg from "@/assets/asset.png";

const MetamaskMobileCard = () => {
  return (
    <div className="relative w-full h-full bg-black text-white rounded-[30px] overflow-hidden border border-gray-800 flex flex-col font-sans">
      
      {/* 1. TOP: Account Header Image */}
      <div className="w-full pt-4 px-2 shrink-0">
        <Image
          src={AccountImg}
          alt="Account Header"
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 2. MIDDLE: Balance Section - UPDATED: Left aligned, New Value, Green Percent */}
      <div className="flex flex-col items-start justify-center mt-2 mb-2 shrink-0 pl-10">
        <h1 className="text-4xl font-medium tracking-tight text-white m-0">
          $77,721.70
        </h1>
        {/* Color changed to Green and alignment kept left */}
        <p className="text-[#4cd964] text-sm mt-1 font-medium">
          -$127.66 (-0.36%)
        </p>
      </div>

      {/* 3. MIDDLE: Action Buttons Image */}
      <div className="w-full px-4 mb-2 shrink-0">
        <Image
          src={ActionImg}
          alt="Action Buttons"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 4. BOTTOM: Assets List (Image + Absolute Text Overlays) */}
      <div className="relative w-full grow overflow-hidden">
        {/* Background Image */}
        <Image
          src={AssetImg}
          alt="Asset List"
          className="w-full h-full object-cover object-top"
        />

        {/* --- DATA OVERLAYS --- */}
        
        {/* Row 1: Ethereum */}
        <div className="absolute top-[28%] right-6 text-right">
          <div className="text-white font-semibold text-sm">$65,420.52</div>
          {/* Kept Green as requested */}
          <div className="text-[#4cd964] text-xs font-medium">-0.31%</div>
        </div>

        {/* Row 2: mUSD */}
        <div className="absolute top-[56%] right-6 text-right">
          <div className="text-white font-semibold text-sm">$11,100.20</div>
          <div className="text-[#4cd964] text-xs font-medium">+0.00%</div>
        </div>

        {/* Row 3: Solana */}
        <div className="absolute top-[82%] right-6 text-right">
          <div className="text-white font-semibold text-sm">$980.30</div>
          <div className="text-[#4cd964] text-xs font-medium">+0.07%</div>
        </div>
      </div>
    </div>
  );
};

export default MetamaskMobileCard;