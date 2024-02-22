import React, { useEffect, useState } from "react";
import "./style.css"
import Title from "../common/title";
import Button from "../common/button";

const Comentarios = () => {

    const [comentarios, setComentarios] = useState([]);

    const [nome, setNome] = useState(null);
    const [text, setText] = useState(null);

    const getComentarios = async () => {
        fetch('https://casamento-ca9b.restdb.io/rest/comentarios', {
            headers: {
                "x-apikey": "65d38951a1d768826c031098",
            },
            method: "GET"
        })
            .then(async data => {
                const datajson = await data.json();
                console.log(datajson)
                setComentarios(datajson);
            })
            .catch((e) => console.log(e))
            .finally(e => console.log("finalizou"))
    }

    useEffect(() => {
        getComentarios();
    }, [])

    const enviaComentario = async () => {
        if (nome !== null && text !== null) {
            fetch('https://casamento-ca9b.restdb.io/rest/comentarios', {
                headers: {
                    "x-apikey": "65d38951a1d768826c031098",
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    "name": nome,
                    "comentário": text
                }),
                method: "POST"
            })
                .then(async data => {
                    await getComentarios();
                })
        }
    }

    return (<div className="recados">
        <Title title="Deixe seu recado"/>
        <div className="form-comentario">
            <label className="label-comentario" htmlFor="nome">Seu nome</label>
            <input className="input-comentario" id="nome" value={nome} onInput={(e) => setNome(e.target.value)} required/>
            <label className="label-comentario" htmlFor="text">Recado</label>
            <textarea className="input-comentario" id="text" value={text} onInput={(e) => setText(e.target.value)} />
            <Button onClick={enviaComentario} children="Enviar recado"/>
        </div>
        {
        comentarios.map((comentario) => (
            <div className="comentarios">
                <li className="item-comentario">
                    <h3 className="name">{comentario.name}</h3>
                    <span className="comentario">{comentario["comentário"]}</span>
                </li>
            </div>
        ))}
    </div>)
};

export default Comentarios;

