import React, { useState } from "react";
import listPresents from "../../assets/listPresents.json";
import Present from "./present";
import './style.css'
import Cart from "./cart";

const Presents = () => {
    const [openCesta, setOpenCesta] = useState(false);

    return (
        <div className="presents-page">
            {openCesta && <Cart onExit={() => setOpenCesta(false)}/>}
            <button className="cart-button" onClick={()=> setOpenCesta(true)}>Carrinho</button>
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