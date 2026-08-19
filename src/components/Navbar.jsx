import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Rental Area Explorer</h2>

      <div className="navbar-links">
        <Link to="/">Search</Link>
        <Link to="/map">Map</Link>
        <Link to="/amenities">Amenities</Link>
      </div>
    </nav>
  );
}

export default Navbar;

