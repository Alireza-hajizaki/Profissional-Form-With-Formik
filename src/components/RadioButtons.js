import React from 'react'
import {Field , ErrorMessage} from 'formik';
import TextError from './TextError';

function RadioButtons(props) {
    const {label,name, options , ...rest} = props;
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name} {...rest} >
        {
          ({field}) => {
            return options.map(option => {
              return (
                <div className='radio-container' key={option.key}>
                <React.Fragment>
                  <input type='radio' id={option.value} {...field} value={option.value} checked={field.value === option.value} />
                  <label htmlFor={option.value} >{option.key}</label>
                </React.Fragment>
                </div>
              )
            })
          }
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default RadioButtons;