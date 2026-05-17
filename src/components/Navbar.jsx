import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, goTo }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav style={{ background: "rgba(250,247,242,0.9)", borderBottom: "1px solid rgba(45,31,20,0.08)" }}
      className="fixed top-0 w-full z-40 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => goTo(null)} className="font-mono text-lg font-semibold tracking-tight" style={{ color: "#2d1f14" }}>
            ola<span style={{ color: "#c25c2a" }}>.dev</span>
          </button>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex flex-col justify-between"
            onClick={() => setMenuOpen((prev) => !prev)}>
            <span className={`block h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "#2d1f14" }} />
            <span className={`block h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ background: "#2d1f14" }} />
            <span className={`block h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "#2d1f14" }} />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "Home",     section: null },
              { label: "About",    section: "about" },
              { label: "Skills",   section: "skills" },
              { label: "Projects", section: "projects" },
              { label: "Contact",  section: "contact" },
            ].map(({ label, section }) => (
              <button key={label} onClick={() => goTo(section)}
                className="text-sm transition-colors duration-200 hover:opacity-100"
                style={{ color: "#6b5744" }}
                onMouseEnter={e => e.currentTarget.style.color = "#c25c2a"}
                onMouseLeave={e => e.currentTarget.style.color = "#6b5744"}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
