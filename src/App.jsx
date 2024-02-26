import { useContext, useState } from 'react'
import './App.css'
import Menu from "./components/menu"
import Home from "./components/home"
import CountDown from './components/countdown'
import Title from './components/common/title'
import Text from './components/common/text'
import Nos from './assets/Nos(4).png'
import Igreja from './assets/igreja.png'
import Rodape from './components/rodape'
import Presents from './components/presents'
import { CartProvider } from './context/cartContext'
import { ConvidadoContext, ConvidadoProvider } from './context/convidado'
import ConvidadoQuestion from './components/convidado'
import Comentarios from './components/comentarios'
import Confirmacao from './components/confirmacao'
import Content from './components/content'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'

const pages = {
  initial: "initial",
  presents: "presents"
}


function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(pages.initial)

  const { convidado } = useContext(ConvidadoContext);

  const convidadoName = convidado ?? "Convidado";

  const goToPresents = () => {
    setPage(pages.presents);
  }

  const goToInitial = () => {
    setPage(pages.initial);
  }

  return (
    <div className='content-wrapper'>
      
        <div className='inicio'>
          <Menu
            onClickPresents={goToPresents}
            onClickOCasal={goToInitial}
          />
        </div>
        <ConvidadoQuestion />
        <Outlet />
        <Rodape />
        <Footer />
    </div>
  )
}
export default App