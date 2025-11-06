interface SectionLineProps {
  /** 0이면 보더를 숨김(h-0), 1이면 1px 라인(h-[1px]) — 기본값: 1 */
  height?: 0 | 1;
  /** 바깥 여백이나 추가 유틸 붙이고 싶을 때 */
  className?: string;
}

export default function SectionLine({
  height = 1,
  className,
}: SectionLineProps) {
  const hClass = height === 0 ? "h-0" : "h-[1px]";

  return (
    <div className={`px-5 md:px-7.5 lg:px-0 ${className ?? ""}`}>
      <div
        className={`max-w-405 mx-auto ${hClass} bg-line-300 my-8 sm:my-16 md:my-24`}
      />
    </div>
  );
}
