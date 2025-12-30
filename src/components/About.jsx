import React, { useEffect, useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    // make it visible immediately after render
    aboutRef.current.classList.add("visible");
  }, []);

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="about">
      <div ref={aboutRef} className="about fade-up">
        <h1>About Me</h1>

        <p>
          A passionate MERN Stack Developer who enjoys creating efficient and interactive web applications.
I work on both front-end and back-end development, focusing on building seamless user experiences.
Constantly learning new technologies, I aim to enhance my skills and contribute to meaningful projects.
        </p>

        <button onClick={handleContactClick}>Contact Me</button>
      </div>
    </section>
  );
};

export default About;
