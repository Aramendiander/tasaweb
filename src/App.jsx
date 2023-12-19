import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation, useLoaderData, Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';

// https://dpf0.pythonanywhere.com/predict
function App() {



  return (
    <>
      <div>
        <Menu />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
