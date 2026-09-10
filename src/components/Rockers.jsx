import { useState } from "react";
import Header from "./Header";
import RockersFilter from "./RockersFilter";
import Card from "./Card";
import Footer from "./Footer";
import "../styles/Rockers-Page.css";
import image from "../assets/rockers/rockers-card-1.webp";

const rockersData = [
  { name: "Brian", genre: ["Metal", "Rock"], brand: "Schecter" },
  { name: "May", genre: ["Rock"], brand: "Gibson" },
  { name: "Zack", genre: ["Metal", "Blues"], brand: "Schecter" },
  { name: "Johnny", genre: ["Blues", "Rock"], brand: "Ibanez" },
  { name: "Jimmy", genre: ["Blues"], brand: "Gibson" },
  { name: "James", genre: ["Metal"], brand: "Schecter" },
  { name: "Hammet", genre: ["Metal"], brand: "Ibanez" },
  { name: "Mark", genre: ["Metal", "Rock", "Blues"], brand: "Ibanez" },
  { name: "Lzzy", genre: ["Rock"], brand: "Gibson" },
  { name: "Tony", genre: ["Rock"], brand: "Schecter" },
  { name: "Dave", genre: ["Blues"], brand: "Gibson" },
  { name: "David", genre: ["Metal", "Blues"], brand: "Ibanez" },
  { name: "Gary", genre: ["Blues"], brand: "Schecter" },
];

function Rockers() {
  const [filter, setFilter] = useState({
    name: "",
    genre: [],
    brand: [],
    sortByName: "none",
  });

  const rockersFiltered = rockersData.filter(
    (item) =>
      item.name.toLowerCase().startsWith(filter.name.toLowerCase()) &&
      (filter.genre.length === 0 ||
        filter.genre.some((gen) => item.genre.includes(gen))) &&
      (filter.brand.length === 0 || filter.brand.includes(item.brand))
  );

  const rockersSorted = rockersFiltered.sort((a, b) => {
    if (filter.sortByName === "asc") return a.name.localeCompare(b.name);
    else if (filter.sortByName === "dsc") return b.name.localeCompare(a.name);
    else return 0;
  });

  return (
    <section id="rockers-page">
      <Header />
      <main id="rockers-page-content">
        <RockersFilter filter={filter} setFilter={setFilter} />
        <div id="rockers-container">
          <div id="rockers-cards">
            {rockersFiltered.map((item) => (
              <Card id={crypto.randomUUID()} img={image} title={item.name} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Rockers;
