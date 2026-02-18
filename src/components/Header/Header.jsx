import { Link, NavLink } from "react-router";
import "./Header.css";

export function Header() {
  const linkAlert = () => {
    alert("This link is for demo purposes only");
  };
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/">
          <img className="img-logo" src="/logo.png" />
        </Link>

        <nav className="navigation">
          <ul className="links">
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <a onClick={linkAlert} className="nav-link" href="#">
                About
              </a>
            </li>
            <li>
              <a onClick={linkAlert} className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li>
              <NavLink className="nav-link" to="/reservation">
                Reservation
              </NavLink>
            </li>
            <li>
              <a onClick={linkAlert} className="nav-link" href="#">
                Order Online
              </a>
            </li>
            <li>
              <a onClick={linkAlert} className="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
