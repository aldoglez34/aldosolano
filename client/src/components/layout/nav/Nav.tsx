import { FC, useContext } from "react";
import { Container, Nav as BoostrapNav, Navbar } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import { isEqual } from "lodash";
import { LanguageSwitch } from "../../switch/LanguageSwitch";
import { LanguageContext } from "../../../context/languageContext";
import cn from "classnames";

import styles from "./Nav.module.scss";

const Nav: FC = () => {
  const { displayText } = useContext(LanguageContext);

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
          <BoostrapNav className="ml-auto align-items-center">
            <LanguageSwitch className="mr-4" />
            {displayText("nav.menu").map((option: string, idx: number) => (
              <strong
                className={cn(
                  styles.navLink,
                  !isEqual(idx, displayText("nav.menu").length) && "mr-2"
                )}
                key={idx}
              >
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
