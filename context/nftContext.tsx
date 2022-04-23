import React, { createContext } from "react";
import {initialState} from '../components/reducer'

 const Context = createContext<any>(initialState);

 export default Context;