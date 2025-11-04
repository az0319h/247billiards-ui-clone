"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    { src: "/banner1.jpg", alt: "banner 1" },
    { src: "/banner2.jpg", alt: "banner 2" },
    { src: "/banner3.jpg", alt: "banner 3" },
    { src: "/banner4.jpg", alt: "banner 4" },
  ];

  const totalSlides = banners.length;

  // 자동 재생
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 각 슬라이드의 상태를 계산
  const getSlideStyle = (index: number) => {
    const position = (index - currentIndex + totalSlides) % totalSlides;

    if (position === 0) {
      // 현재 보이는 슬라이드 (뒤로 빠지면서 작아짐)
      return {
        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
        zIndex: 30,
        transition: "transform 0.7s ease",
      };
    } else if (position === totalSlides - 1) {
      // 방금 지나간 슬라이드 (뒤로 빠짐)
      return {
        transform: "translate3d(0px, 0%, 0px) scale3d(0.9, 0.9, 1)",
        zIndex: 10,
        transition: "transform 0.7s ease",
      };
    } else if (position === 1) {
      // 다음에 올라올 슬라이드 (아래 대기)
      return {
        transform: "translate3d(0px, 100%, 0px) scale3d(1, 1, 1)",
        zIndex: 0,
        transition: "transform 0.7s ease",
      };
    } else {
      //   나머지 슬라이드들 (더 아래 대기)
      return {
        transform: "translate3d(0px, 100%, 0px) scale3d(1, 1, 1)",
        zIndex: 0,
        transition: "transform 0.7s ease",
      };
    }
  };

  return (
    <div className="relative w-full pt-8 sm:pt-12 md:pb-12 lg:pb-0  flex flex-col items-center justify-center overflow-hidden">
      {/* 슬라이더 컨테이너 */}
      <div className="relative w-full max-w-247.5  md:aspect-auto md:h-[70vh]  aspect-square mx-auto">
        {/* 슬라이더 래퍼 */}
        <div className="relative w-full h-full overflow-hidden">
          {/* 이미지 스택 */}
          <div className="relative w-full h-full">
            {banners.map((banner, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full h-full"
                style={getSlideStyle(index)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    width={0} // Next.js에서 required, 0 넣고
                    height={0}
                    fill
                    sizes="100vw" // 뷰포트 기준으로 꽉 채움
                    className="object-cover "
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
