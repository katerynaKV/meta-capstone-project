import { Link } from "react-router";
import { Button } from "../../components/Button/Button";
import { Page } from "../../components/Page/Page";

import "./ConfirmedBooking.css";

export function ConfirmedBooking() {
  return (
    <Page>
      <div className="table-is-reserved">
        <h2>Your table is reserved!</h2>
      </div>

      <div className="container  confirmation-content">
        <div className="confirmation-wrapper">
          <div className="confirmation-details">
            <h3>Reservation details</h3>
            <div className="detail-container">
              <b>Date:</b>
              <span>23.02.2026</span>
            </div>

            <div className="detail-container">
              <b>Time:</b>
              <span>18:00</span>
            </div>

            <div className="detail-container">
              <b>Number of guests:</b>
              <span>3</span>
            </div>
            <div className="detail-container">
              <b>Name:</b>
              <span>John Doe</span>
            </div>
            <div className="detail-container">
              <b>Phone number:</b>
              <span>556622448</span>
            </div>
            <div className="detail-container">
              <b>Email:</b>
              <span>shos.tam@example.com</span>
            </div>
          </div>

          <div className="confirmation-img">
            <img src="/restaurant-chef.jpg" />
          </div>
        </div>
        <Link to="/" className="confirmation-done">
          <Button aria-label="Navigate to home page">Back to home</Button>
        </Link>
      </div>
    </Page>
  );
}
