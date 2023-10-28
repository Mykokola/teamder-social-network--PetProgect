import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';

const notify = (message:string) => toast(message);
export const createErrorRegForm = (errors:any) => {
    if(errors){
        const errorIndex:string = Object.keys(errors)[0]
        const typeError = {...errors}[errorIndex]
        if(typeError?.message)notify(typeError?.message)
      }
}