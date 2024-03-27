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
      <Link className="link" to="/profile">
        Profile
      </Link>
      <Link className="link" to="/store">
        Store
      </Link>
      <a className="link" target="_blank" href="https://codepen.io/ShawnBasquiat/full/bGVWpYw">
        Let's Play A Game!
      </a>
      
    </nav>
  );
}

export default Navbar;
