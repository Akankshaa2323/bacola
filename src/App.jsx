import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}></Route>
        </Routes>
      </Header>
      </BrowserRouter>
     
    </>
  )
}

export default App
