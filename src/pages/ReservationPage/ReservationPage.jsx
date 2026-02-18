import { Button } from "../../components/Button/Button";
import { Page } from "../../components/Page/Page";
import { GuestsCounter } from "./GuestsCounter";
import { Link } from "react-router";
import "./ReservationPage.css";

export function ReservationPage() {
  return (
    <Page>
      <div className="container reservation-content">
        <h2>Reserve a table</h2>
        <div className="reservation-wrapper">
          <form>
            <div className="input-container">
              <label for="date">Date:</label>
              <input type="date" id="date" name="date" />
            </div>

            <div className="input-container">
              <label for="time">Time:</label>
              <input type="time" id="time" name="time" />
            </div>

            <div className="input-container">
              <label for="numGuests">Number of guests:</label>
              <GuestsCounter />
            </div>

            <div className="input-container">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>

            <div className="input-container">
              <label for="telephone">Phone number:</label>
              <input type="tel" id="telephone" name="telephone" />
            </div>

            <div className="input-container">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <Link to="/confirmation" className="confirmatiom-page-button">
              <Button>Confirm reservation</Button>
            </Link>
          </form>

          <div className="reservation-img">
            <img src="/restaurant.jpg" />
          </div>
        </div>
      </div>
    </Page>
  );
}
