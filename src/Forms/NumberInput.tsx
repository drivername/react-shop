import { useField } from 'formik'
import React from 'react'

function NumberInput({label,...props}:any) {
    const [field,meta]=useField(props)
  return (
    <>
    <label htmlFor={props.id||props.name}>{label}</label>
    <input {...field} {...meta}/>
    {meta.touched&&meta.error?(<div className='error'>{meta.error}</div>):null}
    </>
  )
}

export default NumberInput