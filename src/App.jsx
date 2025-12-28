import Nav from './components/nav'
import "./App.css"
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    const animatedEls = document.querySelectorAll('.section-inner');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible'); // optional
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedEls.forEach(el => observer.observe(el));

    return () => {
      animatedEls.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <Nav />

      {/* HOME */}
      <section id="home">
        <div className="section-inner fade-up">
          <Home />
        </div>
      </section>

      {/* ABOUT + SKILLS */}
      <section id="about">
        <div className="section-inner fade-right">
          <About />
          <Skills />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-inner fade-up">
          <Projects />
        </div>
      </section>

      {/* EDUCATION / RESUME */}
      <section id="eb">
        <div className="section-inner fade-right">
          <Resume />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-inner fade-left">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default App;
