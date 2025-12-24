import "../styles/LetsTalk.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function LetsTalk() {
  return (
    <section id="letstalk" className="letstalk">
      <h2>Let's Talk</h2>
      <p>Contact me via social media:</p>
      <div className="icons">
        <a href="https://github.com/shraddha26hub" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/shraddha-pyakurel-4020b836b" target="_blank"><FaLinkedin /></a>
        <a href="https://instagram.com/shraddha.pyakurel" target="_blank"><FaInstagram /></a>
      </div>
    </section>
  );
}

export default LetsTalk;
