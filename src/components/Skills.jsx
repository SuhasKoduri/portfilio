const Skills = () => {
  const skillsArray = [
    'C', 'Python', 'HTML', 'CSS', 'React', 'Express',
    'JavaScript', 'MongoDB', 'MySql', 'Node', 'GitHub', 'Postman','Render'
  ];

  return (
    <section className="skills" id="skills">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skillsArray.map(skill => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
    </section>
  );
}

export default Skills;
