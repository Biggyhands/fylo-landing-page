import React from "react";
import landingPageLogo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={landingPageLogo} alt="Fylo Page Logo" />

        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </header>
  );
}
