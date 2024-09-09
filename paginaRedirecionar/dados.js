function exibeMensagem() {
    return "Usuário registrado com sucesso! "
}

const userInfo = exibeMensagem();
document.getElementById('userInfo').textContent = `${userInfo}`;