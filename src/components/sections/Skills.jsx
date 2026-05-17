import { RevealOnScroll } from "./RevealOnScroll";

const skillGroups = [
  { title: "Frontend", skills: ["React", "TypeScript", "TailwindCSS", "HTML", "CSS"] },
  { title: "Backend",  skills: ["Node.js", "MongoDB"] },
];

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-24">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-8">

          <h2 className="text-5xl font-bold mb-3 text-center" style={{ color: "#2d1f14" }}>Skills</h2>
          <p className="text-center mb-16" style={{ color: "#9c8070", fontFamily: "'Caveat', cursive", fontSize: "1.3rem" }}>
            What I work with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {skillGroups.map((group) => (
              <div key={group.title}
                className="p-10 rounded-3xl hover:-translate-y-1 transition-all duration-300"
                style={{ background: "#f5f0e8", border: "1px solid rgba(194,92,42,0.15)" }}>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#c25c2a" }}>
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span key={skill}
                      className="py-2 px-5 rounded-full font-medium transition-colors duration-200"
                      style={{ background: "rgba(194,92,42,0.1)", color: "#c25c2a", fontSize: "1rem" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="p-10 rounded-3xl hover:-translate-y-1 transition-all duration-300"
            style={{ background: "#f5f0e8", border: "1px solid rgba(194,92,42,0.15)" }}>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#c25c2a" }}>
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { name: "ITS HTML & CSS",            date: "December 2024" },
                { name: "Mobile App Development",    date: "June 2025" },
                { name: "ITS JavaScript Specialist", date: "" },
                { name: "ITS HTML5 Specialist",      date: "" },
              ].map((cert) => (
                <div key={cert.name} className="flex items-start gap-3">
                  <span style={{ color: "#c25c2a", marginTop: "3px", flexShrink: 0 }}>✦</span>
                  <div>
                    <p className="font-medium" style={{ color: "#2d1f14" }}>{cert.name}</p>
                    {cert.date && <p className="text-sm" style={{ color: "#9c8070" }}>{cert.date}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
