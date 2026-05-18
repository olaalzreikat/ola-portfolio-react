const socials = [
  { label: "LinkedIn",  href: "#" },
  { label: "GitHub",    href: "#" },
  { label: "Instagram", href: "#" },
];

export const Footer = () => (
  <>
    <div className="flex flex-col items-center py-12" style={{ borderTop: "1px solid rgba(194,92,42,0.15)" }}>
      <p className="font-semibold tracking-widest uppercase mb-8" style={{ color: "#c25c2a" }}>
        Let's Connect!
      </p>
      <div className="flex gap-10">
        {socials.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium hover:-translate-y-1 transition-all duration-200"
            style={{ color: "#6b5744" }}
            onMouseEnter={e => e.currentTarget.style.color = "#c25c2a"}
            onMouseLeave={e => e.currentTarget.style.color = "#6b5744"}>
            {label}
          </a>
        ))}
      </div>
    </div>

    <div className="flex items-center justify-between px-10 py-4"
      style={{ background: "#2d1f14", color: "#fdf8ec", fontFamily: "'Caveat', cursive", fontSize: "1.5rem" }}>
      <span>© Ola Alzreikat</span>
      <a href="mailto:oalzreikat@gmail.com" style={{ color: "#fdf8ec", borderBottom: "1px solid rgba(253,248,236,0.4)" }}>
        oalzreikat@gmail.com
      </a>
      <span>2026</span>
    </div>
  </>
);
