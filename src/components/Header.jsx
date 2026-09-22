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
          <li>
            <NavLink to={"/rockers"} end>
              Famous Rockers
            </NavLink>
          </li>
          <li>
            <NavLink to={"/theory"} end>
              Learn Theory
            </NavLink>
          </li>
          <li>
            <NavLink to={"/gear"} end>
              Guitar Gear
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
