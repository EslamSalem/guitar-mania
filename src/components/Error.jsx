import { useEffect } from "react";
import { Link } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Error.css";
import "../styles/Hero.css";

function Error({ status }) {
  useEffect(() => {
    document.title =
      status === 404
        ? "Page Not Found | Guitar Mania"
        : "Internal Server Error |  Guitar Mania";
  }, []);
  
  return (
    <div className="error-page">
      <Header />
      <div className="body-msg">
        <h1 className="bosy-msg-title">
          {status === 404 ? "Page Not Found!" : "Internal Server Error!"}
        </h1>
        <Link to={"/"} className="hero-btn">
          Go Back Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
