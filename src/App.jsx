import { useRef } from "react";
import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {

  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero portfolioRef={portfolioRef} contactRef={contactRef}/>
      </section>
      <section id="About"><Parallax type="services"/></section>
      <section><Services /></section>
      <section id="Portfolio"><Parallax type="portfolio"/></section>
      <Portfolio />
      <section ref={contactRef} id="Contact"><Contact /></section>
    </div>
  );
};

export default App;
