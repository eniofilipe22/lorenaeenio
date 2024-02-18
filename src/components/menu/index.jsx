import './style.css'

const Menu = ({
    onClickPresents,
    onClickOCasal
}) => {
    return (
        <nav className='header'>
            <input type="checkbox" id="menu-hamburguer" />
            <label htmlFor="menu-hamburguer">
                <div className="menu">
                    <span className="hamburguer"></span>
                </div>
            </label>
            <ul className='itens'>
                <li onClick={onClickOCasal}><a href="#ocasal">O CASAL</a></li>
                <li><a href="#cerimonia">CERIMÔNIA</a></li>
                <li onClick={onClickPresents}><a href="#lista-presentes">LISTA DE PRESENTES</a></li>
                <li><a href="#confirme-presença">CONFIRME SUA PRESENÇA</a></li>
                <li><a href="#recados">RECADOS</a></li>
            </ul>
        </nav>
    )
}

export default Menu