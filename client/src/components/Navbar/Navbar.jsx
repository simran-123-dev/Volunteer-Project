import { NavLink } from 'react-router-dom';
import { FaChartLine } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="nav-brand" to="/">
        <span>N</span>
        NayePankh
      </NavLink>
      <div className="nav-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/programs">Programs</NavLink>
        <NavLink to="/volunteer">Volunteer</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <NavLink className="nav-cta" to="/dashboard">
        <FaChartLine aria-hidden="true" />
        Dashboard
      </NavLink>
    </nav>
  );
}

export default Navbar;
