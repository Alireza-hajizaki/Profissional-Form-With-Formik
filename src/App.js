import './App.css';
import FormikContainer from './components/FormikContainer';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import EnrollmentForm from './components/Enrollment';

function App() {
  return (
    <div className="app">
      {/* <FormikContainer/> */}
      {/* <LoginForm/> */}
      {/* <RegistrationForm/> */}
      <EnrollmentForm/>
    </div>
  );
}

export default App;
