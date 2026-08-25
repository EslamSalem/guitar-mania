import logo from "../assets/logo/guitar-mania-logo-secondary-stroke.png";
import githubIcon from "../assets/github-icon.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div id="credits">
        <img src={logo} alt="Guitar Mania Logo" />
        <p>Designed & Developed by Eslam Salem</p>
      </div>
      <div id="links">
        <a
          href="https://github.com/EslamSalem/guitar-mania"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="Github Icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
