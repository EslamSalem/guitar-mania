import { Link } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Error-Page.css"
import "../styles/Hero.css"

function NotFound() {
  return (
    <div className="error-page">
      <Header />
      <div className="body-msg">
        <h1 className="bosy-msg-title">Page Not Found!</h1>
        <Link to={"/"} className="hero-btn">Go Back Home</Link>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound;