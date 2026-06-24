import "../styles/Project.css";

const projects = [
  {
    name: "Task Manager",
    description: "can manage the task add task ",
    tech: "Next.js,Shadcn,Tailwind CSS",
    github: "https://github.com/shraddha26hub/taskmanager0",
    vercel: "https://taskmanager-mauve-one.vercel.app/"
  },
  {
    name: "foodie app",
    description: "can see the meal share meal",
    tech: "Next, Node, Sqlite3",
    github: "https://github.com/shraddha26hub/foodieapp",
    vercel: "https://foodieapp-three.vercel.app/",
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
              <a href={projects.vercel} target="_blank" rel="noopener noreferrer">Vercel</a>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
