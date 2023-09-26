import React from "react";
import Navigation from "../components/navigation/navigation";

import "./layout.css";

import type { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <html>
      <head></head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
