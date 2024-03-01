import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ParentContext from './Components/ParentContext.jsx';
import { ChakraProvider } from '@chakra-ui/react';
const root = createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
  <ParentContext>

    <App />

  </ParentContext>
  </BrowserRouter>
);
