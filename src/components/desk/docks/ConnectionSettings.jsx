import { Field, Form, Formik } from "formik";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import obs from "../../../web-socket/obs";
import * as Yup from "yup";
import Dock from "../Dock";

const connAuthSchema = Yup.object({
  url: Yup.string().default(""),
  password: Yup.string().default(""),
});

export default function ConnectionSettings() {
  return (
    <Dock header="Connection Settings">
      <Formik
        initialValues={connAuthSchema.getDefaultFromShape()}
        onSubmit={(values) => {
          const { url, password } = values;
          console.log(values);

          obs
            .connect(url, password)
            .then((res) => {
              console.info("Connected.", res);
            })
            .catch((err) => {
              console.error("Connection error.", { err });
            });
        }}
      >
        <Form className="px-3">
          <FormGroup row>
            <Label for="cs-url">URL:</Label>
            <Col>
              <Field
                as={Input}
                bsSize="sm"
                id="cs-url"
                name="url"
                placeholder="ws://localhost:4455"
                autoComplete="off"
                spellCheck="false"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="cs-password">Password:</Label>
            <Col>
              <Field
                as={Input}
                bsSize="sm"
                id="cs-password"
                name="password"
                type="password"
                placeholder="•••••"
              />
            </Col>
          </FormGroup>
          <FormGroup row inline check>
            <Button type="submit" color="primary">
              Connect
            </Button>
          </FormGroup>
        </Form>
      </Formik>
    </Dock>
  );
}
