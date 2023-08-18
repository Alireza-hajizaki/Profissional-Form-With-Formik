import * as Yup from "yup";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import TextError from "./TextError";

const initialValues = {
  name: "vishwas",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log("Form Data :", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

const FormikForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log('Formik Props', formik)
        return (
          <section>
            <Form className="container">
              <h2>Form</h2>
              <div className="form-control">
                <label htmlFor="channel">Name</label>
                <Field type="text" id="naem" name="name" />
                <ErrorMessage name="name" component={TextError} />
              </div>

              <div className="form-control">
                <label htmlFor="channel">E-mail</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email">
                  {(errorMsg) => <div className="error">{errorMsg}</div>}
                </ErrorMessage>
              </div>

              <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <Field
                  type="text"
                  id="channel"
                  name="channel"
                  placeholder="YouTube Channel name"
                />
                <ErrorMessage name="channel">
                  {(errorMsg) => <div className="error">{errorMsg}</div>}
                </ErrorMessage>
              </div>

              <div className="form-control">
                <label htmlFor="name">Comments</label>
                <Field
                  as="textarea"
                  id="comments"
                  name="comments"
                  validate={validateComments}
                />
                <ErrorMessage name="comments" component={TextError} />
              </div>

              <div className="form-control">
                <label htmlFor="address">Address</label>
                {/* field Revisited */}
                <FastField id="address" name="address">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <div>
                        <input type="text" id="address" {...field} />
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </FastField>
              </div>

              <div className="form-control">
                <label>FaceBook profile</label>
                <Field type="text" id="facebook" name="social.facebook" />
              </div>
              <div className="form-control">
                <label>Twitter profile</label>
                <Field type="text" id="twitter" name="social.twitter" />
              </div>
              <div className="form-control">
                <label>Primary Phone number</label>
                <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
              </div>
              <div className="form-control">
                <label>Secondary Phone number</label>
                <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
              </div>
              <div className="form-control">
                <FieldArray name="phNumbers">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    return (
                      <div>
                        {phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}
                            <button type="button" onClick={() => push("")}>
                              +
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>

              <button type="button" onClick={() => formik.validateField('comments')} >Validate Comments</button>
              <button type="button" onClick={() => formik.validateForm()} >Validate All</button>
              <button type="button" onClick={() => formik.setFieldTouched('comments')} >Visit Comments</button>
              <button type="button" onClick={() => formik.setTouched({
                name: true,
                email: true,
                channel: true,
                comments: true,
              })} >Visit All</button>
              <button type="submit">Submit</button>
            </Form>
          </section>
        );
      }}
    </Formik>
  );
};

export default FormikForm;
