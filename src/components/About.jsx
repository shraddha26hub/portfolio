import "../styles/About.css";
import { FaDownload } from "react-icons/fa";
import TypingText from "./TypingText";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <TypingText
        text="I am a BIM student and frontend developer with strong skills in JavaScript, React, and NextJs. I enjoy building responsive and user-friendly web applications. I have worked on portfolio websites, e-commerce apps, and other real-world projects."
        speed={30}
        className="about-typewriter"
      />

      <a href="/Shraddha_Pyakurel_CV.pdf" download className="about-cv-btn">
        <FaDownload /> Download My CV
      </a>
    </section>
  );
}

export default About;
