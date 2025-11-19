"use client";

import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function ScrollHorizontalText() {
  return (
    <div className="mt-24 ">
      <ParallaxProvider>
        <div className="text-6xl sm:text-[5.2rem] lg:text-[16.25rem]  relative flex flex-col justify-center overflow-hidden">
          {/* 위 텍스트 — 왼쪽 방향 (0 → -26.9%) */}
          <Parallax
            translateX={["-10%", "-90%"]}
            easing="easeInOutQuint"
            className="will-change-transform"
          >
            <p className="lg:py-24 whitespace-nowrap leading-none">
              Premium Lifestyle Products
            </p>
          </Parallax>

          {/* 아래 텍스트 — 오른쪽 방향 (0 → +50%) */}
          <Parallax
            translateX={["-10%", "30%"]}
            easing="easeInOutQuint"
            className="will-change-transform"
          >
            <p className="lg:pb-24 whitespace-nowrap leading-none">
              Premium Lifestyle Products
            </p>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
