import React from "react";
import "./header.styles.scss";
import { ReactComponent as Github } from "../../assets/github.svg";

const Header = () => {
  return (
    <header className="header">
      <h1>Notes</h1>
      <a href="https://github.com/iminfinity/Notes-in-Browser">
        <Github />
      </a>
    </header>
  );
};

export default Header;
