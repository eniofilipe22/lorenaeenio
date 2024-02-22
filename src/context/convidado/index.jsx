import React, { createContext, useEffect, useState } from "react";

export const ConvidadoContext = createContext({
    convidado: null,
    updateConvidado: () => { },
});

export const ConvidadoProvider = ({ children }) => {
    const [convidado, setConvidado] = useState(null);

    const tentaResgatarDoLocal = () => {
        const possibleConvidadoName = localStorage.getItem("convidado");
        if(!possibleConvidadoName) return null;

        setConvidado(possibleConvidadoName);
        return null;
    }

    const pegaConvidadoDoPathName = () => {

        const searchParams = new URLSearchParams(location.search);

        let possibleConvidadoName = searchParams.get("name")
        if(!possibleConvidadoName) return tentaResgatarDoLocal();
        
        possibleConvidadoName = possibleConvidadoName.replaceAll('_',' ');
        setConvidado(possibleConvidadoName);
        localStorage.setItem('convidado', possibleConvidadoName);
    }   

    useEffect(()=>{
        pegaConvidadoDoPathName();
    },[])

    const updateConvidado = (name) => {
        
        setConvidado(name);
        localStorage.setItem('convidado', name);
    };

    return (<ConvidadoContext.Provider value={{ convidado, updateConvidado }}>
        {children}
    </ConvidadoContext.Provider>);
};
