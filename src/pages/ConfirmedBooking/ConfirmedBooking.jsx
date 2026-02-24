import { useLocation } from "react-router";
import { Link } from "react-router";
import { Button } from "../../components/Button/Button";
import { Page } from "../../components/Page/Page";

import "./ConfirmedBooking.css";

export function ConfirmedBooking() {
  const location = useLocation();
  const bookingData = location.state;

  if (!bookingData) {
    return (
      <Page>
        <h1 className="no-reservation-found">
          No reservation found. Please try again
        </h1>
      </Page>
    );
  }

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
              <span>{bookingData.date}</span>
            </div>

            <div className="detail-container">
              <b>Time:</b>
              <span>{bookingData.time}</span>
            </div>

            <div className="detail-container">
              <b>Number of guests:</b>
              <span>{bookingData.numGuests}</span>
            </div>
            <div className="detail-container">
              <b>Name:</b>
              <span>{bookingData.name}</span>
            </div>
            <div className="detail-container">
              <b>Phone number:</b>
              <span>{bookingData.phoneNumber}</span>
            </div>
            <div className="detail-container">
              <b>Email:</b>
              <span>{bookingData.email}</span>
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
