import { useReducer } from "react";
import { Page } from "../../components/Page/Page";
import { BookingForm } from "./BookingForm";
import "./BookingPage.css";
import { fetchAPI, submitAPI } from "../../api";
import { useNavigate } from "react-router";

export const updateTimes = (state, date) => {
  return fetchAPI(new Date(date));
};

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export function BookingPage() {
  const [availableTimes, updateAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes(),
  );

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmation", { state: formData });
      console.log("Navigation trigger with data:", formData);
    } else {
      console.log("Submission failed according to API");
    }
  };

  return (
    <Page>
      <div className="container reservation-content">
        <h2>Reserve a table</h2>
        <div className="reservation-wrapper">
          <BookingForm
            submitForm={submitForm}
            availableTimes={availableTimes}
            updateAvailableTimes={updateAvailableTimes}
          />

          <div className="reservation-img">
            <img src="/restaurant.jpg" />
          </div>
        </div>
      </div>
    </Page>
  );
}
