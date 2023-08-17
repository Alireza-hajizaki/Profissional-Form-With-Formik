import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  name: "vishwas",
  email: "",
  channel: "",
  Comments: "",
  Address: "",
};

const onSubmit = (values) => {
  console.log("Form Data :", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <section>
        <Form className="container">
            <h2>Form</h2>
          <div className="form-control">
            <label htmlFor="channel">Name</label>
            <Field type="text" id="naem" name="name" />
            <ErrorMessage name="name">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
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
            <Field as="textarea" id="comments" name="comments" />
          </div>
          <div className="form-control">
            <label htmlFor="address">Address</label>
            {/* field Revisited */}
            <Field id="address" name="address">
              {(props) => {
                const {field,form,meta} = props;
                return (
                  <div>
                    <input type="text" id="address" {...field}/>
                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                  </div>
                )
              }}
            </Field>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </section>
    </Formik>
  );
};

export default FormikForm;
