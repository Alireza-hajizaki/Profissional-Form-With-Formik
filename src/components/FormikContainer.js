import { Formik, Form } from "formik";
import * as Yup from "yup";

function FormikContainer() {
  const initialValue = {};
  const validationSchema = Yup.object({});
  const onSubmit = (values) => console.log("Form_Data :", values);
  return (
    <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit} >
        {
        (formik) => <Form>
            <submit type="submit">Submit</submit>
        </Form>
        }
    </Formik>
  )
}

export default FormikContainer;
