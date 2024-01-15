import React from 'react'
import s from '../../styles/user/SellProduct.module.scss'
import { Field, Form, Formik } from 'formik'
import TextInput from '../../Forms/TextInput'
import TextArea from '../../Forms/TextArea'
import { Link, useActionData, useSubmit } from 'react-router-dom'

import { CategoryOfProduct } from '../../common/Enums'

function SellProducts() {
  const submit=useSubmit()
  let actionData:any=useActionData()
  if(actionData===undefined)actionData={msg:'not-data-yet',status:403}
  return (
    <div className={s.container}>
      <Formik 
      initialValues={
        {
          name_of_product:'',
          price:'',
          description:'',
          quantity:'',
          category:'1'

        }
      }
      onSubmit={(values,actions)=>{
        
        submit(values,{method:'post',action:'user/sell'})
       
      }}>
        {({values})=>(
          <Form>
            <TextInput label='Name of your product' name='name_of_product' id='name_of_product'/>
            <TextInput label='What a price' name='price' id='price' type='number' step='0.01'/>
            <TextArea label='Give description of your products' name='description' id='description'/>
            <TextInput label='How many of  this you want put on market?' type='number' name='quantity' id='quantity'/>
            <label htmlFor='category'></label>
            <Field as='select' name='category' id='category'>
            <option value={CategoryOfProduct.RTV}>RTV</option>
              <option value={CategoryOfProduct.AGD}>AGD</option>
              <option value={CategoryOfProduct.CLOTHS}>Cloths</option>
              <option value={CategoryOfProduct.TOOLS}>Tool</option>
              <option value={CategoryOfProduct.BOOKSPAPER}>Books/Papers</option>

            </Field>
            <button type='submit'>Put on market</button>
          </Form>
        )}

          
      </Formik>
      
     <Link to={'/'}> {actionData.status===200?<h3 className={s.text_info}>You added item on market</h3>:null}</Link>
      </div>
  )
}

export default SellProducts