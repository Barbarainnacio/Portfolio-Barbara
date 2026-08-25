export function Background({ watermark }: { watermark?: string }) {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* matte base wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 90% at 70% 0%, #10152a 0%, transparent 55%), radial-gradient(ellipse 100% 80% at 0% 100%, #0a1420 0%, transparent 55%)",
        }}
      />
      {/* colored glow blurs (softer, matte) */}
      <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#615fff] opacity-[0.12] blur-[200px]" />
      <div className="absolute top-20 right-40 h-[500px] w-[500px] rounded-full bg-[#00d5be] opacity-[0.10] blur-[200px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-[#0b3b3a] opacity-25 blur-[200px]" />

      {watermark && (
        <div
          className="absolute -bottom-16 left-[-2%] select-none whitespace-nowrap text-white/[0.025]"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(180px, 26vw, 460px)",
            lineHeight: 0.8,
          }}
        >
          {watermark}
        </div>
      )}
    </div>
  );
}
