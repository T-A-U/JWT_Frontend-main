import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () =>  {
  return (
    <nav className="bigNav">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/auth">
        Login
      </Link>
      <Link className="link" to="/store">
        Store
      </Link>
      <Link className="link" to="/profile">
        Profile
      </Link>
    </nav>
  );
}

export default Navbar;
