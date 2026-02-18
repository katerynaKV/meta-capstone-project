import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import { ReservationPage } from "./pages/ReservationPage/ReservationPage";
import { ConfirmationPage } from "./pages/ConfirmationPage/ConfirmationPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
