import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-24 pb-8">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight" style={{ color: "#2d1f14" }}>
            Hello, I'm{" "}
            <span style={{ color: "#c25c2a" }}>Ola Alzreikat</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: "#6b5744" }}>
            Aspiring to be a Software Developer
          </h2>
          <p className="text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed" style={{ color: "#9c8070" }}>
            Passionate about building clean, user-focused web applications that solve real problems.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects"
              className="py-2.5 px-6 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#c25c2a", color: "#fff" }}>
              View Projects
            </a>
            <a href="#contact"
              className="py-2.5 px-6 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{ border: "1px solid #c25c2a", color: "#c25c2a" }}>
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce"
        style={{ color: "#9c8070" }}>
        <span className="text-sm tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>scroll down</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};
