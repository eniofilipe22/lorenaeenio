import React, { useContext } from "react";
import "./style.css";
import { CartContext } from "../../../context/cartContext";
import Title from "../../common/title";
import Button from "../../common/button";

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

    const { cart } = useContext(CartContext);
    

    

    const total = Object.values(cart).reduce((prev, curr)=>{
        return prev + (curr.Valor * curr.quantidade)
    },0)

    const onClickEntregar = () => {

        let stringToSend = `Olá, estou te mandando essa mensagem para informar que vou te entregar pessoalmente `;
        stringToSend = stringToSend + generateListPresentsString(cart);

        stringToSend = encodeURI(stringToSend);
        window.open(`https://wa.me//5538988077327?text=${stringToSend}`, "_blank", "noreferrer");
        alert("Sua contribuição significa muito para nós. Sua presença e apoio nos enchem de alegria e gratidão. Muito obrigado por fazer parte deste momento tão significativo em nossas vidas.");
    }

    const onClickPix = () => {
        let stringToSend = `Olá, estou te mandando essa mensagem para informar que vou te presentear com um pix no valor de ${convertToReais(total)} referente à: \n`;
        stringToSend = stringToSend + generateListPresentsString(cart);

        stringToSend = encodeURI(stringToSend);
        window.open(`https://wa.me//5538988077327?text=${stringToSend}`, "_blank", "noreferrer");
        alert("Sua contribuição significa muito para nós. Sua presença e apoio nos enchem de alegria e gratidão. Muito obrigado por fazer parte deste momento tão significativo em nossas vidas.");
    }

    return (<div className="cart-wrapper" onClick={onExit}>
        <div className="cart-content" onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
        }}>
            <div className="cart-fixed-header">
                <Title title={"Cesta de presentes"} />
                <Button onClick={onExit} children={"X"}/>
            </div>
            { total <= 0 ? (<>`${onExit(false)} ${alert("Sua cesta está vazia")}`</>) : 
            (<>
            <p>
            Bem-vindos à nossa cesta de presentes! Para continuar você tem a opção de entregar pessoalmente ou enviar um pix no valor do presente, conforme instruções abaixo.
            
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
                 <span className="total-title">Total:</span>       
                 <span className="total-value">{convertToReais(total)}</span>       
            </div>
            <div className="entregar-pessoalmente">
                <strong>Entregar Pessoalmente</strong>
                <p>
                    Caso seu desejo seja entregar pessoalmente os presentes aos noivos, clique no botão <b>Vou entregar</b> para que envie aos noivos uma mensagem no whatsapp com a lista dos presentes, para que eles possam ser retirados da lista posteriormente
                </p>
                <Button onClick={onClickEntregar} children={"Vou entregar"}/>
            </div>
            <div className="enviar-pix">
                <strong>Enviar pix</strong>
                <p>
                    Caso queira, também pode enviar um pix para os noivos com o valor dos presentes. Clique no botão <b>Vou enviar um PIX</b> para informar os noivos, após isso, envie o pix para a chave <b>celular: 38988077327</b>
                </p>
                <Button onClick={onClickPix} children={"Vou mandar um pix"} />
            </div>
            <p className="agradecimento">
            Sua contribuição significa muito para nós. Sua presença e apoio nos enchem de alegria e gratidão. Muito obrigado por fazer parte deste momento tão significativo em nossas vidas.
            </p>
            </>
            )}
        </div>
    </div >);
};

export default Cart;