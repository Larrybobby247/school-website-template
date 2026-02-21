import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Admissions from './pages/Admissions'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Gallary from './pages/Gallary'
import BlogContent from './BlogContent'

function App() {

  return (
    <Router>
      <div className='overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path='/' element ={<Home />}/>
          <Route path='/about' element ={<About />}/>
          <Route path='/admission' element ={<Admissions />}/>
          <Route path='/blogs' element ={<Blog />}/>
          <Route path='/blogs/:name' element ={<BlogContent />}/>
          <Route path='/contact' element ={<Contact />}/>
          <Route path='/gallary' element ={<Gallary />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
