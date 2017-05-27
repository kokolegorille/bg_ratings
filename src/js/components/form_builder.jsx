// Simple template for redux-form :
//
// 1. import { renderField } from '../FormBuilder';
// 2. <Field name='name' component={renderField} ... />

import React from 'react';

export const renderField = ({ input, label, type, meta: { touched, error }}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);