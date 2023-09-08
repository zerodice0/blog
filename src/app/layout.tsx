import { PropsWithChildren } from "react";
import Navigation from "../components/navigation/navigation";

const RootLayout = ({children}: PropsWithChildren) => {
  return (
    <>
      <Navigation/>
      {children}
    </>
  )
}

export default RootLayout;
