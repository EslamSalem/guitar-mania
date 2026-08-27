import "../styles/Card.css";

function Card({ id, img, title }) {
  return (
    <div id={id} className="card">
      <div className="card-img-wrapper">
        <img src={img} alt="Card Background Image" />
      </div>
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default Card;
