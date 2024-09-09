document.getElementById('formulario__cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const mensagemErro = document.getElementById('mensagem__erro');

    mensagemErro.textContent = '';

    if (username === '') {
        mensagemErro.textContent = 'Insira um nome.';
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        mensagemErro.textContent = 'Insira um email válido.';
        return;
    }

    if (password !== confirmPassword) {
        mensagemErro.textContent = 'Digite novamente a mesma senha anterior.';
        return;
    }

    if (password.length < 6) {
        mensagemErro.textContent = 'A senha deve conter no mínimo 6 caracteres';
        return;
    }

    const url = `page-7.html?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`;
    window.location.href = url;
});
