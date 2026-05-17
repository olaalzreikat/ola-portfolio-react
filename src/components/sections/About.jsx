import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-8">

          {/* Heading */}
          <h2 className="text-5xl font-bold mb-3 text-center" style={{ color: "#2d1f14" }}>About Me</h2>
          <p className="text-base text-center mb-16" style={{ color: "#9c8070", fontFamily: "'Caveat', cursive", fontSize: "1.3rem" }}>
            The story behind the code
          </p>

          {/* Bio */}
          <div className="mb-8 p-10 rounded-3xl hover:-translate-y-1 transition-all duration-300"
            style={{ background: "#f5f0e8", border: "1px solid rgba(194,92,42,0.15)" }}>
            <h3 className="text-2xl font-bold mb-5" style={{ color: "#2d1f14" }}>My Journey began...</h3>
            <p className="leading-relaxed mb-4" style={{ color: "#6b5744", fontSize: "1.05rem" }}>
              I got into software development out of curiosity. I wanted to understand how things on the web actually worked, and that curiosity turned into a passion for building things that are useful, fast, and easy to use.
            </p>
            <p className="leading-relaxed" style={{ color: "#6b5744", fontSize: "1.05rem" }}>
              I enjoy working across the stack and am always looking to improve my craft, one project at a time.
            </p>
          </div>

          {/* Education + Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Education */}
            <div className="p-8 rounded-3xl hover:-translate-y-1 transition-all duration-300"
              style={{ background: "#f5f0e8", border: "1px solid rgba(194,92,42,0.15)" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#c25c2a" }}>Education</h3>

              <div className="space-y-8">
                <div>
                  <p className="text-lg font-semibold leading-snug" style={{ color: "#2d1f14" }}>
                    High School Student at Centennial High School
                  </p>
                  <p className="mt-2 leading-relaxed" style={{ color: "#6b5744" }}>
                    Pursuing rigorous coursework while building real projects and gaining hands-on experience in software development.
                  </p>
                </div>
                <div style={{ borderTop: "1px solid rgba(194,92,42,0.15)", paddingTop: "28px" }}>
                  <p className="text-lg font-semibold leading-snug" style={{ color: "#2d1f14" }}>
                    West-MEC Student in Coding Program
                  </p>
                  <p className="mt-2 leading-relaxed" style={{ color: "#6b5744" }}>
                    Earning industry certifications · Building production-level applications · Learning professional development workflows and agile methodologies
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="p-8 rounded-3xl hover:-translate-y-1 transition-all duration-300"
              style={{ background: "#f5f0e8", border: "1px solid rgba(194,92,42,0.15)" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#c25c2a" }}>Experience</h3>

              <div className="space-y-8">
                <div>
                  <p className="text-lg font-semibold" style={{ color: "#2d1f14" }}>Littleton Elementary School Volunteer</p>
                  <p className="text-sm mb-2" style={{ color: "#c25c2a" }}>Educational Technology · 2025</p>
                  <p className="leading-relaxed" style={{ color: "#6b5744" }}>Built an interactive jigsaw puzzle game about tech pioneers and ran hands-on coding activities for elementary students.</p>
                </div>
                <div style={{ borderTop: "1px solid rgba(194,92,42,0.15)", paddingTop: "28px" }}>
                  <p className="text-lg font-semibold" style={{ color: "#2d1f14" }}>Summer Robotics Volunteer</p>
                  <p className="text-sm mb-2" style={{ color: "#c25c2a" }}>Glendale, Arizona · June 2025</p>
                  <p className="leading-relaxed" style={{ color: "#6b5744" }}>Taught middle schoolers programming fundamentals using Scratch to control robots with visual programming blocks.</p>
                </div>
                <div style={{ borderTop: "1px solid rgba(194,92,42,0.15)", paddingTop: "28px" }}>
                  <p className="text-lg font-semibold" style={{ color: "#2d1f14" }}>FBLA Competitive Events</p>
                  <p className="text-sm mb-2" style={{ color: "#c25c2a" }}>Website Design, Career Portfolio · 2025–2026</p>
                  <p className="leading-relaxed" style={{ color: "#6b5744" }}>Advanced through regional and state competitions, building complete projects under tight deadlines and presenting to industry judges. Qualifying for nationals.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
