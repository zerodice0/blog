import React from "react";
import type { PropsWithChildren } from "react";
import Navigation from "../components/navigation/navigation";
import "./layout.css";
import { AuthProvider } from "../context/authProvider";

const RootLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <html>
      <head>{"BlackBear's Archive"}</head>
      <body>
        <AuthProvider>
          <Navigation />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
