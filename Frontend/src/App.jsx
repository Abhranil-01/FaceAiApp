
// import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Navbar,Home,Features,PaymentPlan,AboutMe,ContactMe,Footer} from './Components/index.js'


function App() {


  return (
    <>
     <Navbar/>
     <Home/>
     <Features/>
     <AboutMe/>

     <PaymentPlan/>
  
     <Footer/>

    </>
  )
}

export default App
