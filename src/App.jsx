import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeMain from './Components/HomeMain'
import Navbar from './Components/Navbar'
import FooterSection from './Components/FooterSection'
import Abouty from './Pages/Abouty'
import Contacty from './Pages/Contacty'
import BlogHeader from './Pages/BlogHeader'
import BlogDetailHeader from './Pages/BlogDetailHeader'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<Abouty />} />
        <Route path="/contact" element={<Contacty />} />
        <Route path="/blogs" element={<BlogHeader />} />
        <Route path="/blog/:id" element={<BlogDetailHeader />} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App
