import { useState } from 'react';
import FormContext from './FormContext';
const FormState=(props)=>{
    const [fields,setFields]=useState([]);
    return (
        <FormContext.Provider value={{fields,setFields}}>
            {props.children}
        </FormContext.Provider>
    )
}
export default FormState;