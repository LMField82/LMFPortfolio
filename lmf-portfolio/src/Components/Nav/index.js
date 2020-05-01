import React from "react";
import './style.css';

function Nav() {

  return (
      <div className="header" role="navigation">
      <h1 className="name">Lindsay Field</h1>
        <ul className="nav navbar-expand-md justify-content-end">
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
    </ul>
</div>
  );
}

export default Nav;