import logo from "../assets/logo/guitar-mania-logo-secondary-stroke.png"
import "../styles/Header.css"

function Header() {
  return (
    <header>
      <img src={logo} alt="Guitar Mania Logo" id="logo" />
      <nav>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </nav>
    </header>
  )
}

export default Header;