"use client";

import React from "react";
import { CgProfile } from "react-icons/cg";
import { SlOptionsVertical } from "react-icons/sl";
import { TfiWorld } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa";
import { PiPlusMinusBold } from "react-icons/pi";
import { IoMdShareAlt } from "react-icons/io";
import { AiOutlineSwap } from "react-icons/ai";
import { GiStoneBridge } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaEthereum } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { useGSAP } from "@gsap/react";
import { CardAnimation } from "@/animations/CardAnimation";
import Tilt from "react-parallax-tilt";
import BuySellCard from "./BuySellCard";
import TradeNFTCard from "./TradeNFTCard";

const Card = () => {
  useGSAP(() => {
    CardAnimation();
  });

  return (
    <>
      <section className="card_section relative mt-[10vh] left-0 w-full remove_scrollbar min-h-[100vh] flex items-center justify-center overflow-x-hidden bg-[#fff1eb]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  py-6 px-2 h-full remove_scrollbar overflow-visible pt-20 items-center max-w-5xl">
          <div className="slide_contents flex flex-col gap-3 max-h-[35rem] h-[80vh] ">
            <BuySellCard />
          </div>
          <Tilt className=" z-[999999999] relative flex justify-center">
            <div className="card_border rounded-xl max-h-[35rem] h-[80vh] lg:max-w-[20rem] flex justify-center">
              <div className="absolute top-1/3 left-0 -translate-y-1/2 title z-[999999] flex flex-col items-center  h-2 text-center w-full text-7xl leading-10 card_title ">
                THE <br />
                EVERYTHING <br />
                WALLET
              </div>
              <div className="card_component px-2.5 py-3.5 rounded-xl overflow-x-hidden bg-white text-xs max-h-[35rem] h-[80vh] shadow-xl ">
                <div className="flex items-center justify-between gap-4">
                  <div className="px-4 py-1.5 rounded-full flex items-center gap-3">
                    <CgProfile />
                    <FaAngleDown />
                  </div>
                  <div className="px-4 py-1.5 rounded-full container font-bold">
                    metamask.linea.eth
                  </div>
                  <div className="px-4 py-1.5 rounded-full flex items-center gap-3">
                    <TfiWorld />
                    <SlOptionsVertical />
                  </div>
                </div>
                <div className="mt-10 px-3 ">
                  <div className="flex flex-col card_section_inner">
                    <span className="text-4xl font-bold">$1627.97</span>
                    <span className="text-red-500 mt-1">$35.67 (-1.37%)</span>
                  </div>
                  <div className="flex card_section_inner items-center justify-between gap-4 mt-10 text-xs font-bold">
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <PiPlusMinusBold />
                      </div>
                      <div>Buy & Sell</div>
                    </div>
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <IoMdShareAlt />
                      </div>
                      <div>Send</div>
                    </div>
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <AiOutlineSwap />
                      </div>
                      <div>Swap</div>
                    </div>
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <GiStoneBridge />
                      </div>
                      <div>Bridge</div>
                    </div>
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <GiReceiveMoney />
                      </div>
                      <div>Receive</div>
                    </div>
                  </div>
                  <div className="card_section_inner flex items-center justify-center  mt-5 w-full font-bold text-center">
                    <div className="w-full ">Tokens</div>
                    <div className="w-full ">NFTS</div>
                    <div className="w-full ">Activity</div>
                  </div>

                  <div className="card_section_inner border-b-0.5 mt-2 outline" />
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="flex card_section_inner items-center justify-between my-6">
                      <div className="flex items-center gap-2 text-lg font-bold">
                        <div>
                          <FaEthereum />
                        </div>
                        <div className="">Ethereum</div>
                      </div>
                      <div>
                        <div>$1443.94</div>
                        <div>0.45ETH</div>
                      </div>
                    </div>
                    <div className="flex card_section_inner items-center justify-between my-6">
                      <div className="flex items-center gap-2 text-lg font-bold">
                        <div>
                          <FaEthereum />
                        </div>
                        <div>Ethereum</div>
                      </div>
                      <div>
                        <div>$1443.94</div>
                        <div>0.45ETH</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
          <div className="slide_contents flex flex-col gap-3 max-h-[35rem] h-[80vh] ">
            <TradeNFTCard />
          </div>
        </div>
      </section>

      <section className="card_section relative left-0 w-full remove_scrollbar min-h-[100vh] flex items-center justify-center overflow-x-hidden bg-[#e5ffc3]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  py-6 px-2 h-full remove_scrollbar overflow-visible pt-20 items-center max-w-5xl">
          <div className="slide_contents flex flex-col gap-3 max-h-[35rem] h-[80vh] ">
            <BuySellCard />
          </div>
          <Tilt className=" z-[999999999] relative flex justify-center">
            <div className="card_border rounded-xl max-h-[35rem] h-[80vh] lg:max-w-[20rem] flex justify-center">
              <div className="absolute top-1/3 left-0 -translate-y-1/2 title z-[999999] flex flex-col items-center  h-2 text-center w-full text-7xl leading-10 card_title ">
                GET MORE <br />
                OUT OF <br />
                CRYPTO
              </div>
              <div className="card_component px-2.5 py-3.5 rounded-xl overflow-x-hidden bg-white text-xs max-h-[35rem] h-[80vh] shadow-xl ">
                <div className="flex items-center justify-between gap-4">
                  <div className="px-4 py-1.5 rounded-full flex items-center gap-3">
                    <CgProfile />
                    <FaAngleDown />
                  </div>
                  <div className="px-4 py-1.5 rounded-full container font-bold">
                    metamask.linea.eth
                  </div>
                  <div className="px-4 py-1.5 rounded-full flex items-center gap-3">
                    <TfiWorld />
                    <SlOptionsVertical />
                  </div>
                </div>
                <div className="mt-10 px-3 ">
                  <div className="flex flex-col card_section_inner">
                    <span className="text-4xl font-bold">$1627.97</span>
                    <span className="text-red-500 mt-1">$35.67 (-1.37%)</span>
                  </div>
                  <div className="flex card_section_inner items-center justify-between gap-4 mt-10 text-xs font-bold">
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <PiPlusMinusBold />
                      </div>
                      <div>Buy & Sell</div>
                    </div>
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <IoMdShareAlt />
                      </div>
                      <div>Send</div>
                    </div>
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <AiOutlineSwap />
                      </div>
                      <div>Swap</div>
                    </div>
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <GiStoneBridge />
                      </div>
                      <div>Bridge</div>
                    </div>
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <GiReceiveMoney />
                      </div>
                      <div>Receive</div>
                    </div>
                  </div>
                  <div className="card_section_inner flex items-center justify-center  mt-5 w-full font-bold text-center">
                    <div className="w-full ">Tokens</div>
                    <div className="w-full ">NFTS</div>
                    <div className="w-full ">Activity</div>
                  </div>

                  <div className="card_section_inner border-b-0.5 mt-2 outline" />
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="flex card_section_inner items-center justify-between my-6">
                      <div className="flex items-center gap-2 text-lg font-bold">
                        <div>
                          <FaEthereum />
                        </div>
                        <div className="">Ethereum</div>
                      </div>
                      <div>
                        <div>$1443.94</div>
                        <div>0.45ETH</div>
                      </div>
                    </div>
                    <div className="flex card_section_inner items-center justify-between my-6">
                      <div className="flex items-center gap-2 text-lg font-bold">
                        <div>
                          <FaEthereum />
                        </div>
                        <div>Ethereum</div>
                      </div>
                      <div>
                        <div>$1443.94</div>
                        <div>0.45ETH</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
          <div className="slide_contents flex flex-col gap-3 max-h-[35rem] h-[80vh] ">
            <TradeNFTCard />
          </div>
        </div>
      </section>

      <section className="card_section relative left-0 w-full remove_scrollbar min-h-[100vh] flex items-center justify-center overflow-x-hidden bg-[#ffa680]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  py-6 px-2 h-full remove_scrollbar overflow-visible pt-20 items-center max-w-5xl">
          <div className="slide_contents flex flex-col gap-3 max-h-[35rem] h-[80vh] ">
            <BuySellCard />
          </div>
          <Tilt className=" z-[999999999] relative flex justify-center">
            <div className="card_border rounded-xl max-h-[35rem] h-[80vh] lg:max-w-[20rem] flex justify-center">
              <div className="absolute top-1/3 left-0 -translate-y-1/2 title z-[999999] flex flex-col items-center  h-2 text-center w-full text-7xl leading-10 card_title ">
                MAXIMUM <br />
                SECURITY
              </div>
              <div className="card_component px-2.5 py-3.5 rounded-xl overflow-x-hidden bg-white text-xs max-h-[35rem] h-[80vh] shadow-xl ">
                <div className="flex items-center justify-between gap-4">
                  <div className="px-4 py-1.5 rounded-full flex items-center gap-3">
                    <CgProfile />
                    <FaAngleDown />
                  </div>
                  <div className="px-4 py-1.5 rounded-full container font-bold">
                    metamask.linea.eth
                  </div>
                  <div className="px-4 py-1.5 rounded-full flex items-center gap-3">
                    <TfiWorld />
                    <SlOptionsVertical />
                  </div>
                </div>
                <div className="mt-10 px-3 ">
                  <div className="flex flex-col card_section_inner">
                    <span className="text-4xl font-bold">$1627.97</span>
                    <span className="text-red-500 mt-1">$35.67 (-1.37%)</span>
                  </div>
                  <div className="flex card_section_inner items-center justify-between gap-4 mt-10 text-xs font-bold">
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <PiPlusMinusBold />
                      </div>
                      <div>Buy & Sell</div>
                    </div>
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <IoMdShareAlt />
                      </div>
                      <div>Send</div>
                    </div>
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <AiOutlineSwap />
                      </div>
                      <div>Swap</div>
                    </div>
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <GiStoneBridge />
                      </div>
                      <div>Bridge</div>
                    </div>
                    <div className="flex items-center text-center flex-col">
                      <div className="p-3 rounded-full bg-blue-400 text-lg">
                        <GiReceiveMoney />
                      </div>
                      <div>Receive</div>
                    </div>
                  </div>
                  <div className="card_section_inner flex items-center justify-center  mt-5 w-full font-bold text-center">
                    <div className="w-full ">Tokens</div>
                    <div className="w-full ">NFTS</div>
                    <div className="w-full ">Activity</div>
                  </div>

                  <div className="card_section_inner border-b-0.5 mt-2 outline" />
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="flex card_section_inner items-center justify-between my-6">
                      <div className="flex items-center gap-2 text-lg font-bold">
                        <div>
                          <FaEthereum />
                        </div>
                        <div className="">Ethereum</div>
                      </div>
                      <div>
                        <div>$1443.94</div>
                        <div>0.45ETH</div>
                      </div>
                    </div>
                    <div className="flex card_section_inner items-center justify-between my-6">
                      <div className="flex items-center gap-2 text-lg font-bold">
                        <div>
                          <FaEthereum />
                        </div>
                        <div>Ethereum</div>
                      </div>
                      <div>
                        <div>$1443.94</div>
                        <div>0.45ETH</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
          <div className="slide_contents flex flex-col gap-3 max-h-[35rem] h-[80vh] ">
            <TradeNFTCard />
          </div>
        </div>
      </section>
    </>
  );
};
export default Card;
