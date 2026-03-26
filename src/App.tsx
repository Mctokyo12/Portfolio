import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Abous_Us from './Pages/Abous_Us'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Contacts from './Pages/Contacts'

function App() {
  

  return (
    <>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<Abous_Us/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>
    </>
  )
}

export default App
