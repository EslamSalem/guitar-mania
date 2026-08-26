import "../styles/Card.css";

function Card({ id, img, title }) {
  return (
    <div id={id} className="card">
      <img src={img} alt="Card Background Image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default Card;
