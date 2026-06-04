import { useState } from "react";
import Navbar from "./Componets/Navbar";
import Banner from "./Componets/Banner";
import About from "./Componets/About";
import Experience from "./Componets/Experience";
import Projects from "./Componets/Project";
import Footer from "./Componets/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />

        <section id="home">
          <Banner />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="work">
          <Projects />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;