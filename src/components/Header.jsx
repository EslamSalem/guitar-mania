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
            <NavLink to={"/rockers"}>Famous Rockers</NavLink>
          </li>
          <li>
            <NavLink to={"/theory"}>Learn Theory</NavLink>
          </li>
          <li>
            <NavLink to={"/gear"}>Guitar Gear</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
