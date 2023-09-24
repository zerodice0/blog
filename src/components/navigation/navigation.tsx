import React from "react";
import { Home, Menu } from "react-feather";
import "./navigation.css";

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <div className="home">
        <a className="navigation-link" href="/">
          <Home />
          {"BlackBear's Archive"}
        </a>
      </div>
      <div className="search">
        <input />
        <button>Search</button>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </nav>
  );
};

export default Navigation;
