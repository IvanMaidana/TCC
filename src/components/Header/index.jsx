
import { Container, Options, Mobile } from "./styles"

import Logo from "../../assets/logo.png"
import { TiThMenu } from "react-icons/ti";
import React, { useState, useEffect } from "react";


export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= 760) {
            setMenuOpen(true);
        }
    });

    return (
        <Container>

            <Mobile>
            <img src={Logo} alt="logo site" />
                <TiThMenu id="iconMenu" size={34} onClick={() => {
                    setMenuOpen(!menuOpen)
                }} />
                
            </Mobile>
            {menuOpen && (
                <Options>
                    <li><a id="" href="">Conteúdo</a></li>
                    <li><a href="">Mapa Mental</a></li>
                </Options>
            )}

        </Container>
    );
};