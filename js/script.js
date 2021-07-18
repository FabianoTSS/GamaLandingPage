const cadastro = document.getElementById('cadastro')

cadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    if (email == null || email == "" || nome == null || nome == "") {
        alert("Nome ou Email vazio ou inválido.");
    } else
    if (!email.includes("@")) {
        alert("Email inválido.");
    } else
    if (JSON.parse(localStorage.getItem('usuario')).email == email) {
        alert("Você já está cadastrado no Local Storage!!!!!.");
    } else {
        let data = {
            nome,
            email,
        }

        console.log(data);

        let convertData = JSON.stringify(data);

        localStorage.setItem('usuario', convertData);

        alert("Nós informaremos as novas ofertas, Obrigado por se Cadastrar!");
    }
})