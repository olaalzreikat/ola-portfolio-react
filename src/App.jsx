import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Skills } from "./components/sections/Skills";
import { CardNav } from "./components/CardNav";
import { Footer } from "./components/Footer";

function App() {
  // tracks whether the loading screen has finished
  const [isLoaded, setIsLoaded] = useState(false);

  // tracks whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // tracks which section to show — null means show the home page with cards
  const [activeSection, setActiveSection] = useState(null);

  // called when a card or nav link is clicked
  // sets the active section, closes the menu, and scrolls to the top
  const goTo = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* show loading screen until it completes, then fade in the page */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ background: "#faf7f2", color: "#2d1f14" }}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} goTo={goTo} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} goTo={goTo} />

        {/* home view: only shown when no section is selected */}
        {activeSection === null && (
          <>
            <Home />
            {/* decorative separator between hero and card nav */}
            <div className="flex items-center justify-center gap-4 px-12 py-4">
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #c25c2a)" }} />
              <span style={{ color: "#c25c2a", fontSize: "1.2rem" }}>✦</span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #c25c2a)" }} />
            </div>
            <CardNav goTo={goTo} />
          </>
        )}

        {/* each section only renders when its card is clicked */}
        {activeSection === "about"    && <About />}
        {activeSection === "skills"   && <Skills />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact"  && <Contact />}

        {/* footer always visible regardless of section */}
        <Footer />
      </div>
    </>
  );
}

export default App;
