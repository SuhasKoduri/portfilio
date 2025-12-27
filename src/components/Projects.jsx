const Projects = () => {
    const projectImages = [
  'https://dynamics.folio3.com/blog/wp-content/uploads/2022/08/IT-Project-Management_-Steps-Methodologies-Examples-_-Best-IT-Project-Management-Service-consultants.png',
  'https://www.appletechsoft.com/wp-content/uploads/2020/06/Hospital-Management-System.jpg'
];

  const projects = [
    {
      title: 'MERN Task Management System',
      desc: 'Developed a Task Management application using MERN Stack with secure authentication and CRUD features',
      img: projectImages[0]
    },
    {
      title: 'MERN Hospital Management System',
      desc: 'Developed a Hospital Management application using MERN Stack with secure authentication and CRUD features',
      img: projectImages[1]
    }
  ];

  return (
    <section className='cardcon' id='projects'>
      <h1>Projects</h1>
      {projects.map((proj, idx) => (
        <div
          className='card'
          key={idx}
          style={{ backgroundImage: `url(${proj.img})` }}
        >
          <div className='overlay'>
            <h1>{proj.title}</h1>
            <p>{proj.desc}</p>
            <a href="https://github.com/SuhasKoduri?tab=repositories"><button>View Project Files</button></a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
