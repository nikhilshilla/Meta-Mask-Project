import React from "react";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineSwap } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";

// Define strict types for our card data
export interface CardConfig {
    bgColor: string;
    textColor?: string;
    title: React.ReactNode;
    content?: React.ReactNode;
    className?: string; // For things like "purple_card" specific classes
}

export interface ColumnData {
    top: CardConfig;
    bottom: CardConfig;
}

export interface SlideData {
    leftColumn: ColumnData;
    rightColumn: ColumnData;
    centerText: React.ReactNode;
}

export const SLIDES_DATA: SlideData[] = [
    // SLIDE 1: "THE EVERYTHING WALLET" (Reference Image 3)
    {
        centerText: (
            <>
                THE <br />
                EVERYTHING <br />
                WALLET
            </>
        ),
        leftColumn: {
            top: {
                bgColor: "#3d085e", // Dark Purple
                textColor: "text-white",
                className: "purple_card",
                title: (
                    <>
                        Buy & swap tokens <br /> Trade perps
                    </>
                ),
                // We will pass a 'type' or similar if we want specific sub-components, 
                // but for now let's assume specific "content" is handled by the component 
                // or we pass a clear identifier.
                // Actually, looking at the design, the layout varies nicely. 
                // Let's stick to simple props for now and maybe render children if needed.
            },
            bottom: {
                bgColor: "#1A0266", // Deep Blue
                textColor: "text-white",
                title: (
                    <>
                        All your networks <br />
                        All your assets <br />
                        All in one place
                    </>
                ),
            },
        },
        rightColumn: {
            top: {
                bgColor: "#034035", // Dark Green
                textColor: "text-white",
                title: (
                    <>
                        Get MetaMask <br /> Rewards
                    </>
                ),
            },
            bottom: {
                bgColor: "#ffa680", // Peach/Orange
                textColor: "text-black",
                title: (
                    <>
                        Earn on your <br /> crypto
                    </>
                ),
            },
        },
    },

    // SLIDE 2: "GET MORE OUT OF CRYPTO" (Reference Image 2)
    {
        centerText: (
            <>
                GET MORE <br />
                OUT OF <br />
                CRYPTO
            </>
        ),
        leftColumn: {
            top: {
                bgColor: "#1a0b50", // Dark Blue
                textColor: "text-white",
                title: (
                    <>
                        Connect to <br />
                        crypto dapps
                    </>
                ),
            },
            bottom: {
                bgColor: "#eecdf8", // Lavender
                textColor: "text-[#3d085e]",
                title: (
                    <>
                        The best rates, <br />
                        thousands of <br />
                        aggregated <br />
                        services
                    </>
                ),
            },
        },
        rightColumn: {
            top: {
                bgColor: "#023535", // Dark Greenish
                textColor: "text-white",
                title: (
                    <>
                        Collect & <br />
                        trade NFTs
                    </>
                ),
            },
            bottom: {
                bgColor: "#ff9168", // Peach
                textColor: "text-[#3f1208]",
                title: (
                    <>
                        Privacy-first: You <br />
                        set the terms for <br />
                        your data
                    </>
                ),
            },
        },
    },

    // SLIDE 3: "MAXIMUM SECURITY" (Reference Image 1)
    {
        centerText: (
            <>
                MAXIMUM <br />
                SECURITY
            </>
        ),
        leftColumn: {
            top: {
                bgColor: "#d9ffbf", // Light Green
                textColor: "text-[#0e3012]",
                title: (
                    <>
                        Trusted by <br />
                        millions of users
                    </>
                ),
            },
            bottom: {
                bgColor: "#c4e2ff", // Light Blue
                textColor: "text-[#0a2e52]",
                title: (
                    <>
                        Security alerts, <br />
                        frontrun protection, <br />
                        Wallet Guard built- <br />
                        in
                    </>
                ),
            },
        },
        rightColumn: {
            top: {
                bgColor: "#eecdf8", // Lavender
                textColor: "text-[#3d085e]",
                title: (
                    <>
                        24/7 support and <br />
                        real-time threat <br />
                        monitoring
                    </>
                ),
            },
            bottom: {
                bgColor: "#1a004f", // Dark Blue
                textColor: "text-white",
                title: (
                    <>
                        Powering 5+ <br />
                        billion <br />
                        transactions <br />
                        since 2021
                    </>
                ),
            },
        },
    },
];
