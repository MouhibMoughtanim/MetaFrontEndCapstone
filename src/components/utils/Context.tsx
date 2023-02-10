import { createContext,useContext,useState } from "react";
import { useReducer } from 'react';
import { initialState,reducer } from './reducer';

export const FormContext = createContext(undefined);

export const FormProvider =({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleInputChange = (e: { target: { value: number|string| string[]; name: any; }; }) => {
       console.log(e.target.value)
       dispatch({
         type: e.target.name,
         value: e.target.value
       }); 
     }
    return <FormContext.Provider value={{state , handleInputChange}}>{children}</FormContext.Provider>
};
