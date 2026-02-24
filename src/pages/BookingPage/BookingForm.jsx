import "./BookingForm.css";
import { Button } from "../../components/Button/Button";
import { GuestsCounter } from "./GuestsCounter";
import { useFormik } from "formik";

/**
 * Checks all form values and accumulates errors for incorrect fields.
 */
export function validateForm(values) {
  const errors = {};

  if (!values.date) {
    errors.date = "Date is required";
  }

  if (!values.time) {
    errors.time = "Time is required";
  }

  if (!values.numGuests) {
    errors.numGuests = "Number of guests is required";
  }

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}

export function BookingForm({
  availableTimes,
  updateAvailableTimes,
  submitForm,
}) {
  const { handleChange, values, setFieldValue, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        date: "",
        time: "",
        occasion: "",
        numGuests: 1,
        name: "",
        phoneNumber: "",
        email: "",
      },
      validate: validateForm,
      onSubmit: (values) => {
        submitForm(values);
      },
    });

  // When changing the date, we should reset selected time
  const handleDateChange = (event) => {
    const newDate = event.target.value;

    setFieldValue("date", newDate);
    updateAvailableTimes(newDate);
    setFieldValue("time", "");
  };

  // Limit values used for number of guests
  const handleNumGuestsChange = (newValue) => {
    if (newValue >= 1 && newValue <= 15) {
      setFieldValue("numGuests", newValue);
    }
  };

  // Compute the correct date format for date input's `min` prop
  // Calendar should not allow reservations in the past
  const dateTime = new Date().toISOString();
  const today = dateTime.slice(0, 10);

  return (
    <form className="BookingForm" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="date">Date:</label>
        <input
          value={values.date}
          onChange={handleDateChange}
          type="date"
          id="date"
          name="date"
          min={today}
        />
        {errors.date && touched.date && (
          <span className="input-error">{errors.date}</span>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="time">Time:</label>
        <select
          value={values.time}
          onChange={handleChange}
          id="time"
          name="time"
        >
          {[""].concat(availableTimes).map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        {errors.time && touched.time && (
          <span className="input-error">{errors.time}</span>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="occasion">
          Occasion: <span className="input-optional">(Optional)</span>
        </label>
        <select
          value={values.occasion}
          onChange={handleChange}
          id="occasion"
          name="occasion"
        >
          <option></option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <div className="input-container">
        <label htmlFor="numGuests">Number of guests:</label>
        <GuestsCounter
          value={values.numGuests}
          onChange={handleNumGuestsChange}
        />
        {errors.numGuests && touched.numGuests && (
          <span className="input-error">{errors.numGuests}</span>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input
          value={values.name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
        />
        {errors.name && touched.name && (
          <span className="input-error">{errors.name}</span>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="phoneNumber">Phone number:</label>
        <input
          value={values.phoneNumber}
          onChange={handleChange}
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <span className="input-error">{errors.phoneNumber}</span>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input
          value={values.email}
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
        />
        {errors.email && touched.email && (
          <span className="input-error">{errors.email}</span>
        )}
      </div>
      <Button
        aria-label="Confirm table reservation"
        className="confirmation-page-button"
      >
        Confirm reservation
      </Button>
    </form>
  );
}
