export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-420 mx-auto px-5 md:px-7.5 pb-12.5 pt-[15vh] overflow-hidden">
      {children}
    </div>
  );
}
