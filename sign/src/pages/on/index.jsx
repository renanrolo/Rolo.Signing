import React, { useState } from 'react';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import api from '../../services/api'
import { setUser } from '../../services'

const On = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const onChangeEmail = e => setEmail(e.target.value);
    const onChangeSenha = e => setSenha(e.target.value);
    const onChangeConfirmarSenha = e => setConfirmarSenha(e.target.value);

    const usuarioCadastrou = (data) => {
        const user = {
            email: data.email,
            token: data.accessToken,
            create: data.create,
            expiration: data.expiration
        }

        setUser(user);
    }

    const enviarCadastro = () => {
        api.post("/Register", { "Email": email, "Senha": senha, "ConfirmacaoSenha": confirmarSenha })
            .then((response) => {
                usuarioCadastrou(response.data.body)
            })
            .catch(e => {
                if (e.response && e.response.data && e.response.data.errors) {
                    e.response.data.errors.map((erro) => toastr.error(erro))
                }
                else {
                    toastr.error("", "Indisponível")
                }
            });
    }

    return (
        <aside className="">
            <div className="card">
                <article className="card-body">
                    <h4 className="card-title text-center mb-4 mt-1">Cadastrar</h4>
                    <hr />
                    <p className="text-success text-center">Informe um E-mail válido</p>
                    <form>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user">E</i> </span>
                                </div>
                                <input
                                    value={email}
                                    onChange={onChangeEmail}
                                    name=""
                                    className="form-control"
                                    placeholder="Email or login"
                                    type="email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock">S</i> </span>
                                </div>
                                <input
                                    value={senha}
                                    onChange={onChangeSenha}
                                    className="form-control"
                                    placeholder="Senha"
                                    type="password"
                                    autoComplete="false"
                                />
                            </div>

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock">S</i> </span>
                                </div>
                                <input
                                    value={confirmarSenha}
                                    onChange={onChangeConfirmarSenha}
                                    className="form-control"
                                    placeholder="Confirmar Senha"
                                    type="password"
                                    autoComplete="false"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <button
                                onClick={enviarCadastro}
                                type="button"
                                className="btn btn-primary btn-block">Enviar Cadastro</button>
                        </div>
                    </form>
                </article>
            </div>

        </aside>
    );
}

export default On;