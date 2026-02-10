"use client";

import Image from "next/image";
import React from "react";
import cardplane from "@/assets/cardplane.avif";
import { useGSAP } from "@gsap/react";
import { CardHoverAnimation } from "@/animations/CardHoverAnimation";

const FeaturePlaneCard = () => {
  // GSAP animation hook add kiya hai reference code ke hisaab se
  useGSAP(() => {
    CardHoverAnimation();
  }, []);

  return (
    <div className="w-full h-full rounded-xl relative overflow-hidden">
      {/* 'fill' property use ki hai taaki image container ke size ke hisaab se adjust ho jaye.
         'object-cover' ensure karega ki image khati-phati na dikhe aur poora area cover kare.
      */}
      <Image
        src={cardplane}
        alt="Feature Plane"
        fill
        className="object-cover"
        priority // Agar ye main screen pe hai to priority true rakhna better hai
      />
    </div>
  );
};

export default FeaturePlaneCard;