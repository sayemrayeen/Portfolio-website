import React from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Footer />
    </div>
  )
}

export default App
