import { useField } from 'formik'
import React from 'react'

export default function EmailInput({label,...props}:any) {
  const [field,meta]=useField(props)
  return (
    <>
    <label htmlFor={props.id||props.name}>{label}</label>
    <input {...field} {...props}/>
    {meta.touched&&meta.error?(<div className='error'>{meta.error}</div>):null}
    </>
  )
}
