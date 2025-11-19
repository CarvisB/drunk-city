import type { Alchohol } from "../data/alcohol";

interface Props {
  drink: Alchohol;
}

export default function DrinkCard({ drink }: Props) {
  return (
    <div className="drink-card">
      <img src={drink.image} alt={drink.brand} className="drink-img" />

      <div className="drink-info">
        <h3 className="drink-brand">{drink.brand}</h3>

        <div className="drink-tags">
          <span className="tag">{drink.category}</span>
          <span className="tag">{drink.proof} proof</span>
        </div>

        <p className="drink-price">${drink.price.toFixed(2)}</p>

        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
}
