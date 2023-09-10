import { PropsWithChildren } from "react";
import Navigation from "../components/navigation/navigation";

import "./layout.css";

const RootLayout = ({children}: PropsWithChildren) => {
  return (
    <html>
      <head></head>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;
