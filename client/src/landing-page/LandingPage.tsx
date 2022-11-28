import { FC, useContext } from "react";
import { Button, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { ContactForm } from "../components/contact-form/ContactForm";
import { LanguageContext } from "../context/languageContext";
import Layout from "../components/layout/Layout";
import constants from "../constants/constants";

import styles from "./LandingPage.module.scss";

const { SOCIALS } = constants;

const Section = ({ children, subtitle, title }: any) => (
  <section className="mb-4">
    <Fade>
      <>
        {title && (
          <h1 className="text-center">
            <span className="text-light">{title}</span>
            <hr className={styles.subtitleDivider} />
          </h1>
        )}
        {subtitle && <p className="lead text-center mb-4">{subtitle}</p>}
        {children}
      </>
    </Fade>
  </section>
);

const LandingPage: FC = () => {
  const { displayText } = useContext(LanguageContext);

  return (
    <Layout>
      <Section>
        <h1 className="display-3 mb-4 mb-md-3">
          {displayText("landingPage.welcome.header")}
        </h1>
        <div className="d-flex flex-column mb-4 mb-md-3">
          {displayText("landingPage.welcome.bullets").map(
            (bullet: string, idx: number) => (
              <span className="lead" key={idx}>
                <i
                  className="far fa-arrow-alt-circle-right mr-2"
                  style={{ color: "goldenrod" }}
                />
                {bullet}
              </span>
            )
          )}
        </div>
        <Button variant="light" className="shadow mt-1" size="lg">
          {displayText("landingPage.welcome.button")}
        </Button>
      </Section>
      <Section
        subtitle={displayText("landingPage.socials.subtitle")}
        title={displayText("landingPage.socials.header")}
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
        subtitle={displayText("landingPage.contact.subtitle")}
        title={displayText("landingPage.contact.header")}
      >
        <Col md={{ offset: 3, span: 6 }}>
          <ContactForm />
        </Col>
      </Section>
    </Layout>
  );
};

export default LandingPage;
