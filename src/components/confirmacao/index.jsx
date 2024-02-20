import React, { useState } from "react";
import "./style.css"

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
        <div>
            <div className="line-form">
                <span className="label-form">Nome Completo</span>
                <input onInput={(e) => changeFormData("nome", e.target.value)} value={formData.nome} />
            </div>
            <div className="line-form">
                <span className="label-form">Você irá ao evento?</span>
                <input onInput={(e) => changeFormData("confirm", e.target.value)} />
            </div>
            <div className="line-form">
                <span className="label-form">Quantidade de adultos incluindo você</span>
                <input onInput={(e) => changeFormData("qtdAdulto", e.target.value)} type="number" value={formData.qtdAdulto} />
            </div>
            <div className="line-form">
                <span className="label-form">Quantidade de crianças</span>
                <input onInput={(e) => changeFormData("qtdCriancas", e.target.value)} type="number" value={formData.qtdCriancas} />
            </div>
            <div className="line-form">
                <span className="label-form">Telefone para contato</span>
                <input onInput={(e) => changeFormData("telefone", e.target.value)} value={formData.telefone} />
            </div>
            <div className="line-form">
                <span className="label-form">Observações</span>
                <input onInput={(e) => changeFormData("observacao", e.target.value)} value={formData.observacao} />
            </div>
            <button onClick={enviaConfirmacao}>Confirmar presença</button>
        </div>)
}

export default Confirmacao;