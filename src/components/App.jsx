import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Experiences from './experience/Experience';
import Sketches from './sketch/Sketch';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Additional from './Additional/Additional';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  sketchData,
  experienceData,
  additionalData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [sketch, setSketch] = useState([]);
  const [experiences, setExperience] = useState([]);
  const [additional, setadditional] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setSketch([...sketchData]);
    setExperience([...experienceData]);
    setadditional([...additionalData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider
      value={{ hero, about, projects, sketch, experiences, additional, contact, footer }}
    >
      <Hero />
      <About />
      <Projects />
      <Sketches />
      <Experiences />
      <Additional />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
