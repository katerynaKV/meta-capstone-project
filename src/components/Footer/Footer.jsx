import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="Footer">
      <div className="container footer-content">
        <div className="footer-column">
          <img className="footer-img" src="/img-footer.jpg" />
        </div>
        <div className="footer-column">
          <h4>Doormat Navigation</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li>7421 West Maple Horizon Avenue Suite 508 Chicago</li>
            <li>+1 (312) 555-0148</li>
            <li>contact@little-lemon.com</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Social Media links</h4>
          <div className="footer-social-links">
            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
