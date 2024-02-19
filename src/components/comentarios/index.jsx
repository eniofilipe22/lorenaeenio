import React, { useEffect, useState } from "react";
import "./style.css"

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

    return (<div>{
        comentarios.map((comentario) => (
            <div className="item-comentario">
                <span className="name">{comentario.name}</span>
                <span className="comentario">{comentario["comentário"]}</span>
            </div>
        ))}
        <div className="form-comentario">
            <input value={nome} onInput={(e) => setNome(e.target.value)} />
            <input value={text} onInput={(e) => setText(e.target.value)} />
            <button onClick={enviaComentario}>Enviar</button>
        </div>

    </div>)
};

export default Comentarios;

