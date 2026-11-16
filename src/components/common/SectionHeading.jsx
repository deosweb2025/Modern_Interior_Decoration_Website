export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = false,
  light = false,
  className = "",
}) {
  const baseMargin = className ? className : (center ? "mb-12 sm:mb-16 text-center max-w-3xl mx-auto" : "mb-12 sm:mb-16 max-w-2xl");

  return (
    <div className={baseMargin}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5 border transition-all duration-300 ${
            light
              ? "bg-[#1b2947]/90 border-[#c49746]/50 text-[#e0be63] shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)]"
              : "bg-gradient-to-b from-white/95 via-white/90 to-[#f7f3eb]/85 border-[#c49746]/45 text-[#9e761b] shadow-[0_4px_16px_rgba(196,151,70,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)]"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c49746] shadow-[0_0_6px_rgba(196,151,70,0.7)]" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          light ? "text-[#f7f3eb]" : "text-[#131e34]"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${
            light ? "text-[#c8d2e6]" : "text-[#384661]"
          }`}
        >
          {subtitle}
        </p>
      )}

      <div
        className={`mt-5 h-0.5 w-16 bg-gradient-to-r from-[#c59b27] via-[#e0be63] to-transparent ${
          center ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
