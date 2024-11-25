import { useRef } from "react";
import "./App.css";
import About from "./Comp/About";
import Certifications from "./Comp/Certifications";
import Contact from "./Comp/Contact";
import Experience from "./Comp/Experience";
import Header from "./Comp/Header";
import Hero from "./Comp/Hero";
import Projects from "./Comp/Projects";
import Technologies from "./Comp/Technologies";

function App() {
  const contactRef = useRef(null);

  // Function to scroll to the contact section
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:touch-none selection:text-cyan-900">
      
      <div className="fixed top-0 -z-10 h-full w-full">
      
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        
      </div>
      
      
      {/* Apply responsive padding: px-8 on small screens, px-20 on medium and larger */}
      <div className="container mx-auto px-8 md:px-20">
        <Header scrollToContact={scrollToContact} />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Certifications />
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
