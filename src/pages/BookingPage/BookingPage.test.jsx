import { updateTimes, initializeTimes } from "./BookingPage";

test("initializeTimes always returns some available times", () => {
  // Act
  const result = initializeTimes();

  // Assert
  expect(result.length).toBeGreaterThan(0);
});

test("initializeTimes returns times between 17:00 and 23:30 ", () => {
  // Act
  const result = initializeTimes();

  // Assert
  result.forEach((time) => {
    const [hour, minutes] = time.split(":");
    expect(hour >= 17 && hour <= 23).toBe(true);
  });
});

test("updateTimes always returns some available times", () => {
  // Act
  const result = updateTimes([], new Date());

  // Assert
  expect(result.length).toBeGreaterThan(0);
});
