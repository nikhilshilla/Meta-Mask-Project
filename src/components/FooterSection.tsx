// import Image from "next/image";
// import React from "react";
// import footer_character_jump from "@/assets/footer_character_jump.png";
// import footer_character_new from "@/assets/footer_character_new.png";
// import Button from "./common/Button";

// const FooterSection = () => {
//   return (
//     <div className="w-full flex flex-col font-sans">
//       {/* Container for Jump Into Web3 Section with white background matching footer */}
//       {/* Jump Into Web3 */}
//       <div className="w-full bg-white py-6 px-6">
//         <div className="w-full px-0 mx-0">
//           <div className="relative w-full min-h-[635px] bg-[#05014F] rounded-[0.8rem] overflow-hidden">
//             {/* BACK SHAPES */}
//             <div className="absolute right-[140px] top-[70px] w-[420px] h-[260px] bg-[#F2B705] rounded-[140px] rotate-[-10deg]" />
//             <div className="absolute right-[90px] bottom-[80px] w-[360px] h-[260px] bg-[#F2A1C3] rounded-[140px]" />
//             <div className="absolute right-[40px] top-[40px] w-[300px] h-[520px] bg-[#9FD3E3] rounded-[120px]" />

//             {/* CHARACTER */}
//             <div className="absolute left-[120px] bottom-0 w-[460px] h-[560px] z-10">
//               <Image
//                 src={footer_character_jump}
//                 alt="Jump Character"
//                 fill
//                 className="object-contain object-bottom"
//                 priority
//               />
//             </div>

//             {/* TEXT */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
//               <h1 className="text-white font-black uppercase leading-[0.82] tracking-tight text-[72px] md:text-[96px] drop-shadow-lg">
//                 JUMP <br />
//                 INTO <br />
//                 WEB3
//               </h1>

//               <button
//                 className="mt-6 px-10 py-3 bg-white text-black rounded-full font-semibold shadow-md transition-all duration-300 
// hover:bg-black hover:text-white hover:shadow-xl hover:scale-105"
//               >
//                 GET STARTED
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>









//       {/* Container for Updates and New to Web3 Section with white background matching footer */}
//       <div className="w-full bg-white py-10 footer-trigger relative">
//         <div className="px-6 lg:px-20 max-w-7xl mx-auto">
//           {/* Updates and New to Web3 Section */}
//           <div className="flex flex-col lg:flex-row w-full gap-6">
//             {/* Sign Up for Updates */}
//             <div className="lg:w-1/2 bg-[#F2C4FF] p-10 flex flex-col justify-center gap-6 rounded-[2.5rem]">
//               <h2 className="text-3xl font-bold uppercase text-[#24292E] max-w-md leading-tight">
//                 Sign up to receive updates and announcements
//               </h2>
//               <div className="flex gap-4">
//                 <label className="flex items-center gap-2 text-[#24292E] font-medium cursor-pointer">
//                   <input
//                     type="checkbox"
//                     className="w-5 h-5 border-2 border-[#24292E] rounded-sm accent-[#24292E]"
//                   />
//                   General updates
//                 </label>
//                 <label className="flex items-center gap-2 text-[#24292E] font-medium cursor-pointer">
//                   <input
//                     type="checkbox"
//                     className="w-5 h-5 border-2 border-[#24292E] rounded-sm accent-[#24292E]"
//                   />
//                   Developer updates
//                 </label>
//               </div>
//               <div className="w-full max-w-md">
//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#24292E] text-lg"
//                 />
//               </div>
//               <div className="flex items-center gap-2 max-w-md bg-blue-600 text-white p-2 rounded text-xs opacity-80">
//                 <div className="bg-white p-1 rounded-sm">
//                   <div className="w-4 h-4 border-2 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
//                 </div>
//                 <span>protected by reCAPTCHA</span>
//               </div>
//               <div>
//                 <button className="bg-[#24292E] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wide">
//                   Subscribe
//                 </button>
//               </div>
//               <p className="text-xs text-[#535A61] leading-relaxed max-w-lg">
//                 MetaMask may use the contact information you provide to us to
//                 contact you about our products and services. By clicking
//                 "subscribe" you consent to receive such communications. You may
//                 unsubscribe from these communications at any time. For
//                 information on how to unsubscribe, as well as our privacy
//                 practices and commitment to protecting your privacy, please
//                 review our Privacy Notice.
//               </p>
//             </div>

