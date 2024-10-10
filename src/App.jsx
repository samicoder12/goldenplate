import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import About from './pages/About'
import Reservation from './pages/Reservation'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div className='w-full relative overflow-hidden'>
      <div className="w-full container">
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      
      
    </div>
  )
}

export default App