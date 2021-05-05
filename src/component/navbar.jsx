import React, { Component } from "react";
function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="" className="navbar-brand" href="#">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCount}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