//             {/* New to Web3 */}
//             <div className="lg:w-1/2 bg-[#D0F0FD] p-10 flex flex-col items-center justify-center relative overflow-hidden rounded-[2.5rem]">
//               <div className="z-10 flex flex-col items-center text-center gap-6 max-w-md">
//                 <h2 className="text-5xl font-black text-[#03045E] uppercase leading-none tracking-tighter">
//                   NEW TO <br /> WEB3?
//                 </h2>
//                 <p className="text-[#24292E] text-lg leading-snug">
//                   Through a series of interactive lessons, MetaMask Learn will
//                   show you what web3 is, why it's important to you, and how to
//                   use MetaMask along the way.
//                 </p>
//                 <button className="bg-[#03045E] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wide">
//                   Start Lesson
//                 </button>
//               </div>

//               {/* Character Positioned */}
//               <div className="absolute -bottom-10 -right-10 w-[700px] h-[700px] opacity-100 pointer-events-none z-0">
//                 <Image
//                   src={footer_character_new}
//                   alt="Welcome Character"
//                   fill
//                   className="object-contain object-bottom-right"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Links Section */}
//       <div className="w-full bg-white py-16 px-6 lg:px-20 border-t border-gray-100">
//         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
//           {/* Column 1: Logo */}
//           <div className="col-span-2 md:col-span-1">
//             <h1 className="text-3xl font-black text-[#24292E] tracking-tighter leading-none">
//               Meta
//               <br />
//               Mask
//             </h1>
//           </div>

//           {/* Column 2: MetaMask Links 1 */}
//           <div className="flex flex-col gap-4">
//             <h3 className="font-bold text-[#24292E] text-base">MetaMask</h3>
//             <ul className="flex flex-col gap-3 text-sm font-medium text-[#535A61]">
//               <li className="hover:text-black cursor-pointer">Get MetaMask</li>
//               <li className="hover:text-black cursor-pointer">Buy</li>
//               <li className="hover:text-black cursor-pointer">Earn</li>
//               <li className="hover:text-black cursor-pointer">Swaps</li>
//               <li className="hover:text-black cursor-pointer flex items-center">
//                 Rewards
//                 <span className="ml-2 bg-[#BAF300] text-black text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">
//                   New
//                 </span>
//               </li>
//               <li className="hover:text-black cursor-pointer flex items-center">
//                 Predict
//                 <span className="ml-2 bg-[#BAF300] text-black text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">
//                   New
//                 </span>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3: MetaMask Links 2 */}
//           <div className="flex flex-col gap-4 pt-0 lg:pt-10">
//             <ul className="flex flex-col gap-3 text-sm font-medium text-[#535A61]">
//               <li className="hover:text-black cursor-pointer flex items-center">
//                 Perps
//                 <span className="ml-2 bg-[#BAF300] text-black text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">
//                   New
//                 </span>
//               </li>
//               <li className="hover:text-black cursor-pointer">
//                 Transaction Shield
//               </li>
//               <li className="hover:text-black cursor-pointer">Snaps</li>
//               <li className="hover:text-black cursor-pointer">MetaMask Card</li>
//               <li className="hover:text-black cursor-pointer">MetaMask USD</li>
//               <li className="hover:text-black cursor-pointer">Learn</li>
//             </ul>
//           </div>

//           {/* Column 4: Developer Links */}
//           <div className="flex flex-col gap-4">
//             <h3 className="font-bold text-[#24292E] text-base">Developer</h3>
//             <ul className="flex flex-col gap-3 text-sm font-medium text-[#535A61]">
//               <li className="hover:text-black cursor-pointer">View the Docs</li>
//               <li className="hover:text-black cursor-pointer">
//                 Developer Home
//               </li>
//               <li className="hover:text-black cursor-pointer">Dashboard</li>
//               <li className="hover:text-black cursor-pointer">
//                 Smart Accounts Kit
//               </li>
//               <li className="hover:text-black cursor-pointer">
//                 Embedded Wallets
//               </li>
//               <li className="hover:text-black cursor-pointer">MetaMask SDK</li>
//               <li className="hover:text-black cursor-pointer">Snaps</li>
//               <li className="hover:text-black cursor-pointer">Web3 Services</li>
//             </ul>
//           </div>

//           {/* Column 5: About Links */}
//           <div className="flex flex-col gap-4">
//             <h3 className="font-bold text-[#24292E] text-base">About</h3>
//             <ul className="flex flex-col gap-3 text-sm font-medium text-[#535A61]">
//               <li className="hover:text-black cursor-pointer">Security</li>
//               <li className="hover:text-black cursor-pointer">Support</li>
//               <li className="hover:text-black cursor-pointer">Blog</li>
//               <li className="hover:text-black cursor-pointer">Careers</li>
//               <li className="hover:text-black cursor-pointer">Contact</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FooterSection;




