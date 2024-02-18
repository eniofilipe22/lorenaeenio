import React, { useContext, useMemo } from "react";
import './style.css'
import { CartContext } from "../../../context/cartContext";

const convertToReais = (valor) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);

const Present = ({
    present,
}) => {

    const { cart, updateCart } = useContext(CartContext);


    const presentOnCart = useMemo(() => cart[present.Presente],[cart]);
  

    return (
        <div className="present-wrapper">
            <img className="present-image" src={`imagens_presentes/${present["Link imagem"]}`} />
            <p className="present-title">{present.Presente}</p>
            <span className="present-value">{convertToReais(present.Valor)}</span>
            {presentOnCart ? 
                (<div className="present-choose">
                    <button onClick={() => updateCart(presentOnCart, 1)}>+</button>
                    <span>{presentOnCart.quantidade}</span>
                    <button onClick={() => updateCart(presentOnCart, -1)}>-</button>
                </div>) : <button onClick={() => updateCart(present, 1)}>Presentear</button>}
        </div>
    )
}

export default Present;