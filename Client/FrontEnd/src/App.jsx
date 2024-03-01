import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import AllRoutes from "./Components/AllRoutes";



function App() {
  return (
    <>
    <ChakraProvider>
  <AllRoutes></AllRoutes>
  </ChakraProvider>
    </>
  );
}

export default App;
