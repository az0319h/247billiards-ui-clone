"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import marquee1 from "@/assets/marquee1.png";
import marquee2 from "@/assets/marquee2.svg";
import marquee3 from "@/assets/marquee3.png";

export default function LogoMarquee() {
  const marquees = [
    { src: marquee1, alt: "marquee 1" },
    { src: marquee2, alt: "marquee 2" },
    { src: marquee3, alt: "marquee 3" },
  ];
  return (
    <div className="py-16 lg:py-32">
      <Marquee
        speed={80}
        gradient={true}
        gradientColor="none"
        pauseOnHover={false}
        loop={0}
        autoFill
      >
        {marquees.map((marquee, i) => (
          <div key={i} className="mx-10 flex items-center justify-center">
            <div
              className={`relative h-6 sm:h-7 opacity-15 ${i % 2 ? "w-50" : "w-75 "}`}
            >
              <Image
                src={marquee.src}
                alt={marquee.alt}
                fill
                className="object-contain "
                priority={i < 4}
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
