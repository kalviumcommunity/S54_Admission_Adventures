import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, Fade } from '@chakra-ui/react';

import AllRoutes from "./Components/AllRoutes";
import { AppContext } from "./Components/ParentContext";



function App() {
  const {login, setLogin}=useContext(AppContext)
  useEffect(()=>{
    let data=localStorage.getItem("isLoggedIn")
    if(data=="true"){
      setLogin(true)
    }else{
      setLogin(false)

    }
  },[])

  return (
    <>
    <ChakraProvider>
  <AllRoutes></AllRoutes>
  </ChakraProvider>
    </>
  );
}

export default App;
