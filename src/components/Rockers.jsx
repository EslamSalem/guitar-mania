import Header from "./Header";
import Footer from "./Footer";
import "../styles/Rockers-Page.css";

function Rockers() {
  return (
    <section id="rockers-page">
      <Header />
      <main id="rockers-page-content">
        <div id="rockers-filter"></div>
        <div id="rockers-container">
          <h1 id="rockers-title">Famous Rockers</h1>
          <div id="rockers-cards"></div>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Rockers;
