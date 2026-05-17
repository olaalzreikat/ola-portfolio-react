export const MobileMenu = ({ menuOpen, setMenuOpen, goTo }) => {
  return (
    <div className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
      style={{ background: "#faf7f2" }}>
      <button onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-3xl focus:outline-none cursor-pointer"
        style={{ color: "#2d1f14" }}>
        &times;
      </button>

      {[
        { label: "Home",     section: null },
        { label: "About",    section: "about" },
        { label: "Skills",   section: "skills" },
        { label: "Projects", section: "projects" },
        { label: "Contact",  section: "contact" },
      ].map(({ label, section }) => (
        <button key={label} onClick={() => goTo(section)}
          className={`text-2xl font-semibold my-4 transform transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ color: "#2d1f14" }}>
          {label}
        </button>
      ))}
    </div>
  );
};
