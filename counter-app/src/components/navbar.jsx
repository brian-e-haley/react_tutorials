import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  /* Cannot use lifestyle hooks in stateless functional components.
    Can only use lifecycle hooks with class components.*/

  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
