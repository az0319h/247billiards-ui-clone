interface SectionLayoutProps {
  children: React.ReactNode;
  /** 상단 패딩 유틸 (예: "pt-[15vh]", "pt-20") */
  paddingTop?: string;
  /** 하단 패딩 유틸 (예: "pb-20", "pb-[10vh]") — 기본: "pb-12.5" */
  paddingBottom?: string;
}

export default function SectionLayout({
  children,
  paddingTop,
  paddingBottom = "pb-12.5",
}: SectionLayoutProps) {
  return (
    <div
      className={`max-w-420 mx-auto px-5 md:px-7.5 overflow-hidden ${paddingTop ?? ""} ${paddingBottom}`}
    >
      {children}
    </div>
  );
}
