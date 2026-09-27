import { Link, NavLink } from "react-router";
import logo from "../assets/logo/guitar-mania-logo-secondary-stroke.png";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="Guitar Mania Logo" id="logo" />
      </Link>
      <nav>
        <ul>
          <NavLink to={"/rockers"} end>
            <li>Famous Rockers</li>
          </NavLink>
          <NavLink to={"/theory"} end>
            <li>Learn Theory</li>
          </NavLink>
          <NavLink to={"/gear"} end>
            <li>Guitar Gear</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
