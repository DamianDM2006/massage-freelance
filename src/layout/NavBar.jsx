/**
 * two types of navigation bar displays to be used by layout
 * 1. standard screen: entire menu displayed all the time
 * 2. mobile screen w/ drop down type menu
 */
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="menu">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/appointments">Appointments</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/serviceDetails">Service Details</NavLink>
    </nav>
  )
};

export default NavBar;