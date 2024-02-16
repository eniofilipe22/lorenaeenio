import React from 'react'
import './style.css'
import Logo from '../../assets/LogoH.png'
import Button from '../common/button'
import Confirmacao from '../../assets/confirmacao.png'
import Presente from '../../assets/presente.png'

const Rodape = () => {
    return (
        <div className='rodape'>
            <img src={Logo} alt="Logo" className='logo'/>
            <div className='buttons'>
                <div className='botao'>
                    <div className='icon'><img src={Confirmacao} alt="confirmacao" /></div>
                    <Button>Confirmar presença</Button>
                </div>
                <div className='botao'>
                    <div className='icon'><img src={Presente} alt="lisat de presentes" /></div>
                    <Button>Lista de presentes</Button>
                </div>               
            </div>
        </div>
    )
}

export default Rodape