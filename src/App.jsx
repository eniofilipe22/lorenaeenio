// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Menu from "./components/menu"
import Home from "./components/home"
import CountDown from './components/countdown'
import Title from './components/common/title'
import Text from './components/common/text'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='inicio'>
        <Menu />
        <Home />
      </div>
        <CountDown />
        <div className='convite'>
          <Title title={"Nome do convidado"}/>
          <div className='texto'>
            <Text text={"Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento. Estamos muito felizes e contamos com a presença de todos no nosso grande dia!"} />
            <Text text={"É importante confirmar sua presença. Para isto contamos com sua ajuda clicando no menu “Confirme sua Presença” e preenchendo os dados necessários. Para nos presentear, escolha qualquer item da Lista de Casamento, seja um item de algum dos sites, lojas físicas, ou então vocês podem utilizar a opção de cotas. Fiquem à vontade!"} />
            <Text strong={"Aguardamos vocês no nosso grande dia!"} />
          </div>
        </div>
    </>
  )
}

export default App
