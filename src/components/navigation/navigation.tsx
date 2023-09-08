import { Home, User } from "react-feather"

import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div>
        <a href="/"><Home/>BlackBear's Archive</a>
      </div>
      <div>
        <a href="/profile"><User/>Profile</a>
      </div>
    </nav>
  );
}

export default Navigation;
