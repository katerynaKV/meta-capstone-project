import { Button } from "../../components/Button/Button";
import "./GuestsCounter.css";

export function GuestsCounter() {
  return (
    <div className="GuestsCounter">
      <Button className="counter-button">–</Button>
      <span className="counter-value">10</span>
      <Button className="counter-button">+</Button>
    </div>
  );
}
