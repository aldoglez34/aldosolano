import { FC } from "react";
import { Container } from "react-bootstrap";
import Nav from "./nav/Nav";
// import ScrollButton from "./scrollbutton";
import cn from "classnames";

import styles from "./Layout.module.scss";

type LayoutType = {
  children: any;
};

const Layout: FC<LayoutType> = ({ children }) => (
  <>
    <Nav />
    <Container className={cn("py-4", styles.container)}>{children}</Container>
    {/* <ScrollButton scrollStepInPx={150} delayInMs={16.66} /> */}
  </>
);

export default Layout;
