import './style.css'
import Logo from '../../assets/LogoH.png'
import Button from '../common/button'
import Confirmacao from '../../assets/confirmacao.png'
import Presente from '../../assets/presente.png'
import { Link } from 'react-router-dom'

const Rodape = ({onClickPresents, onClickOCasal}) => {
    return (
        <div className='rodape'>
            <a className='logo' href="#inicio"><img src={Logo} alt="Logo"/></a>
            <div className='buttons'>
                <div className='botao'>
                    <div className='icon'><img src={Confirmacao} alt="confirmacao" /></div>
                    <Button onClick={onClickOCasal}><Link to='/#confirmacao'>Confirmar presença</Link></Button>
                </div>
                <div className='botao'>
                    <div className='icon'><img src={Presente} alt="lisat de presentes" /></div>
                    <Button onClick={onClickPresents}><Link to={"/presentes#presentes"}>Lista de presentes</Link></Button>
                </div>               
            </div>
        </div>
    )
}

export default Rodape