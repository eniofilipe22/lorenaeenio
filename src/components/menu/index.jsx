import { Link, useLocation } from 'react-router-dom'
import './style.css'
import { useEffect, useRef } from 'react';

const Menu = ({
    onClickPresents,
    onClickOCasal
}) => {

    const location = useLocation();
    const lastHash = useRef('');

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

    return (
        <nav className='header'>
            <input type="checkbox" id="menu-hamburguer"/>
            <label htmlFor="menu-hamburguer">
                <div className="menu">
                    <span className="hamburguer"></span>
                </div>
            </label>
            <ul className='itens'>
                <li><Link to={"/#inicio"}>INÍCIO</Link> </li>
                <li onClick={onClickOCasal}><Link to={"/#ocasal"}>O CASAL</Link></li>
                <li onClick={onClickOCasal} ><Link to="/#cerimonia" preventScrollReset={true}>CERIMÔNIA</Link></li>
                <li onClick={onClickPresents}><Link to={"/presentes#presentes"}>LISTA DE PRESENTES</Link></li>
                <li onClick={onClickOCasal} ><Link to={"/#confirmacao"}>CONFIRME SUA PRESENÇA</Link></li>
                <li onClick={onClickOCasal} ><Link to={"/#recados"} preventScrollReset={true}>RECADOS</Link></li>
            </ul>
        </nav>
    )
}

export default Menu