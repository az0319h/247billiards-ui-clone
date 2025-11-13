"use client";

interface FormCTAButtonProps {
  label: string;
  className?: string;
}

export default function FormCTAButton({
  label,
  className,
}: FormCTAButtonProps) {
  return (
    <button
      type="submit"
      className={`mt-5 block bg-black transition-all duration-300 hover:text-black hover:bg-hover-200 w-fit py-6 px-12 text-center text-16-medium text-white rounded-sm ${className ?? ""}`}
    >
      {label}
    </button>
  );
}
