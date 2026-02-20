import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import Admissions from './pages/Admissions'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Gallary from './pages/Gallary'

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element ={<Home />}/>
          <Route path='/about' element ={<About />}/>
          <Route path='/admission' element ={<Admissions />}/>
          <Route path='/blogs' element ={<Blog />}/>
          <Route path='/contact' element ={<Contact />}/>
          <Route path='/gallary' element ={<Gallary />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
