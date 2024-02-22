import './style.css'
import Logo from '../../assets/LogoH.png'
import Button from '../common/button'
import Confirmacao from '../../assets/confirmacao.png'
import Presente from '../../assets/presente.png'

const Rodape = ({onClickPresents, onClickOCasal}) => {
    return (
        <div className='rodape'>
            <a className='logo' href="#inicio"><img src={Logo} alt="Logo"/></a>
            <div className='buttons'>
                <div className='botao'>
                    <div className='icon'><img src={Confirmacao} alt="confirmacao" /></div>
                    <Button onClick={onClickOCasal}><a href='#confirmacao'>Confirmar presença</a></Button>
                </div>
                <div className='botao'>
                    <div className='icon'><img src={Presente} alt="lisat de presentes" /></div>
                    <Button onClick={onClickPresents}><a href="#presentes">Lista de presentes</a></Button>
                </div>               
            </div>
        </div>
    )
}

export default Rodape