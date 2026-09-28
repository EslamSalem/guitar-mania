import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import Divider from "./Divider";
import AudioTrack from "./audio/AudioTrack";
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
        <section
          id="rocker-bio"
          className="rocker-details-section"
          style={{ backgroundImage: `URL("${rocker.heroImgURL}")` }}
        >
          <div className="backdrop">
            <h1 className="title">{rocker.name}</h1>
            <p className="bio">{rocker.bio}</p>
          </div>
        </section>
        <section
          id="rocker-guitar"
          className="rocker-details-section"
          style={{ backgroundImage: `URL("${rocker.guitarImgURL}")` }}
        >
          <div className="backdrop">
            <Divider />
            <h1 className="title">Signature Guitar</h1>
            <p className="bio">{rocker.guitarInfo}</p>
            <img
              className="guitarPNG"
              src={rocker.guitarPNG}
              alt="Signature Guitar"
            />
            <p className="bio song-title">{rocker.songName}</p>
            <AudioTrack soloURL={rocker.soloURL} />
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default RockerDetails;
