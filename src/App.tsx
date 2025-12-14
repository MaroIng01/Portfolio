import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen text-platinum selection:bg-royal-amethyst selection:text-white overflow-x-hidden">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App;
