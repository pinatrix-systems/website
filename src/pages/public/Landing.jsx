import About from "./components/About";
import Contact from "./components/Contact";
import Divisions from "./components/Divisions";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Labs from "./components/Labs";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Divisions />
      <Services />
      <Projects />
      <Labs />
      <Contact />
      <Footer />
    </>
  );
}
