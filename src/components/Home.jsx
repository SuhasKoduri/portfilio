import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import CV from '../assets/Suhas-Profile.pdf';
const Home = () => {
  return (
    <section className="home-container" id="home">
    <div className="left-side">
    <img src="https://img.freepik.com/premium-photo/child-boy-character-photo-ai-generated_980993-2472.jpg?w=2000" alt="cannot be found" className="profile-img" />
    <div className="social-icons">
      <a href="https://github.com/SuhasKoduri" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/suhas-koduri-36485a280" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      </div>
    </div>
        <div className="right-side">
      <h1>Hello, I'm <span className="name">Koduri Sri Sai Suhas</span></h1>
      <h2>MERN Stack Developer | Full-Stack Web Enthusiast</h2>
      <p>
        MERN Stack Developer building modern web applications with React, Express, and MongoDB. Skilled in HTML, CSS, JavaScript, MySQL, Postman, and GitHub, delivering responsive and efficient solutions.
      </p>
      <div>
        <a href={CV} target="_blank" rel="noopener noreferrer"><button>Download CV</button></a>
        <a href="#projects"><button>Projects</button></a>
      </div>
    </div>
    </section>
  )
}

export default Home
