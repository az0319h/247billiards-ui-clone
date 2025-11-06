"use client";

import { Link } from "@/i18n/routing";

interface CTAButtonProps {
  href: string;
  label: string;
  className?: string; // 선택적 추가 스타일
}

export default function CTAButton({ href, label, className }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`mt-10 block bg-black transition-all duration-300 hover:text-black hover:bg-hover-200 w-fit py-6 px-12 text-center text-16-medium text-white rounded-sm ${className ?? ""}`}
    >
      {label}
    </Link>
  );
}
