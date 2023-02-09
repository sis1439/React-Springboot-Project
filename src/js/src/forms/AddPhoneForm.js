import React from 'react';
import {Formik} from 'formik';
import {Input, Button, Tag} from'antd';
import { addNewCellphones } from '../client';

const inputBottomMargin = {marginBottom: '10px'};
const tagStyle = {backgroundColor: '#f55', color: 'white', ...inputBottomMargin};

const AddPhoneForm = (props) => (
  <Formik
    initialValues={{ modal: '', price: '', RAM: '',ROM: ''}}
    validate={values => {
      const errors = {};
      if (!values.modal) {
        errors.modal = 'Modal Required';
      }

      if(!values.price) {
        errors.price = 'Price Required'
      } else if(
        !/^\d+$/.test(values.price)
      ) {
        errors.modal = 'Invalid phone modal';
      }

      if(!values.RAM) {
        errors.RAM = 'RAM Required'
      }else if(
        !/^\d+GB$/.test(values.RAM)
      ) {
        errors.RAM = 'Invalid RAM format. Example: 8GB';
      }

      if(!values.ROM) {
        errors.ROM = 'ROM Required'
      } else if(
        !/^\d+GB$/.test(values.ROM)
      ) {
        errors.ROM = 'Invalid ROM format. Example: 128GB';
      }
      return errors;
    }}
    
    onSubmit={(cellphone, { setSubmitting }) => {
        addNewCellphones(cellphone).then(() => {
          props.onSuccess();
          setSubmitting(false);
        })
    }}>
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      submitForm,
      isValid
      /* and other goodies */
    }) => (
      <form onSubmit={handleSubmit}>
        <Input
          style={inputBottomMargin}
          name="modal"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.modal}
          placeholder='Modal. E.g S20+'
        />
        {errors.modal && touched.modal && <Tag style={tagStyle}>{errors.modal}</Tag>}
        <Input
          style={inputBottomMargin}
          name="price"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.price}
          placeholder='Price. E.g 1000'
        />
        {errors.price && touched.price && <Tag style={tagStyle}>{errors.price}</Tag>}
        <Input
          style={inputBottomMargin}
          name="RAM"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.RAM}
          placeholder='RAM. E.g 8GB'
        />
        {errors.RAM && touched.RAM && <Tag style={tagStyle}>{errors.RAM}</Tag>}
        <Input
          style={inputBottomMargin}
          name="ROM"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.ROM}
          placeholder='ROM E.g 128GB'
        />
        {errors.ROM && touched.ROM && <Tag style={tagStyle}>{errors.ROM}</Tag>}
        <Button 
          onClick={() => submitForm()} 
          type="submit" 
          disabled={isSubmitting | (touched && !isValid)}>
          Submit
        </Button>
      </form>
    )}
  </Formik>
)

export default AddPhoneForm