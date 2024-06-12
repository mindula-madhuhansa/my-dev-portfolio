import "./App.css";
import Bio from "./components/bio";
import Skills from "./components/skill";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <main>
      <div className="container-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3 md:p-7">
        <div className="">
          <Bio />
          <Skills />
        </div>
        <div className="col-span-2">
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
