import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Inicio from './paginas/Inicio.jsx'
import Login from './paginas/Login.jsx';
import RutaProtegida from './paginas/RutaProtegida.jsx';

import { GlobalContextProvider } from './GlobalContext.jsx'
const Rutas = createBrowserRouter([
  {
    path: '/',
    element: <RutaProtegida/>,
    children: [
      { path: "/", element: <Inicio/>},
      { path: "/entorno/:entornoId", element: <Inicio/>},
      { path: "/entorno/:entornoId/canal/:canalId", element: <Inicio/>},
    ]
  }, {
    path: '/login',
    element: <Login/>,
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={Rutas}></RouterProvider>
    </GlobalContextProvider>

  </StrictMode>
)
