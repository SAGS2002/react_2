import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Inicio from './pages/Inicio'
import Deporte from './pages/Deporte'
import Laptop from './pages/Laptop'
import Movil from './pages/Movil'
import Login from "./pages/Login"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Header/>
            <main>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/Deporte" element={<Deporte/>} />
                <Route path="/Laptop" element={<Laptop/>} />
                <Route path="/Movil" element={<Movil/>} />
                <Route path="/Login" element={<Login/>} />

            </Routes>
            </main>
        </BrowserRouter>
    </>
  )
}

export default App
