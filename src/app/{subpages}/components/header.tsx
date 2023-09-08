import Link from "next/link";
import { Home } from "react-feather";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Home/>
      </Link>
    </header>
  );
}

export default Header;
