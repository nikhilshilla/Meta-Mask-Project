import Image from "next/image";
import React from "react";
import footer_character_jump from "@/assets/footer_character_jump.png";
import footer_character_new from "@/assets/footer_character_new.png";
import Button from "./common/Button";

const FooterSection = () => {
    return (
        <div className="w-full flex flex-col font-sans">

            {/* Container for Jump Into Web3 Section with white background matching footer */}
            <div className="w-full bg-white py-10">
                <div className="px-6 lg:px-20 max-w-7xl mx-auto">
                    {/* Jump Into Web3 Section */}
                    <div className="w-full bg-[#03045E] min-h-[600px] relative overflow-hidden flex items-center justify-center rounded-[2.5rem]">

                        {/* Background Shapes Pattern (Simplified CSS generic shapes) */}
                        <div className="absolute top-0 right-0 w-full h-full">
                            <div className="absolute top-10 right-20 w-64 h-64 bg-[#FFC700] rounded-full blur-[100px] opacity-20"></div>
                            <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#F2C4FF] rounded-full blur-[100px] opacity-20"></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-10 gap-10">

                            {/* Character Image */}
                            <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] shrink-0">
                                <Image src={footer_character_jump} alt="Jump into Web3 Character" fill className="object-contain" />
                            </div>

                            {/* Typography */}
                            <div className="flex flex-col items-start gap-8">
                                <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter stack-text relative">
                                    JUMP <br />
                                    INTO <br />
                                    WEB3
                                </h1>
                                <Button className="bg-white text-black hover:bg-gray-200">Get Started</Button>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 p-5">
                            <Button className="border border-white bg-transparent hover:bg-white hover:text-black">Get Started</Button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Container for Updates and New to Web3 Section with white background matching footer */}
            <div className="w-full bg-white py-10 footer-trigger relative">
                <div className="px-6 lg:px-20 max-w-7xl mx-auto">
                    {/* Updates and New to Web3 Section */}
                    <div className="flex flex-col lg:flex-row w-full gap-6">

                        {/* Sign Up for Updates */}
                        <div className="lg:w-1/2 bg-[#F2C4FF] p-10 flex flex-col justify-center gap-6 rounded-[2.5rem]">
                            <h2 className="text-3xl font-bold uppercase text-[#24292E] max-w-md leading-tight">
                                Sign up to receive updates and announcements
                            </h2>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 text-[#24292E] font-medium cursor-pointer">
                                    <input type="checkbox" className="w-5 h-5 border-2 border-[#24292E] rounded-sm accent-[#24292E]" />
                                    General updates
                                </label>
                                <label className="flex items-center gap-2 text-[#24292E] font-medium cursor-pointer">
                                    <input type="checkbox" className="w-5 h-5 border-2 border-[#24292E] rounded-sm accent-[#24292E]" />
                                    Developer updates
                                </label>
                            </div>
                            <div className="w-full max-w-md">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#24292E] text-lg"
                                />
                            </div>
                            <div className="flex items-center gap-2 max-w-md bg-blue-600 text-white p-2 rounded text-xs opacity-80">
                                <div className="bg-white p-1 rounded-sm"><div className="w-4 h-4 border-2 border-blue-600 rounded-full border-t-transparent animate-spin"></div></div>
                                <span>protected by reCAPTCHA</span>
                            </div>
                            <div>
                                <button className="bg-[#24292E] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wide">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-xs text-[#535A61] leading-relaxed max-w-lg">
                                MetaMask may use the contact information you provide to us to contact you about our products and services. By clicking "subscribe" you consent to receive such communications. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Notice.
                            </p>
                        </div>

                        {/* New to Web3 */}
                        <div className="lg:w-1/2 bg-[#D0F0FD] p-10 flex flex-col items-center justify-center relative overflow-hidden rounded-[2.5rem]">

                            <div className="z-10 flex flex-col items-center text-center gap-6 max-w-md">
                                <h2 className="text-5xl font-black text-[#03045E] uppercase leading-none tracking-tighter">
                                    NEW TO <br /> WEB3?
                                </h2>
                                <p className="text-[#24292E] text-lg leading-snug">
                                    Through a series of interactive lessons, MetaMask Learn will show you what web3 is, why it's important to you, and how to use MetaMask along the way.
                                </p>
                                <button className="bg-[#03045E] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wide">
                                    Start Lesson
                                </button>
                            </div>

                            {/* Character Positioned */}
                            <div className="absolute -bottom-10 -right-10 w-[700px] h-[700px] opacity-100 pointer-events-none z-0">
                                <Image src={footer_character_new} alt="Welcome Character" fill className="object-contain object-bottom-right" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="w-full bg-white py-16 px-6 lg:px-20 border-t border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

                    {/* Column 1: Logo */}
                    <div className="col-span-2 md:col-span-1">
                        <h1 className="text-3xl font-black text-[#24292E] tracking-tighter leading-none">
                            Meta<br />Mask
                        </h1>
                    </div>

                    {/* Column 2: MetaMask Links 1 */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-[#24292E] text-base">MetaMask</h3>
                        <ul className="flex flex-col gap-3 text-sm font-medium text-[#535A61]">
                            <li className="hover:text-black cursor-pointer">Get MetaMask</li>
                            <li className="hover:text-black cursor-pointer">Buy</li>
                            <li className="hover:text-black cursor-pointer">Earn</li>
                            <li className="hover:text-black cursor-pointer">Swaps</li>
                            <li className="hover:text-black cursor-pointer flex items-center">
                                Rewards
                                <span className="ml-2 bg-[#BAF300] text-black text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">New</span>
                            </li>
                            <li className="hover:text-black cursor-pointer flex items-center">
                                Predict
                                <span className="ml-2 bg-[#BAF300] text-black text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">New</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: MetaMask Links 2 */}
                    <div className="flex flex-col gap-4 pt-0 lg:pt-10">
                        <ul className="flex flex-col gap-3 text-sm font-medium text-[#535A61]">
                            <li className="hover:text-black cursor-pointer flex items-center">
                                Perps
                                <span className="ml-2 bg-[#BAF300] text-black text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">New</span>
                            </li>
                            <li className="hover:text-black cursor-pointer">Transaction Shield</li>
                            <li className="hover:text-black cursor-pointer">Snaps</li>
                            <li className="hover:text-black cursor-pointer">MetaMask Card</li>
                            <li className="hover:text-black cursor-pointer">MetaMask USD</li>
                            <li className="hover:text-black cursor-pointer">Learn</li>
                        </ul>
                    </div>

                    {/* Column 4: Developer Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-[#24292E] text-base">Developer</h3>
                        <ul className="flex flex-col gap-3 text-sm font-medium text-[#535A61]">
                            <li className="hover:text-black cursor-pointer">View the Docs</li>
                            <li className="hover:text-black cursor-pointer">Developer Home</li>
                            <li className="hover:text-black cursor-pointer">Dashboard</li>
                            <li className="hover:text-black cursor-pointer">Smart Accounts Kit</li>
                            <li className="hover:text-black cursor-pointer">Embedded Wallets</li>
                            <li className="hover:text-black cursor-pointer">MetaMask SDK</li>
                            <li className="hover:text-black cursor-pointer">Snaps</li>
                            <li className="hover:text-black cursor-pointer">Web3 Services</li>
                        </ul>
                    </div>

                    {/* Column 5: About Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-[#24292E] text-base">About</h3>
                        <ul className="flex flex-col gap-3 text-sm font-medium text-[#535A61]">
                            <li className="hover:text-black cursor-pointer">Security</li>
                            <li className="hover:text-black cursor-pointer">Support</li>
                            <li className="hover:text-black cursor-pointer">Blog</li>
                            <li className="hover:text-black cursor-pointer">Careers</li>
                            <li className="hover:text-black cursor-pointer">Contact</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FooterSection;
