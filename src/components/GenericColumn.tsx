"use client";
import React from "react";
import { CardConfig } from "@/data/cardData";

interface GenericColumnProps {
    topCard: CardConfig;
    bottomCard: CardConfig;
}

const GenericColumn: React.FC<GenericColumnProps> = ({ topCard, bottomCard }) => {
    return (
        <>
            {/* Top Card */}
            <div
                className={`w-full h-full rounded-xl p-5 flex flex-col relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${topCard.className || ""}`}
                style={{ backgroundColor: topCard.bgColor }}
            >
                <div className={`text-2xl font-bold leading-8.5 z-10 ${topCard.textColor}`}>
                    {topCard.title}
                </div>
                {/* Render optional content if any */}
                {topCard.content && (
                    <div className="mt-4 z-10">
                        {topCard.content}
                    </div>
                )}
            </div>

            {/* Bottom Card */}
            <div
                className={`w-full h-full rounded-xl p-5 flex flex-col relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${bottomCard.className || ""}`}
                style={{ backgroundColor: bottomCard.bgColor }}
            >
                <div className={`text-2xl font-bold leading-8.5 z-10 ${bottomCard.textColor}`}>
                    {bottomCard.title}
                </div>
                {bottomCard.content && (
                    <div className="mt-4 z-10">
                        {bottomCard.content}
                    </div>
                )}
            </div>
        </>
    );
};

export default GenericColumn;
