import React, { useState } from "react";
import "./style.css"
import Title from "../common/title";
import Button from "../common/button";

const Confirmacao = () => {

    const [formData, setFormData] = useState({
        nome: null,
        confirm: null,
        qtdAdulto: 1,
        qtdCriancas: 0,
        telefone: null,
        observacao: null
    })


    const changeFormData = (item, value) => {
        console.log(value);
        setFormData((prevState) => ({ ...prevState, [item]: value }))
    }

    const enviaConfirmacao = async () => {
        if (formData.nome !== null && formData.nome !== "") {
            fetch('https://casamento-ca9b.restdb.io/rest/confirmacao', {
                headers: {
                    "x-apikey": "65d38951a1d768826c031098",
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData),
                method: "POST"
            }).then( data => {
                    setFormData({
                        nome: "",
                        confirm: "",
                        qtdAdulto: 1,
                        qtdCriancas: 0,
                        telefone: "",
                        observacao: ""
                    });
                    alert("Confirmação enviada!");
                })
        }
    }

    return (
        <div className="confirmacao">
            <Title title="Confirme sua presença" />
            <div className="form-confirmacao">
            <div className="line-form">
                <label htmlFor="nome" className="label-form">Nome Completo</label>
                <input className="input-confirmacao" id="nome" onInput={(e) => changeFormData("nome", e.target.value)} value={formData.nome} required/>
            </div>
            <div className="line-form">
                <span className="label-form">Você irá ao evento?</span>
                <div className="input-confirmacao radio" >
                    <input id="sim" type="radio" name="boolean" onInput={(e) => changeFormData("confirm", "Sim")} />
                    <label htmlFor="sim">Sim</label>
                    <input id="nao" type="radio" name="boolean" onInput={(e) => changeFormData("confirm", "Nao")}></input>
                    <label htmlFor="nao">Não</label>
                </div>
            </div>
            <div className="line-form">
                <label htmlFor="adultos" className="label-form">Quantidade de adultos<br></br>incluindo você</label>
                <input className="input-confirmacao qtd" id="adultos" onInput={(e) => changeFormData("qtdAdulto", e.target.value)} type="number" value={formData.qtdAdulto} />
            </div>
            <div className="line-form">
                <label htmlFor="crianca" className="label-form">Quantidade de crianças</label>
                <input className="input-confirmacao qtd" id="crianca" onInput={(e) => changeFormData("qtdCriancas", e.target.value)} type="number" value={formData.qtdCriancas} />
            </div>
            <div className="line-form">
                <label htmlFor="contato" className="label-form">Telefone para contato</label>
                <input className="input-confirmacao" id="contato" onInput={(e) => changeFormData("telefone", e.target.value)} value={formData.telefone} />
            </div>
            <div className="line-form">
                <label htmlFor="observacao" className="label-form">Observações</label>
                <textarea className="input-confirmacao" id="observacao" onInput={(e) => changeFormData("observacao", e.target.value)} value={formData.observacao} />
            </div>
            <Button onClick={enviaConfirmacao} children={"Confirmar presença"}/>
            </div>
        </div>)
}

export default Confirmacao;