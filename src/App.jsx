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
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      } else {
        // Uncomment the next line if you want animation to repeat on scroll
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  return () => {
    sections.forEach(section => observer.unobserve(section));
  };
}, []);

 return (
  <div>
    <Nav/>
    
    <section className="fade-up">
      <Home/>
    </section>

    <section className="fade-right">
      <About/>
    
      <Skills/>
    </section>

    <section className="fade-up">
      <Projects/>
    </section>

    <section className="fade-right">
      <Resume/>
    </section>

    <section className="fade-left">
      <Contact/>
    </section>
  </div>
)

}

export default App
