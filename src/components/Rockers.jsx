import { useEffect, useState } from "react";
import { Link } from "react-router";
import Header from "./Header";
import RockersFilter from "./RockersFilter";
import Card from "./Card";
import Footer from "./Footer";
import "../styles/Rockers-Page.css";

function Rockers() {
  const [rockersData, setRockersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [filter, setFilter] = useState({
    name: "",
    genre: [],
    brand: [],
    sortByName: "none",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    document.title = "Famous Rockers | Guitar Mania";

    fetch("/data/rockers.json")
      .then((res) => res.json())
      .then((data) => {
        setRockersData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error Loading JSON:", err);
        setIsLoading(false);
      });
  }, []);

  const rockersFiltered = rockersData.filter(
    (item) =>
      item.name.toLowerCase().startsWith(filter.name.toLowerCase()) &&
      (filter.genre.length === 0 ||
        filter.genre.some((gen) => item.genre.includes(gen))) &&
      (filter.brand.length === 0 || filter.brand.includes(item.brand)),
  );

  const rockersSorted = [...rockersFiltered].sort((a, b) => {
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
          {isLoading ? (
            <p className="no-cards-msg">Loading Rockers...</p>
          ) : rockersSorted.length > 0 ? (
            <div id="rockers-cards">
              {rockersSorted.map((item) => (
                <Link key={item.id} to={`/rockers/${item.id}`}>
                  <Card id={item.id} img={item.cardImgURL} title={item.name} />
                </Link>
              ))}
            </div>
          ) : (
            <p className="no-cards-msg">No Rockers Match Your Filters</p>
          )}
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Rockers;
