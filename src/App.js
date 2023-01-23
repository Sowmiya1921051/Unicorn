import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Main from './components/Main'
import Submain from './components/Submain'


function App() {
  return (
    <div>
     <Nav/>
      {/* <Main/> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/:Id" element={<Submain/>} />
      <Route path="*" element={<h1>404 page not found...!</h1>} />
      </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App