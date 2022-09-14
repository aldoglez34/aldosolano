import { FC } from "react";
import { Container, Nav as BoostrapNav, Navbar } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import constants from "../../../constants/constants";
import cn from "classnames";

import styles from "./Nav.module.scss";

const Nav: FC = () => {
  const { NAV_MENU } = constants;

  return (
    <Navbar
      className={cn("shadow", styles.nav)}
      collapseOnSelect
      expand="lg"
      fixed="top"
      variant="dark"
    >
      <Container>
        <Slide direction="down" triggerOnce>
          <span className={styles.logo}>Aldo Solano</span>
        </Slide>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <BoostrapNav className="ml-auto">
            {NAV_MENU.map((option, idx) => (
              <strong className={styles.navLink} key={idx}>
                {option}
              </strong>
            ))}
          </BoostrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
