import { useState } from 'react'
import './App.css'
import Menu from "./components/menu"
import Home from "./components/home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='inicio'>
        <Menu />
        <Home />
      </div>
    </>
  )
}
export default App