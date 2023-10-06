import React from "react";
import * as yup from "yup";
export const schema = yup.object().shape({
    bio:yup.string().min(20).max(150).required(),
    socialOne:yup
    .string()
    .url('Invalid URL format')
    .required('Website URL is required'),
    socialTwo:yup
    .string()
    .url('Invalid URL format'),
    socialFree:yup
    .string()
    .url('Invalid URL format'),
  });
  export interface FormErrors {
    bio:string
    socialOne:string
    socialTwo?:string|undefined
    socialFree?:string|undefined
  }