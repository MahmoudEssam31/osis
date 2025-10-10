import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Routing from './componant/layout/routers/Router';
import Layout from './componant/layout/Layout';
import CounterProvider from './Hooks/CounterContext';


export default function App() {
  
  return (
      <>
      <CounterProvider>
        
          <RouterProvider router={Routing} />
          </CounterProvider>
      </>
  );
}
