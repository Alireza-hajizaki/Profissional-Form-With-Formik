import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function LoginForm() {

    const initialValues = {
        email:'',
        password:''
    }

    const validationSchema = Yup.object({
        email : Yup.string().email('Invalid email format').required('Requiers'),
        password: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('Form data: ', values)
    }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
            formik => {
                return (
                    <Form className="form-container">
                        <FormikControl
                        control='input'
                        name='email'
                        type="email"
                        label='E-mail'
                        />
                        <FormikControl
                        control='input'
                        name='password'
                        type='password'
                        label='Password'
                        />
                        <button type="submit" disabled={!formik.isValid}>Submit</button>
                    </Form>
                )
            }
        }
    </Formik>
  )
}

export default LoginForm