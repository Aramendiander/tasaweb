import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation, useLoaderData, Outlet } from 'react-router-dom';
import Menu from './components/Menu';

// https://dpf0.pythonanywhere.com/predict
function App() {



  return (
    <>
      <div>
        <Menu />
        <Outlet />
      </div>
    </>
  )
}

export default App
