import { useField } from 'formik';
import React from 'react'

export default function EmailInput({label,...props}:any) {
    const [field, meta] = useField(props);
 
  return (
    <>
    <label htmlFor={props.id||props.name}>{label}</label>
    <input className='email_input' {...field} {...props}/>
        {meta.error&&meta.touched? (<div>{meta.error}</div>):null}
    </>
  )
}
