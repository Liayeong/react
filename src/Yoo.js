import React from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import Header from './components/Yooyoungkuk/Header'
import Footer from './components/Yooyoungkuk/Footer'
import Archives from './components/Yooyoungkuk/Archives'
import Foundation from './components/Yooyoungkuk/Foundation'
import Yooyoungkuk from './components/Yooyoungkuk/Yooyoungkuk'

const Yoo = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Yooyoungkuk/>}/>
        <Route path='./archives' element={<Archives/>}/>
        <Route path='./foundation' element={<Foundation/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default Yoo
