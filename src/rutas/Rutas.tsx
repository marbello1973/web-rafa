import React from 'react';
import { Route, Routes } from "react-router-dom"
import { About, Contact, Home, Product } from '../vistas';

export const Rutas: React.FC = () => {
  return (
    <div>
        <Routes>          
          <Route path='/acerca' element={< About /> } />
          <Route path='/inicio' element={< Home /> } />
          <Route path='/contacto' element={< Contact /> } />
          <Route path='/productos' element={< Product /> } />
          <Route path='*' element={< Home /> } />
        </Routes>          
      </div>
  )
}



