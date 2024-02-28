import React, { useState } from "react";
import listPresents from "../../assets/listPresents.json";
import Present from "./present";
import './style.css'
import Cart from "./cart";
import Title from "../common/title";
import Text from "../common/text";
import Rodape from "../rodape";
import Button from "../common/button";
import Carrinho from "../../assets/carrinho.png"

const Presents = () => {
    const [openCesta, setOpenCesta] = useState(false);

    return (
        <div className="presents-page" id="presentes">
            {openCesta && <Cart onExit={() => setOpenCesta(false)}/>}
            <Button className="cart-button" onClick={()=> setOpenCesta(true)} children={ <img src={Carrinho} alt="Carrinho" /> }></Button>
            <Title title={"Lista de presentes"} />
            <Text text={"Dê uma olhada na nossa lista de presentes! Cada escolha é um gesto de carinho que aquece nossos corações. Agradecemos por fazerem parte deste momento especial conosco. Sintam-se à vontade para explorar e compartilhar conosco este capítulo de nossas vidas. Obrigado por estarem aqui, sua presença significa muito para nós!"} />
            <div className="presents-content">
                {
                    listPresents.map((present, index) => (
                        <>
                            <Present key={`${index}-${present.Presente}`} present={present} />
                        </>
                    ))
                }
            </div>
        </div>
    );
}

export default Presents;