import Image from "next/image";
import React from "react";
import footer_character_jump from "@/assets/footer_character_jump.png";
import footer_character_new from "@/assets/footer_character_new.png";
import Button from "./common/Button";

const FooterSection = () => {
  return (
    <div className="w-full flex flex-col font-sans">
      {/* Container for Jump Into Web3 Section with white background matching footer */}
      {/* Jump Into Web3 */}
      <div className="w-full bg-white py-6 px-6">
        <div className="w-full px-0 mx-0">
          <div className="relative w-full min-h-[635px] bg-[#05014F] rounded-[0.8rem] overflow-hidden">
            {/* BACK SHAPES */}
            <div className="absolute right-[140px] top-[70px] w-[420px] h-[260px] bg-[#F2B705] rounded-[140px] rotate-[-10deg]" />
            <div className="absolute right-[90px] bottom-[80px] w-[360px] h-[260px] bg-[#F2A1C3] rounded-[140px]" />
            <div className="absolute right-[40px] top-[40px] w-[300px] h-[520px] bg-[#9FD3E3] rounded-[120px]" />

            {/* CHARACTER */}
            <div className="absolute left-[120px] bottom-0 w-[460px] h-[560px] z-10">
              <Image
                src={footer_character_jump}
                alt="Jump Character"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* TEXT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
              <h1 className="text-white font-black uppercase leading-[0.82] tracking-tight text-[72px] md:text-[96px] drop-shadow-lg">
                JUMP <br />
                INTO <br />
                WEB3
              </h1>

              <button
                className="mt-6 px-10 py-3 bg-white text-black rounded-full font-semibold shadow-md transition-all duration-300 
hover:bg-black hover:text-white hover:shadow-xl hover:scale-105"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>









      {/* Container for Updates and New to Web3 Section with white background matching footer */}
      <div className="w-full bg-white py-0 px-6 footer-trigger relative">
        <div className="w-full mx-w-none">
          {/* Updates and New to Web3 Section */}
          <div className="flex flex-col lg:flex-row w-full gap-6">
            {/* Sign Up for Updates */}
            <div className="lg:w-1/2 bg-[#F2C4FF] p-10 flex flex-col justify-center gap-6 rounded-[0.8rem]">
              <h2 className="text-3xl font-bold uppercase text-[#24292E] max-w-md leading-tight">
                Sign up to receive updates and announcements
              </h2>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-[#24292E] font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-[#24292E] rounded-sm accent-[#24292E]"
                  />
                  General updates
                </label>
                <label className="flex items-center gap-2 text-[#24292E] font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-[#24292E] rounded-sm accent-[#24292E]"
                  />
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
                <div className="bg-white p-1 rounded-sm">
                  <div className="w-4 h-4 border-2 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                </div>
                <span>protected by reCAPTCHA</span>
              </div>
              <div>
                <button className="bg-[#24292E] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wide">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-[#535A61] leading-relaxed max-w-lg">
                MetaMask may use the contact information you provide to us to
                contact you about our products and services. By clicking
                "subscribe" you consent to receive such communications. You may
                unsubscribe from these communications at any time. For
                information on how to unsubscribe, as well as our privacy
                practices and commitment to protecting your privacy, please
                review our Privacy Notice.
              </p>
            </div>

            {/* New to Web3 */}
            <div className="lg:w-1/2 bg-[#D0F0FD] p-10 flex flex-col items-center justify-center relative overflow-hidden rounded-[0.8rem]">
              <div className="z-10 flex flex-col items-center text-center gap-6 max-w-md">
                <h2 className="text-5xl font-black text-[#03045E] uppercase leading-none tracking-tighter">
                  NEW TO <br /> WEB3?
                </h2>
                <p className="text-[#24292E] text-lg leading-snug">
                  Through a series of interactive lessons, MetaMask Learn will
                  show you what web3 is, why it's important to you, and how to
                  use MetaMask along the way.
                </p>
                <button className="bg-[#03045E] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wide">
                  Start Lesson
                </button>
              </div>

              {/* Character Positioned */}
              <div className="absolute -bottom-10 -right-10 w-[700px] h-[700px] opacity-100 pointer-events-none z-0">
                <Image
                  src={footer_character_new}
                  alt="Welcome Character"
                  fill
                  className="object-contain object-bottom-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>








      {/* Footer Links Section */}
<div className="w-full bg-white py-16 px-6 lg:px-20 border-t border-gray-100">
  <div className="max-w-7xl mx-auto flex flex-col gap-20">
    
    {/* Top Grid: Links */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
      
      {/* Column 1: Brand Logo */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black text-black tracking-tighter leading-[0.85] uppercase">
          Meta<br />Mask
        </h1>
      </div>

      {/* Column 2: MetaMask Ecosystem */}
      <div className="flex flex-col gap-6">
        <h3 className="font-bold text-black text-sm uppercase tracking-wider">MetaMask</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          <ul className="flex flex-col gap-3 text-[13px] font-bold text-[#535A61] uppercase tracking-tight">
            <li className="hover:text-black cursor-pointer">Get MetaMask</li>
            <li className="hover:text-black cursor-pointer">Buy</li>
            <li className="hover:text-black cursor-pointer">Earn</li>
            <li className="hover:text-black cursor-pointer">Swaps</li>
            <li className="hover:text-black cursor-pointer flex items-center">
              RWAs
              <span className="ml-2 bg-[#BAF300] text-black text-[9px] px-1.5 py-0.5 rounded-sm font-black">NEW</span>
            </li>
            <li className="hover:text-black cursor-pointer">Rewards</li>
          </ul>
          <ul className="flex flex-col gap-3 text-[13px] font-bold text-[#535A61] uppercase tracking-tight">
            <li className="hover:text-black cursor-pointer flex items-center">
              Predict <span className="ml-2 bg-[#BAF300] text-black text-[9px] px-1.5 py-0.5 rounded-sm font-black">NEW</span>
            </li>
            <li className="hover:text-black cursor-pointer flex items-center">
              Perps <span className="ml-2 bg-[#BAF300] text-black text-[9px] px-1.5 py-0.5 rounded-sm font-black">NEW</span>
            </li>
            <li className="hover:text-black cursor-pointer">Transaction Shield</li>
            <li className="hover:text-black cursor-pointer">Snaps</li>
            <li className="hover:text-black cursor-pointer">MetaMask Card</li>
            <li className="hover:text-black cursor-pointer">MetaMask USD</li>
            <li className="hover:text-black cursor-pointer">Learn</li>
          </ul>
        </div>
      </div>

      {/* Column 3: Developer */}
      <div className="flex flex-col gap-6">
        <h3 className="font-bold text-black text-sm uppercase tracking-wider">Developer</h3>
        <ul className="flex flex-col gap-3 text-[13px] font-bold text-[#535A61] uppercase tracking-tight">
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

      {/* Column 4: About */}
      <div className="flex flex-col gap-6">
        <h3 className="font-bold text-black text-sm uppercase tracking-wider">About</h3>
        <ul className="flex flex-col gap-3 text-[13px] font-bold text-[#535A61] uppercase tracking-tight">
          <li className="hover:text-black cursor-pointer">Security</li>
          <li className="hover:text-black cursor-pointer">Support</li>
          <li className="hover:text-black cursor-pointer">Blog</li>
          <li className="hover:text-black cursor-pointer">Careers</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>

    {/* Bottom Section: Socials & Legal */}
    <div className="flex flex-col gap-8 pt-10 border-t border-gray-100">
      <div className="flex flex-wrap items-center justify-between gap-6">
        {/* Language & Social Icons */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-sm font-bold text-[#535A61] cursor-pointer">
             <span className="text-base">🌐</span> English
          </div>
          <div className="flex gap-2">
            {['X', 'GH', 'YT', 'IG', 'DC', 'RD', 'TK', 'RSS'].map((icon, idx) => (
              <div key={idx} className="w-10 h-10 bg-[#F2F4F6] rounded-lg flex items-center justify-center text-xs font-black text-black hover:bg-gray-200 cursor-pointer transition-colors">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold text-[#535A61] uppercase tracking-wider">
        <div className="flex flex-wrap gap-6">
          <span className="hover:text-black cursor-pointer">Consensys</span>
          <span className="hover:text-black cursor-pointer">Privacy Policy</span>
          <span className="hover:text-black cursor-pointer">Terms of Use</span>
          <span className="hover:text-black cursor-pointer">Contributor License Agreement</span>
          <span className="hover:text-black cursor-pointer">Sitemap</span>
          <span className="hover:text-black cursor-pointer">Accessibility</span>
          <span className="hover:text-black cursor-pointer">Manage Cookies</span>
        </div>
        <div className="text-gray-400 normal-case font-medium">
          ©2026 MetaMask • A Consensys Formation
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default FooterSection;




