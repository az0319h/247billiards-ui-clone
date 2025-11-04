"use client";

import { useState, useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  //최소 로딩 시간 1초
  useEffect(() => {
    const timer = setTimeout(() => setMinTimePassed(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // 브라우저 리소스 로딩 체크
  useEffect(() => {
    if (document.readyState === "complete") {
      return setLoaded(true);
    }

    const handleLoad = () => setLoaded(true);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const showSplash = !loaded || !minTimePassed;

  if (showSplash) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-[999999]">
        <div className="bg-gray-400 w-[20vw] h-0.5 overflow-hidden">
          <div
            className={`
              h-full w-full bg-primary-200 
              transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]
              ${loaded ? "translate-x-0" : "-translate-x-full"}
            `}
          />
        </div>
      </div>
    );
  }

  return children;
}
