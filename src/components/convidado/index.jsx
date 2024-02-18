import React, { useState } from "react";
import { useContext } from "react";
import { ConvidadoContext } from "../../context/convidado";
import "./style.css";

const ConvidadoQuestion = () => {

    const [convidadoInput, setConvidadoInput] = useState(null);

    const { convidado , updateConvidado} = useContext(ConvidadoContext);

    if(convidado) return null;


    const enviaNome = () => {
        if(convidadoInput !== null && convidadoInput !== "" && convidadoInput !== " "){
            updateConvidado(convidadoInput);
        }
    }

    return (
        <div className="modal-wrapper-nome-convidado">
            <div className="modal-content-nome-convidado">
                <h1>Diga-nos seu nome para que os noivos possam saber</h1>
                <input value={convidadoInput} onInput={(e) => setConvidadoInput(e.target.value)}/>
                <button onClick={enviaNome}>Enviar</button>
            </div>
        </div>
    )

}

export default ConvidadoQuestion;