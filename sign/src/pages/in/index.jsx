import React, { useState } from 'react';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import api from '../../services/api'
import { setUser } from '../../services'

const In = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const onChangeEmail = (event) => setEmail(event.target.value);
    const onChangeSenha = (event) => setSenha(event.target.value);

    const usuarioLogou = (data) => {
        const user = {
            email: data.email,
            token: data.accessToken,
            create: data.create,
            expiration: data.expiration
        }

        setUser(user);
    }

    const EnviarLogin = () => {
        api.post("/Login", { "Email": email, "Senha": senha })
            .then((response) => {
                usuarioLogou(response.data.body)
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
        <main role="main" className="inner cover">
            <aside className="">
                <div className="card">
                    <article className="card-body">
                        <h4 className="card-title mb-4 mt-1">Logar</h4>
                        <form className="text-left">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    value={email}
                                    onChange={onChangeEmail}
                                    name=""
                                    className="form-control"
                                    placeholder="Email"
                                    type="email" />
                            </div>
                            <div className="form-group">
                                {/* <a className="float-right" href="#">Forgot?</a> */}
                                <label>Senha</label>
                                <input
                                    value={senha}
                                    onChange={onChangeSenha}
                                    className="form-control"
                                    placeholder="******"
                                    autoComplete="false"
                                    type="password" />
                            </div>
                            {/* <div className="form-group">
                                    <div className="checkbox">
                                        <label> <input type="checkbox" /> Save password </label>
                                    </div>
                                </div> */}
                            <div className="form-group">
                                <button
                                    type="button"
                                    onClick={e => EnviarLogin()}
                                    className="btn btn-primary btn-block">Login</button>
                            </div>
                        </form>
                    </article>
                </div>

            </aside>

        </main>
    );
}

export default In;