import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Theory.css";

function Theory() {
  const [activeComponent, setActiveComponent] = useState(null);
  let selectedComponent;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    document.title = "Learn Theory | Guitar Mania";
  }, []);

  if (activeComponent === "scales") {
    // selectedComponent = <Scales />;
  } else if (activeComponent === "chords") {
    // selectedComponent = <Chords />;
  } else {
    selectedComponent = (
      <p className="theory-msg">
        Click on "Scales" or "Chords" above to start learning!
      </p>
    );
  }

  return (
    <section id="theory-page">
      <Header />
      <main id="theory-page-content">
        <div className="theory-title-container">
          <h1
            className={`title ${activeComponent === "scales" ? "active" : ""}`}
            onClick={() => setActiveComponent("scales")}
          >
            Scales
          </h1>
          <h1
            className={`title ${activeComponent === "chords" ? "active" : ""}`}
            onClick={() => setActiveComponent("chords")}
          >
            Chords
          </h1>
        </div>
        {selectedComponent}
      </main>
      <Footer />
    </section>
  );
}

export default Theory;
