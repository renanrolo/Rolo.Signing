const key = process.env.REACT_APP_LOCAL_AUTH_KEY;

export function setUser(user) {
    //Salvar no LocalStorage do navegador o usuario (é nele que está o token)
    localStorage.setItem(key, JSON.stringify(user));

    //Redirecionar para a url informada via parametro 'redirectto', se não, redirecionar para a home page
    const redirect = getRedirectToUrl() ?? "http://renanrolo.com.br";
    window.location = redirect;
}

export function getRedirectToUrl() {
    const search = new URLSearchParams(window.location.search);
    return search.get('redirectto');
}