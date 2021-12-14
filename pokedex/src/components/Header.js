import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="main-header">
      <div class="container">
        <nav class="main-nav">
          <ul class="main-nav-list">
            <Link to={"/"}>Home</Link>
            <Link to={"/cage"}>Cage</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
