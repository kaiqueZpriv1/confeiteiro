import React from "react";
import Global from "../Global";
import { HeaderC } from "../components/header/HeaderC";
import { HabilidadeC } from "../components/Habilidades/HabilidadeC";
import { ContactC } from "../components/contact/ContactC";

export const Habilidade = () => {
    return(
        <>
            <Global/>
            <HeaderC/>
            <HabilidadeC/>
            <ContactC/>
        </>
    )
}