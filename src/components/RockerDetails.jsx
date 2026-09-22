import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Error from "./Error";
import "../styles/Rocker-Details.css";

function RockerDetails() {
  const { rockerID } = useParams();
  const [rocker, setRocker] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    fetch("/data/rockers.json")
      .then((res) => res.json())
      .then((data) => {
        const rockerByID = data.find((item) => item.id === rockerID);
        setRocker(rockerByID || null);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error Loading JSON:", err);
        setIsLoading(false);
      });
  }, [rockerID]);

  useEffect(() => {
    if (rocker) document.title = `${rocker.name} | Guitar Mania`;
  }, [rocker]);

  if (isLoading) {
    return (
      <section id="rocker-details-page">
        <Header />
        <main id="rocker-details-content">
          <p className="loading-msg">Loading Rocker...</p>
        </main>
        <Footer />
      </section>
    );
  }

  if (!rocker) {
    return <Error status={404} />;
  }

  return (
    <section id="rocker-details-page">
      <Header />
      <main id="rocker-details-content">
        <h1>{rocker.name}</h1>
      </main>
      <Footer />
    </section>
  );
}

export default RockerDetails;
