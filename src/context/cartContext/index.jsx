import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cart: {},
    updateCart: () => { },
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const updateCart = (present, qtdToAdd) => {
        
        setCart((prevState) => {
            if(!present.quantidade){
                return {
                    ...prevState, [present.Presente]: {...present, quantidade: 1}     
                }
            }
            if((present.quantidade + qtdToAdd) === 0){
                delete prevState[present.Presente];
                return {...prevState};
            }

            return { ...prevState, [present.Presente]: { ...present, quantidade: present.quantidade + qtdToAdd} };
        });
    };

    return (<CartContext.Provider value={{ cart, updateCart }}>
        {children}
    </CartContext.Provider>);
};