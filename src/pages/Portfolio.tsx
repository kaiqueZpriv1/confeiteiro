import React from "react";
import Global from "../Global";
import { HeaderC } from "../components/header/HeaderC";
import { PortfolioC } from "../components/portfolio/PortfolioC";
import { ContactC } from "../components/contact/ContactC";

export const Portfolio = () => {
    return(
        <>
            <Global/>
            <HeaderC/>
            <PortfolioC/>
            <ContactC/>
        </>
    )
}