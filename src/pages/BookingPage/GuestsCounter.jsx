import { Button } from "../../components/Button/Button";
import "./GuestsCounter.css";

export function GuestsCounter({ value, onChange }) {
  const increment = (event) => {
    event.preventDefault();
    onChange(value - 1);
  };

  const decrement = (event) => {
    event.preventDefault();
    onChange(value + 1);
  };

  return (
    <div className="GuestsCounter">
      <Button
        aria-label="Increase guest count"
        onClick={increment}
        className="counter-button"
      >
        –
      </Button>
      <span className="counter-value">{value}</span>
      <Button
        aria-label="Decrease guest count"
        onClick={decrement}
        className="counter-button"
      >
        +
      </Button>
    </div>
  );
}
