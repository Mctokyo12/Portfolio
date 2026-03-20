import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Abous_Us from './Pages/Abous_Us'
import Services from './Pages/Services'

function App() {
  

  return (
    <>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<Abous_Us/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </>
  )
}

export default App
