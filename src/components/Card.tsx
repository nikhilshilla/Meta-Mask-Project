"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import { CardAnimation } from "@/animations/CardAnimation";
import Tilt from "react-parallax-tilt";
import BuySellCard from "./BuySellCard";
import TradeNFTCard from "./TradeNFTCard";
import MetamaskMobileCard from "./MetamaskMobileCard";
import ConnectDappsCard from "./ConnectDappsCard";



const Card = () => {
  useGSAP(() => {
    CardAnimation();
  });

  return (
    <>
      {/* ================= SECTION 1 ================= */}
      <section className="card_section relative mt-[10vh] left-0 w-full remove_scrollbar min-h-[100vh] flex items-center justify-center overflow-x-hidden bg-[#fff1eb]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-6 px-2 h-full remove_scrollbar overflow-visible pt-20 items-center max-w-5xl">
          
          {/* LEFT: Buy/Sell */}
          <div className="slide_contents flex flex-col gap-3 max-h-[35rem] h-[80vh]">
            <BuySellCard />
          </div>

          {/* CENTER: Tilt Card (Replaced with New Design) */}
          <Tilt className="z-[999999999] relative flex justify-center">
            {/* Added 'w-[300px]' to match your design request while keeping height fluid */}
            <div className="card_border rounded-[30px] max-h-[35rem] h-[80vh] w-[300px] flex justify-center">
              
              {/* Floating Title (Behind/Side) */}
              <div className="absolute top-1/3 left-0 -translate-y-1/2 title z-[999999] flex flex-col items-center h-2 text-center w-full text-7xl leading-10 card_title">
                THE <br />
                EVERYTHING <br />
                WALLET
              </div>

              <div className="card_component rounded-[30px] overflow-hidden bg-transparent max-h-[35rem] h-[80vh] shadow-xl w-full">
                 <MetamaskMobileCard />
              </div>
            </div>
          </Tilt>

          <div className="slide_contents flex flex-col gap-3 max-h-[35rem] h-[80vh]">
            <TradeNFTCard />
          </div>
        </div>
      </section>

      <section className="card_section relative left-0 w-full remove_scrollbar min-h-[100vh] flex items-center justify-center overflow-x-hidden bg-[#e5ffc3]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-6 px-2 h-full remove_scrollbar overflow-visible pt-20 items-center max-w-5xl">
          <div className="slide_contents flex flex-col gap-3 max-h-[35rem] h-[80vh]">
           <ConnectDappsCard/>
          </div>

          <Tilt className="z-[999999999] relative flex justify-center">
            <div className="card_border rounded-[30px] max-h-[35rem] h-[80vh] w-[300px] flex justify-center">
              <div className="absolute top-1/3 left-0 -translate-y-1/2 title z-[999999] flex flex-col items-center h-2 text-center w-full text-7xl leading-10 card_title">
                GET MORE <br />
                OUT OF <br />
                CRYPTO
              </div>
              <div className="card_component rounded-[30px] overflow-hidden bg-transparent max-h-[35rem] h-[80vh] shadow-xl w-full">
                 <MetamaskMobileCard />
              </div>
            </div>
          </Tilt>

          <div className="slide_contents flex flex-col gap-3 max-h-[35rem] h-[80vh]">
            <TradeNFTCard />
          </div>
        </div>
      </section>

      <section className="card_section relative left-0 w-full remove_scrollbar min-h-[100vh] flex items-center justify-center overflow-x-hidden bg-[#ffa680]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-6 px-2 h-full remove_scrollbar overflow-visible pt-20 items-center max-w-5xl">
          <div className="slide_contents flex flex-col gap-3 max-h-[35rem] h-[80vh]">
            <BuySellCard />
          </div>

          <Tilt className="z-[999999999] relative flex justify-center">
            <div className="card_border rounded-[30px] max-h-[35rem] h-[80vh] w-[300px] flex justify-center">
              <div className="absolute top-1/3 left-0 -translate-y-1/2 title z-[999999] flex flex-col items-center h-2 text-center w-full text-7xl leading-10 card_title">
                MAXIMUM <br />
                SECURITY
              </div>
              <div className="card_component rounded-[30px] overflow-hidden bg-transparent max-h-[35rem] h-[80vh] shadow-xl w-full">
                <MetamaskMobileCard />
              </div>
            </div>
          </Tilt>

          <div className="slide_contents flex flex-col gap-3 max-h-[35rem] h-[80vh]">
            <TradeNFTCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;