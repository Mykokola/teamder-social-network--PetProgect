import React from "react";
import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  login:yup.string().min(5).max(15).required(),
  name: yup.string().min(2).max(10).required(),
  surName:yup.string().min(2).max(20).required(),
  city:yup.string().min(5).max(15).required(),
  age:yup.number().min(15).max(90).required(),
});
export type FormErrors = {
  email?: string;
  password?: string;
  login?: string;
  name?: string;
  surName?: string;
  city?: string;
  age?: number;
  
}