import { RevealOnScroll } from "./RevealOnScroll";

const projects = [
  {
    title: "Celestial Garden",
    description: "A cozy garden game where you plant seeds, watch them grow, and harvest them to unlock new and rare plants.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://olaalzreikat.github.io/Capstone/",
  },
  {
    title: "Brick Breaker",
    description: "A classic arcade game where you bounce a ball to break all the bricks and win.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://olaalzreikat.github.io/Brick-Breaker/",
  },
  {
    title: "Equalizer Learning Hub",
    description: "A student learning platform for math practice and video lessons, built to make learning more accessible.",
    tech: ["React", "JSX", "CSS"],
    link: "https://student-learning-hub-kappa.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-3 text-center" style={{ color: "#2d1f14" }}>Featured Projects</h2>
          <p className="text-center mb-16" style={{ color: "#9c8070", fontFamily: "'Caveat', cursive", fontSize: "1.3rem" }}>Things I've built</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, key) => (
              <div key={key}
                className="p-10 rounded-3xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                style={{ background: "#f5f0e8", border: "1px solid rgba(194,92,42,0.15)" }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#2d1f14" }}>{project.title}</h3>
                <p className="mb-6 leading-relaxed flex-1" style={{ color: "#6b5744", fontSize: "1rem" }}>{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech}
                      className="py-1.5 px-4 rounded-full text-sm transition-colors duration-200"
                      style={{ background: "rgba(194,92,42,0.1)", color: "#c25c2a" }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-sm transition-colors duration-200"
                  style={{ color: "#c25c2a" }}>
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
