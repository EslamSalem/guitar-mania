import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import "../styles/Rockers-Page.css";
import image from "../assets/rockers/rockers-card-1.webp"

const rockersList = [
  { name: "Guitarist 1" },
  { name: "Guitarist 2" },
  { name: "Guitarist 3" },
  { name: "Guitarist 4" },
  { name: "Guitarist 5" },
  { name: "Guitarist 6" },
  { name: "Guitarist 7" },
  { name: "Guitarist 8" },
  { name: "Guitarist 9" },
  { name: "Guitarist 10" },
  { name: "Guitarist 10" },
  { name: "Guitarist 10" },
  { name: "Guitarist 10" },
  { name: "Guitarist 10" },
  { name: "Guitarist 10" },
  { name: "Guitarist 10" },
];

function Rockers() {
  return (
    <section id="rockers-page">
      <Header />
      <main id="rockers-page-content">
        <div id="rockers-filter"></div>
        <div id="rockers-container">
          <div id="rockers-cards">
            {rockersList.map((item) => (
              <Card
                id={crypto.randomUUID()}
                img={image}
                title={item.name}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Rockers;
