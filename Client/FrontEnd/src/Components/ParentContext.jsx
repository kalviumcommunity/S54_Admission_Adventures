import React, {createContext, useState} from "react"
export const AppContext=createContext()


const ParentContext=({children}) =>{ 
  const [id,setId]=useState("")
  const [update,setUpdate]=useState(false)
  const [login,setLogin]=useState(false)
  return <AppContext.Provider value={{login,setUpdate,update,setLogin,id,setId}}>
  
    {children}
      
 </AppContext.Provider>
  
}

export default ParentContext;
