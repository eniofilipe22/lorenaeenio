import React, { createContext, useEffect, useState } from "react";

export const ConvidadoContext = createContext({
    convidado: null,
    updateConvidado: () => { },
});

export const ConvidadoProvider = ({ children }) => {
    const [convidado, setConvidado] = useState(null);

    const pegaConvidadoDoPathName = () => {

        const searchParams = new URLSearchParams(location.search);

        let possibleConvidadoName = searchParams.get("name")
        if(!possibleConvidadoName) return null;
        
        possibleConvidadoName = possibleConvidadoName.replaceAll('_',' ');
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
