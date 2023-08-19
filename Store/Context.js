import {createContext,useContext,useState} from 'react';
import View from 'react-native'

export const context=createContext();
export default function Store(props) {
const [data,setdata]=useState([]);

return (

<context.Provider  value={{data,setdata}}>{props.children}</context.Provider>
);


}