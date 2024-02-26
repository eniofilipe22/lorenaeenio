import React, { useContext, useMemo } from "react";
import './style.css'
import { CartContext } from "../../../context/cartContext";
import Text from "../../common/text";
import Button from "../../common/button";

const convertToReais = (valor) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);

const Present = ({
    present,
}) => {

    const { cart, updateCart } = useContext(CartContext);


    const presentOnCart = useMemo(() => cart[present.Presente],[cart]);
    

    return (
        <div className="present-wrapper">
            {present.Desbloqueado && (
                <>
                <div className="blocked-content" />
                <span className="text-ja-presenteado">Já presenteado! </span>
                </>
            )}
            <img className="present-image" src={`imagens_presentes/${present["Link imagem"]}`} />
            <Text text={present.Presente} />
            {/* <p className="present-title">{present.Presente}</p> */}     
            <span className="present-value">{convertToReais(present.Valor)}</span>
            {presentOnCart ? 
                (<div className="present-choose">
                    <Button onClick={() => updateCart(presentOnCart, -1)}>-</Button>
                    <span>{presentOnCart.quantidade}</span>
                    <Button onClick={() => updateCart(presentOnCart, 1)}>+</Button>
                </div>) : <Button onClick={() => updateCart(present, 1)} disabled={present.Desbloqueado}>Presentear</Button>}
        </div>
    )
}

export default Present;