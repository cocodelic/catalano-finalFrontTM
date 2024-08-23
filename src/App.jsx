import { useState } from 'react'
import { useGlobalContext } from './GlobalContext'
import { Outlet } from 'react-router-dom'
import { EntornosContextProvider } from './EntornosContext'

import Login from './paginas/Login'

function App() {
  const { usuarioActivo } = useGlobalContext()
  return (
    <EntornosContextProvider>
      {usuarioActivo ?  <Outlet /> : <Login />}
    </EntornosContextProvider>
  )
}

export default App
