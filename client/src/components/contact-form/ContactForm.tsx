import { FC, useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { LanguageContext } from "../../context/languageContext";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  description: string;
};

export const ContactForm: FC = () => {
  const { displayText } = useContext(LanguageContext);

  const { register, handleSubmit } = useForm<FormValues>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    delayError: undefined,
    // shouldUseNativeValidation: true,
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>
            {displayText("landingPage.contact.form.name")}
          </Form.Label>
          <Form.Control
            maxLength={80}
            type="text"
            placeholder={displayText(
              "landingPage.contact.form.namePlaceholder"
            )}
            // name="name"
            {...register("name", { required: true })}
            // value={values.name}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // isValid={touched.name && !errors.name}
            // isInvalid={touched.name && !!errors.name}
          />
          {/* <ErrorMessage className="text-danger" name="name" component="div" /> */}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} className="mt-2">
          <Form.Label>
            {displayText("landingPage.contact.form.email")}
          </Form.Label>
          <Form.Control
            maxLength={80}
            placeholder={displayText(
              "landingPage.contact.form.emailPlaceholder"
            )}
            type="text"
            // name="email"
            {...register("email")}
            // value={values.email}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // isValid={touched.email && !errors.email}
            // isInvalid={touched.email && !!errors.email}
          />
          {/* <ErrorMessage className="text-danger" name="email" component="div" /> */}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} className="mt-2">
          <Form.Label>
            {displayText("landingPage.contact.form.phone")}
          </Form.Label>
          <Form.Control
            maxLength={80}
            // placeholder="ejemplo@correo.com"
            type="text"
            // name="email"
            {...register("phone")}
            // value={values.email}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // isValid={touched.email && !errors.email}
            // isInvalid={touched.email && !!errors.email}
          />
          {/* <ErrorMessage className="text-danger" name="email" component="div" /> */}
        </Form.Group>
      </Row>
      {/* <Field name="type" id="type" type="string">
        {({ field: { value }, form: { setFieldValue } }) => (
          <div className="mb-3">
            <label htmlFor="type">Tipo</label>
            <TypeSelector
              selected={value}
              handleClick={(str) => setFieldValue("type", str)}
            />
          </div>
        )}
      </Field> */}
      {/* <ErrorMessage className="text-danger" name="type" component="div" /> */}
      <Row>
        <Form.Group as={Col} className="mt-2">
          <Form.Label>
            {displayText("landingPage.contact.form.description")}
          </Form.Label>
          <Form.Control
            maxLength={250}
            as="textarea"
            rows={3}
            // name="description"
            {...register("description")}
            // value={values.description}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // isValid={touched.description && !errors.description}
            // isInvalid={touched.description && !!errors.description}
          />
          {/* <ErrorMessage
            className="text-danger"
            name="description"
            component="div"
          /> */}
        </Form.Group>
      </Row>
      <Form.Group className="mt-2">
        {/* <Button
          className="mt-2"
          variant="light"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div style={{ paddingLeft: "13px", paddingRight: "13px" }}>
              <Spinner size="sm" animation="border" />
            </div>
          ) : (
            "Enviar"
          )}
        </Button> */}
        <Button
          className="mt-2"
          variant="light"
          type="submit"
          // disabled={isSubmitting}
        >
          {/* {isSubmitting ? (
            <div style={{ paddingLeft: "13px", paddingRight: "13px" }}>
              <Spinner size="sm" animation="border" />
            </div>
          ) : (
            "Enviar"
          )} */}
          {displayText("landingPage.contact.form.button")}
        </Button>
      </Form.Group>
    </Form>
  );
};
