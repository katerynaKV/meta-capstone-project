import { useReducer, useState } from "react";
import { Page } from "../../components/Page/Page";
import { BookingForm } from "./BookingForm";
import "./BookingPage.css";
import { fetchAPI, submitAPI } from "../../api";
import { useNavigate } from "react-router";

const initialAvailableTimes = [
  "",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

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
    console.log(formData);

    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      console.log("We will navigate now!");
      navigate("/confirmation");
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
