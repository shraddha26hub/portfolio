import "../styles/Hero.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profile from "../assets/profile.png";
import TypingText from "./TypingText";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* PROFILE IMAGE */}
        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>

        {/* HERO TEXT */}
        <div className="hero-text">
          <h1>Hi, I'm Your Name</h1>
          <TypingText
            text="Frontend Developer | React Developer | MERN Stack Developer"
            speed={50}
            className="hero-typewriter"
          />

          <div className="icons">
            <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
