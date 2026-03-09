import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MatrixRain from "./components/MatrixRain";
import ScanlineOverlay from "./components/ScanlineOverlay";

export default function App() {
  return (
    <div className="relative min-h-screen bg-terminal grid-bg">
      <MatrixRain />
      <ScanlineOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
