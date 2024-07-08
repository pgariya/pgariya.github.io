import About from "./Components/About";
import Navbar from "./Components/Navbar";
import "./App.css";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

import GitCalendar from "./Components/GitCalendar";
import Experience from "./Components/Experience";

function App() {

  return (
    <>
      <Navbar />
      <About />
      <Skills />

      {/* <Experience/> */}

      <Projects />
      <GitCalendar />
      <Contact />
    </>
  );
}

export default App;
