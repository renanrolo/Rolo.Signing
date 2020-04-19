import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <p className="lead">
                Entrar com suas credenciais
            </p>

            <p className="lead">
                <Link to="In" className="btn btn-lg btn-secondary">Logar</Link>
            </p>

            <br />

            <p className="lead">
                Crie uma conta gratuita
            </p>

            <p className="lead">
                <Link to="On" className="btn btn-lg btn-secondary">Cadastrar</Link>
            </p>
        </div>
    );
}

export default Home;