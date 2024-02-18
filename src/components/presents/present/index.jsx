import React from "react";
import './style.css'

const convertToReais = (valor) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);

const Present = ({
    present,
    onAdd,
    onRemove,
    state
}) => {

    return (
        <div className="present-wrapper">
            <img className="present-image" src={`imagens_presentes/${present["Link imagem"]}`} />
            <p className="present-title">{present.Presente}</p>
            <span className="present-value">{convertToReais(present.Valor)}</span>
            {state ? (<> </>) : <button onClick={() => onAdd(present.Presente)}>Presentear</button>}
        </div>
    )
}

export default Present;