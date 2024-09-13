import "./app.scss";
import Load from './components/load/Load';
import Portfolioo from "./components/portfolio/Portfolioo";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
 
  return (
    <div> 
        <Load />
      <Cursor />
   
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolioo />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
