import { FC } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import cn from "classnames";

import styles from "./Nav.module.scss";

const Nav: FC = () => (
  <Navbar
    className={cn("shadow", styles.nav)}
    collapseOnSelect
    expand="lg"
    fixed="top"
    variant="dark"
  >
    <Container className="d-flex justify-content-center">
      <Slide direction="down" triggerOnce>
        <div className={styles.logo}>Aldo Solano</div>
      </Slide>
    </Container>
  </Navbar>
);

export default Nav;
