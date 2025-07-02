import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <nav>
      <Link to="/">Ana Sayfa</Link>
      {/* <Link to="/about">Hakkında</Link> */}
      {/* <Link to="/contact">İletişim</Link> */}
    </nav>
  );
}

export default Navbar;
