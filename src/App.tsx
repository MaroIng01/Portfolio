import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import { locales } from './data/locales';

import MusicPlayer from './components/MusicPlayer';

function App() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const t = locales[language];

  return (
    <>
      <div className="min-h-screen text-platinum selection:bg-royal-amethyst selection:text-white overflow-x-hidden opacity-100">
        <Background />
        <MusicPlayer />
        <div className="relative z-10">
          <Navbar
            navData={t.nav}
            language={language}
            setLanguage={setLanguage}
          />
          <Hero data={t.hero} />
          <About data={t.about} personalInfo={t.personalInfo} skills={t.skills} skillDescriptions={t.skillDescriptions} />
          <Experience data={t.experience} experienceList={t.experienceData} />
          <Projects data={t.projects} projectsList={t.projectsData} />
          <Contact data={t.contact} personalInfo={t.personalInfo} />
        </div>
      </div>
    </>
  )
}

export default App;
