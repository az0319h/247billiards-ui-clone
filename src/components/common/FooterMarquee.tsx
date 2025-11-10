"use client";

import Marquee from "react-fast-marquee";

export default function FooterMarquee() {
  return (
    <div className="bg-primary-100 h-[15vh] lg:h-[40vh] flex overflow-hidden items-center text-[6rem] lg:text-[40vh] md:text-[15vh] font-bold">
      <Marquee
        speed={140}
        gradient={true}
        gradientColor="none"
        pauseOnHover={false}
        loop={0}
        autoFill
      >
        <div className="pl-25">— 247—BILLIARDS</div>
        <div className="pl-25">— 247—BILLIARDS</div>
      </Marquee>
    </div>
  );
}
