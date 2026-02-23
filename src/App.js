import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import { BookingPage } from "./pages/BookingPage/BookingPage";
import { ConfirmedBooking } from "./pages/ConfirmedBooking/ConfirmedBooking";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
