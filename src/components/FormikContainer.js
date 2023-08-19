import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {

    const dropdownOptions = [
        {key: 'Select an option' , value: ''},
        {key: 'Option 1' , value: 'option 1'},
        {key: 'Option 2' , value: 'option 2'},
        {key: 'Option 3' , value: 'option 3'},
    ]

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log("Form_Data :", values);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
        {
        (formik) => 
        <Form className="form-container">
            <FormikControl control='input' type='email' label='E-mail' name='email' />
            <FormikControl control='textarea' label='Description' name='description' />
            <FormikControl control='select' label='Select a topic' name='selectOption' options={dropdownOptions} />
            <button type="submit">Submit</button>
        </Form>
        }
    </Formik>
  )
}

export default FormikContainer;
