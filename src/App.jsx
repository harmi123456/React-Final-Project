import React, { useState } from 'react'
import Home from './Portfolio/Home'
import Sec1 from './Portfolio/Sec1'
import Sec2 from './Portfolio/Sec2'
import Sec3 from './Portfolio/Sec3'
import Sec4 from './Portfolio/Sec4'
import Sec5 from './Sec5'
import Sec6 from './Sec6'
import Sec7 from './Sec7'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  const [activeSection, setActiveSection] = useState('profile');
  
  return (
    <div>
      <Home/>
      <Sec1/>
      <Sec3/>
      <Sec2/>
      <Sec4/>
      <Sec5/>
      <Sec6/>
      <Sec7/>

    </div>
  )
}
