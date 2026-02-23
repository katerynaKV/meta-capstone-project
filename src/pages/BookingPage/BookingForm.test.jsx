import { render, screen } from "@testing-library/react";
import { BookingForm, validateForm } from "./BookingForm";
import { BrowserRouter } from "react-router";

test("Renders reservation button", () => {
  // Arrange
  render(<BookingForm />);

  // Assert
  const button = screen.getByText("Confirm reservation");
  expect(button).toBeInTheDocument();
});

test("each input has a correct name attribute", () => {
  // Arrange
  render(<BookingForm />);

  const dateInput = screen.getByLabelText("Date:");
  const timeInput = screen.getByLabelText("Time:");
  const occasionInput = screen.getByLabelText("Occasion: (Optional)");
  const nameInput = screen.getByLabelText("Name:");
  const phoneNumberInput = screen.getByLabelText("Phone number:");
  const emailInput = screen.getByLabelText("Email:");

  // Assert
  expect(dateInput).toHaveAttribute("name", "date");
  expect(timeInput).toHaveAttribute("name", "time");
  expect(occasionInput).toHaveAttribute("name", "occasion");
  expect(nameInput).toHaveAttribute("name", "name");
  expect(phoneNumberInput).toHaveAttribute("name", "phoneNumber");
  expect(emailInput).toHaveAttribute("name", "email");
});

test("each input has a correct type attribute", () => {
  // Arrange
  render(<BookingForm />);

  const dateInput = screen.getByLabelText("Date:");
  const nameInput = screen.getByLabelText("Name:");
  const phoneNumberInput = screen.getByLabelText("Phone number:");
  const emailInput = screen.getByLabelText("Email:");

  // Assert
  expect(dateInput).toHaveAttribute("type", "date");
  expect(nameInput).toHaveAttribute("type", "text");
  expect(phoneNumberInput).toHaveAttribute("type", "tel");
  expect(emailInput).toHaveAttribute("type", "email");
});

test("validateForm returns no errors when all values are correct", () => {
  // Arrange
  const values = {
    date: "2025-07-05",
    time: "00:30",
    numGuests: 1,
    name: "John Doe",
    phoneNumber: "0994919692",
    email: "bonya@gmail.com",
  };

  // Act
  const errors = validateForm(values);

  // Assert
  expect(errors).toStrictEqual({});
});

test("validateForm returns correct errors when no values are entered", () => {
  // Arrange
  const values = {
    date: "",
    time: "",
    occasion: "",
    numGuests: 1,
    name: "",
    phoneNumber: "",
    email: "",
  };

  // Act
  const errors = validateForm(values);

  expect(errors).toStrictEqual({
    date: "Date is required",
    email: "Email is required",
    name: "Name is required",
    phoneNumber: "Phone number is required",
    time: "Time is required",
  });
});
