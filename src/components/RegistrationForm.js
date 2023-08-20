import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function RegistrationForm() {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "password must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: (value) => value === "telephonemoc",
      then: () => Yup.string().required("Requred"),
    }),
  });

  const onSubmit = (values) => {
    console.log("Form data ", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              name="email"
              type="email"
              label="E-mail"
            />
            <FormikControl
              control="input"
              name="password"
              type="password"
              label="Password"
            />
            <FormikControl
              control="input"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
            />
            {/* <FormikControl
              control="radio"
              name="modeOfContact"
              label="Mode Of Contact"
              options={options}
            /> */}
            <FormikControl control='radio' label='Radio Topic' name='modeOfContact' options={options} /> 
            <FormikControl
              control="input"
              name="phone"
              type="text"
              label="Phone number"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
