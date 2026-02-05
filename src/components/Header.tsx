// "use client";

// import React, { useRef } from "react";
// import Button from "./common/Button";
// import { useGSAP } from "@gsap/react";
// import { HeaderAnimation } from "@/animations/HeaderAnimation";
// import { RiMenu3Line } from "react-icons/ri";

// const Header = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const firstRef = useRef<HTMLElement>(null);
//   const secondRef = useRef<HTMLElement>(null);

//   useGSAP(() => {
//     HeaderAnimation({
//       container: containerRef,
//       headerFirst: firstRef,
//       headerSecond: secondRef,
//     });
//   }, []);

//   return (
//     <>
//       <div
//         ref={containerRef}
//         className="header_container h-screen absolute w-full"
//       />

//       <section
//         ref={firstRef}
//         className="header_section fixed top-0 left-0 p-5 w-full text-sm z-[999999999]"
//       >
//         <div className="header_first hidden lg:flex w-full px-3.5 py-2.5 items-center justify-between bg-white rounded-xl text_black font-bold">
//           <div className="flex items-center gap-8">
//             <span>MetaMask</span>
//             <span className="navLinks">Features</span>
//             <span className="navLinks">Developer</span>
//             <span className="navLinks">Cryptocurrencies</span>
//           </div>
//           <div>
//             <Button>View Metamask Web</Button>
//           </div>
//         </div>
//         <div className="flex lg:hidden justify-between gap-3 bg-white w-full px-3.5 py-2.5 rounded-xl">
//           <div>
//             <Button>View Metamask Web</Button>
//           </div>
//           <div className="header_content rounded-full text-2xl bg-black p-3 text-white">
//             <RiMenu3Line />
//           </div>
//         </div>
//       </section>

//       <section
//         ref={secondRef}
//         className="header_second flex items-center justify-between fixed top-0 left-0 p-5 w-full text-sm z-[999999999]"
//       >
//         <div className="header_first w-full px-3.5 py-2.5 flex items-center justify-between text_black font-bold">
//           <div className="flex items-center gap-8" />
//           <div className="flex items-center gap-3">
//             <div className="header_content">
//               <Button>View Metamask Web</Button>
//             </div>
//             <div className="header_content rounded-full text-2xl bg-black p-3 text-white">
//               <RiMenu3Line />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Header;












"use client";

import React, { useRef } from "react";
import Button from "./common/Button";
import { useGSAP } from "@gsap/react";
import { HeaderAnimation } from "@/animations/HeaderAnimation";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLElement>(null);
  const secondRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    HeaderAnimation({
      container: containerRef,
      headerFirst: firstRef,
      headerSecond: secondRef,
    });
  }, []);

  return (
    <>
      {/* SCROLL TRACK CONTAINER (GSAP NEEDS THIS) */}
      <div
        ref={containerRef}
        className="header_container h-screen absolute w-full"
      />

      {/* ================= FULL HEADER (SCROLL UP) ================= */}
      <section
        ref={firstRef}
        className="header_section fixed top-0 left-0 w-full z-[999999999] px-6 py-4"
      >
        <div className="mx-auto max-w-[1400px] bg-white rounded-[20px]
 px-6 py-3 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-10">
            <span className="text-2xl font-black leading-none">
              Meta<br />Mask
            </span>

            <nav className="hidden lg:flex items-center gap-8 font-medium text-black">
              <span>Features</span>
              <span>Developer</span>
              <span>MetaMask Card</span>
              <span>MetaMask USD</span>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex w-10 h-10 rounded-full border border-black items-center justify-center">
              🌐
            </div>

            <Button className="rounded-full px-6 py-2">
              GET STARTED
            </Button>

            <div className="lg:hidden w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-xl">
              <RiMenu3Line />
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPACT HEADER (SCROLL DOWN) ================= */}
      <section
        ref={secondRef}
        className="header_second fixed top-0 left-0 w-full z-[999999999] px-6 py-4"
      >
        <div className="mx-auto max-w-[1400px] bg-white rounded-full px-4 py-2 flex items-center justify-end gap-3">

          <Button className="rounded-full px-6 py-2">
            GET STARTED
          </Button>

          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-xl">
            <RiMenu3Line />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;





