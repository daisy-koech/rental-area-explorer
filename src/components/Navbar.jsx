import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Search</Link>
      <Link to="/map">Map</Link>
      <Link to="/amenities">Amenities</Link>
    </nav>
  );
}

export default Navbar;

