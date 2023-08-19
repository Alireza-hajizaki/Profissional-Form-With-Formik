function FormikControl(props) {
  const {control} = props;
  switch(control) {
    case 'input':
    case 'textarea':
    case 'select':
    case 'redio':
    case 'checkbox':
    case 'date':
    default: return null;    
  }
}

export default FormikControl