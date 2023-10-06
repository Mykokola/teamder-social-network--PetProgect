import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const notify = (message:string) => toast(message);
export const createErrorRegForm = (errors:any) => {
    if(errors){
        const errorIndex:string = Object.keys(errors)[0]
        const typeError = {...errors}[errorIndex]
        if(typeError?.message)notify(typeError?.message)
      }
}