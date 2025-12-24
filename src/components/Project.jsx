import "../styles/Project.css";

const projects = [
  {
    name: "Portfolio Website",
    description: "My personal portfolio using React and CSS.",
    tech: "React, CSS",
    github: "https://github.com/shraddha26hub/portfolio"
  },
  {
    name: "Chat App",
    description: "Real-time chat app using Socket.io.",
    tech: "React, Node, Socket.IO",
    github: "https://github.com/shraddha26hub/chatapp",
    demo: "#",
  },
];

function Project() {
  return (
    <section id="project" className="project">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((projects, index) => (
          <div className="projects-card" key={index}>
            <h3>{projects.name}</h3>
            <p>{projects.description}</p>
            <p><strong>Tech:</strong> {projects.tech}</p>
            <div className="project-links">
              <a href={projects.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
