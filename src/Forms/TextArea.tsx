import { useField } from 'formik'
import React from 'react'

function TextArea({label,...props}:any) {
    const [field,meta]=useField(props)
  return (
    <>
    <label htmlFor={props.id||props.name}>{label}</label>
    <textarea {...field} {...props}/>
    {meta.touched&&meta.error?(<div className='error'>{meta.error}</div>):null}
    </>
  )
}

export default TextArea