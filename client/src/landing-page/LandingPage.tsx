import { FC } from "react";
import { Button } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { ContactForm } from "../components/contact-form/ContactForm";
import Layout from "../components/layout/Layout";
import constants from "../constants/constants";

import styles from "./LandingPage.module.scss";

const {
  LANDING_PAGE: { BULLETS, SOCIALS },
} = constants;

const Section = ({ children, subtitle, title }: any) => (
  <section>
    <Fade>
      {title && (
        <h1 className="text-center">
          <span className="text-light">{title}</span>
          <hr className={styles.subtitleDivider} />
        </h1>
      )}
      {subtitle && <p className="lead text-center mb-4">{subtitle}</p>}
      {children}
    </Fade>
  </section>
);

const LandingPage: FC = () => {
  return (
    <Layout>
      <Section>
        <h1 className="display-3 mb-4 mb-md-3">
          Hola, me llamo Aldo Solano y hago páginas web.
        </h1>
        <div className="d-flex flex-column mb-4 mb-md-3">
          {BULLETS.map((bullet, idx) => (
            <span className="lead" key={idx}>
              <i
                className="far fa-arrow-alt-circle-right mr-2"
                style={{ color: "goldenrod" }}
              />
              {bullet}
            </span>
          ))}
        </div>
        <Button variant="light" className="shadow mt-1" size="lg">
          Contáctame
        </Button>
      </Section>
      <Section
        subtitle="A continuación están los vínculos a mis redes sociales."
        title="Sociales"
      >
        <div className="d-flex flex-row justify-content-center text-white">
          {SOCIALS.map((item, idx) => (
            <a
              className={styles.socialLogo}
              href={item.link}
              key={idx}
              rel="noopener noreferrer"
              target="_blank"
              title={item.title}
            >
              <i className={item.icon} />
            </a>
          ))}
        </div>
      </Section>
      <Section
        subtitle="Describe brevemente tu proyecto y contáctame usando el siguiente formulario."
        title="Contacto"
      >
        <div className="text-center">
          <ContactForm />
        </div>
      </Section>
    </Layout>
  );
};

export default LandingPage;
