import React, { useContext } from "react";
import "./style.css";
import { CartContext } from "../../../context/cartContext";

const convertToReais = (valor) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);

const generateListPresentsString = (cart) => {
    const list = Object.values(cart).reduce((prev, curr)=>{ 
        return prev + `${curr.quantidade} x ${curr.Presente} \n`
    },"")
    return list;
}

const Cart = ({
    onExit
}) => {

    const { cart } = useContext(CartContext)

    const total = Object.values(cart).reduce((prev, curr)=>{
        return prev + (curr.Valor * curr.quantidade)
    },0)

    const onClickEntregar = () => {

        let stringToSend = `Olá, estou te mandando essa mensagem para informar que vou te presentear esses presentes: \n`;

        stringToSend = stringToSend + generateListPresentsString(cart);

        stringToSend = encodeURI(stringToSend);
        window.open(`https://wa.me//5538988077327?text=${stringToSend}`, "_blank", "noreferrer");
    }

    const onClickPix = () => {
        let stringToSend = `Olá, estou te mandando essa mensagem para informar que vou te presentear com um pix no valor de ${convertToReais(total)} relativo à esses presentes: \n`;
        stringToSend = stringToSend + generateListPresentsString(cart);

        stringToSend = encodeURI(stringToSend);
        window.open(`https://wa.me//5538988077327?text=${stringToSend}`, "_blank", "noreferrer");
    }

    return (<div className="cart-wrapper" onClick={onExit}>
        <div className="cart-content" onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
        }}>
            <div className="cart-fixed-header">
                <span>
                    Cesta de presentes
                </span>
                <button onClick={onExit}>fechar</button>
            </div>
            
            <p>
                Textinho para lista de presentes orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="list-cesta">
                {
                    Object.values(cart).map((value) => (
                        <div className="item-cesta">
                            <span className="item-name">{value.Presente}</span>
                            <span className="item-qtd">{value.quantidade}</span>
                            <span className="item-valor">{convertToReais(value.quantidade * value.Valor)}</span>
                        </div>
                    ))}
            </div>
            <div className="total-content">
                 <span className="total-title">Total</span>       
                 <span className="total-value">{convertToReais(total)}</span>       
            </div>
            <div className="entregar-pessoalmente">
                <span>Entregar Pessoalmente</span>
                <p>
                    Caso seu desejo seja entregar pessoalmente os presentes aos noivos, clique no botão <b>Vou entregar</b> para que envie aos noivos uma mensagem no whatsapp com a lista dos presentes, para que eles possam ser retirados da lista posteriormente
                </p>
                <button onClick={onClickEntregar}>
                    vou entregar
                </button>
            </div>
            <div className="enviar-pix">
                <span>Enviar pix</span>
                <p>
                    Caso queira, também pode enviar um pix para os noivos com o valor dos presentes. Clique no botão <b>Vou enviar um PIX</b> para informar os noivos, após isso, envie o pix para a chave <b>celular: 38988077327</b>
                </p>
                <button onClick={onClickPix}>
                    Vou mandar um pix
                    </button>
            </div>
            <p>
                Textinho de agradecimento orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
    </div >);
};

export default Cart;