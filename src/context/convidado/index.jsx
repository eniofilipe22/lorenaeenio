import React, { createContext, useEffect, useState } from "react";

export const ConvidadoContext = createContext({
    convidado: null,
    updateConvidado: () => { },
});

export const ConvidadoProvider = ({ children }) => {
    const [convidado, setConvidado] = useState(null);

    const pegaConvidadoDoPathName = () => {
        let possibleConvidadoName = location.pathname.replace('/', '');
        possibleConvidadoName = possibleConvidadoName.replaceAll('_',' ');
        if(possibleConvidadoName.charAt(0)==="#"){
            return;
        }

        setConvidado(possibleConvidadoName);
    }   

    useEffect(()=>{
        pegaConvidadoDoPathName();
    },[])

    const updateConvidado = (name) => {
        
        setConvidado(name);
    };

    return (<ConvidadoContext.Provider value={{ convidado, updateConvidado }}>
        {children}
    </ConvidadoContext.Provider>);
};
