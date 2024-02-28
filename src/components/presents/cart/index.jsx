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
                <Title title={"Cesta de presentes"} />
                <Button onClick={onExit} children={"X"}/>
            </div>
            
            <p>
            Bem-vindos à nossa cesta de presentes! Este é o lugar onde amigos e familiares podem contribuir para tornar nossos primeiros dias de casados ainda mais especiais. Embora valorizemos imensamente a presença de vocês em nosso dia especial, caso desejem nos presentear de alguma forma, ficaremos imensamente gratos por suas contribuições. Agradecemos desde já o carinho e apoio de cada um de vocês, que fazem parte deste capítulo significativo de nossas vidas.
            </p>
            { total <= 0 ? (
            <>
                Olá! Nossa cesta de presentes está esperando por suas generosas contribuições. No momento, ela está vazia, mas com sua gentileza e carinho, podemos enchê-la de amor e boas lembranças. Agradecemos desde já por fazerem parte deste momento tão especial em nossas vidas.
            </>
            ) : (<>
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
            Obrigado por tornar nosso dia ainda mais especial! Sua generosa contribuição significa muito para nós. Com seu carinho, estamos mais próximos de construir memórias que durarão para sempre. Sua presença e apoio nos enchem de alegria e gratidão. Muito obrigado por fazer parte deste momento tão significativo em nossas vidas
            </p>
            </>
            )}
        </div>
    </div >);
};

export default Cart;