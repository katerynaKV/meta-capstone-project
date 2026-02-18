import "./SpecialsCard.css";

export function SpecialsCard({ image, title, price, description }) {
  return (
    <div className="SpecialsCard">
      <img src={image} alt={title} />
      <div className="product-content">
        <div className="product-header">
          <h4 className="product-name">{title}</h4>
          <span className="product-price">${price}</span>
        </div>
        <p className="product-description">{description}</p>
        <span className="item-order">Order a delivery</span>
      </div>
    </div>
  );
}
