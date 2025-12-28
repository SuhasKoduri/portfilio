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
          I am a passionate MERN Stack Developer who loves turning creative ideas
          into real-world web applications. I enjoy working on both front-end and
          back-end development, building interactive UI, and ensuring optimal
          performance. Beyond coding, I am constantly exploring new technologies,
          improving my skills, and seeking opportunities to contribute to
          meaningful projects.
        </p>

        <button onClick={handleContactClick}>Contact Me</button>
      </div>
    </section>
  );
};

export default About;
