import React, { forwardRef, useEffect } from 'react';
import { useField } from 'formik';

// Create the EmailInput component with forwardRef
const EmailInput = forwardRef(({ label, ...props }:any, ref:any) => {
  const [field, meta] = useField(props);
 
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='email_input' {...field} {...props} ref={ref} />
      {meta.error && meta.touched ? <div>{meta.error}</div> : null}
    </>
  );
});

export default EmailInput;
