import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componentes/App';
import  Navegador  from './componentes/Navegador';
import Modaecologica from './componentes/Modaeco';
import Espacios from './componentes/Espacios';
import Galeria from './componentes/Galeria'
import reportWebVitals from './reportWebVitals';
import Filosofia from './componentes/Filosofia';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
 <React.StrictMode>
<BrowserRouter>
<Navegador />
  
<Routes>
  <Route path ="/" element={<App />}/> 
  <Route path ="/filosofia" element={<Filosofia/>}/> 
  <Route path ="/espacios" element={<Espacios/>}/> 
  <Route path ="/bellezanatural" element={<></>}/> 
  <Route path ="/herbolario" element={<></>}/> 
  <Route path ="/modaecologica" element={<Modaecologica/>}/> 
  <Route path ="/galeria" element={<Galeria/>}/> 
  <Route path ="*" element={<div>Pagina no encontrada - 404</div>}/> 
</Routes>
</BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
