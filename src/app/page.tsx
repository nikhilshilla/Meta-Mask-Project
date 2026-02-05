import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import Logo from "@/components/Logo";
import Image from "next/image";
import FooterSection from "@/components/FooterSection";
import Fox from "@/components/Fox";
import { BiMenu } from "react-icons/bi";

export default function Home() {
  return (
    <>
      {/* MetaMask Fox - Fixed position, follows scroll, falls at footer */}
      <Fox width={200} height={200} followMouse={true} slowDrift={true} />

      <div className="px-20 overflow-x-hidden">
        {/* <Logo/> */}
        <Hero />
      </div>
      <Card />
      <div className="px-20 overflow-x-hidden">
        <Loading />
      </div>
      <FooterSection />
    </>
  );
}








