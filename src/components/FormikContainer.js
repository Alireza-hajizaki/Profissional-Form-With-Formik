import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {

  const dropdownOptions = [
        {key: 'Select an option' , value: ''},
        {key: 'Option 1' , value: 'option 1'},
        {key: 'Option 2' , value: 'option 2'},
        {key: 'Option 3' , value: 'option 3'},
  ];

  const radioOptions =[
    {key:'option 1', value: 'rOption1'},
    {key:'option 2', value: 'rOption2'},
    {key:'option 3', value: 'rOption3'},
  ]

  const checkboxOptions =[
    {key:'option 1', value: 'cOption1'},
    {key:'option 2', value: 'cOption2'},
    {key:'option 3', value: 'cOption3'},
  ]

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption : [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required('Required'),
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
            <FormikControl control='radio' label='Radio Topic' name='radioOption' options={radioOptions} /> 
            <FormikControl control='checkbox' label='Checkbox topics' name='checkboxOption' options={checkboxOptions}  />
            <button type="submit">Submit</button>
        </Form>
        }
    </Formik>
  )
}

export default FormikContainer;
