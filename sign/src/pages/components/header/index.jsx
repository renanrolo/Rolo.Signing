import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
    <header className="masthead mb-auto">
        <div className="inner">
            <h3 className="masthead-brand">
                <a href="http://www.renanrolo.com.br">Renan Rolo</a>
            </h3>
            <nav className="nav nav-masthead justify-content-center">
                <NavLink to="/In" activeClassName="active" className="nav-link">Logar</NavLink>
                <NavLink to="/On" activeClassName="active" className="nav-link">Cadastrar</NavLink>
            </nav>
        </div>
    </header>
)

export default Header;