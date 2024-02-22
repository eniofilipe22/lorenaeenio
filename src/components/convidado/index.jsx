import React, { useState } from "react";
import { useContext } from "react";
import { ConvidadoContext } from "../../context/convidado";
import "./style.css";
import Button from "../common/button";
import Title from "../common/title";

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
                <Title title={"Diga-nos seu nome para que os noivos possam saber"} />
                <input value={convidadoInput} onInput={(e) => setConvidadoInput(e.target.value)}/>
                <Button onClick={enviaNome} children={"Enviar"} />
            </div>
        </div>
    )

}

export default ConvidadoQuestion;