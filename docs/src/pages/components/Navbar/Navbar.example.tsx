import React from "react";
import ReactDOM from "react-dom";
import Navbar from "@src/components/Navbar";
import MedicaregovLogo from "@src/components/MedicaregovLogo";

ReactDOM.render(
  <Navbar inverse>
    <div className="m-c-navbar__section">
      <a href="/" className="mct-c-headerLogo">
        <MedicaregovLogo className="mct-c-headerLogo__image" fill="#12890E" />
      </a>
      <div className="m-c-navbar__productName">Medicare Coverage Tools</div>
    </div>
  </Navbar>,
  document.getElementById("js-example")
);
