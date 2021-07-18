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
    if (checkLocalStorage() == true) {
        alert("Você já está cadastrado no Local Storage!!!!!");
    } else {
        let data = {
            nome,
            email,
        }

        let convertData = JSON.stringify(data);

        localStorage.setItem('usuario', convertData);

        alert("Nós informaremos as novas ofertas, Obrigado por se Cadastrar!");
    }

    function checkLocalStorage() {
        try {
            if (JSON.parse(localStorage.getItem('usuario')).email == email) {
                return true;
            }
        } catch {
            return false
        }
    }
});

countdown("Aug 5, 2021 23:59:59", "countdown01");
countdown("Aug 5, 2021 23:59:59", "countdown02");
countdown("Aug 5, 2021 23:59:59", "countdown03");
countdown("Aug 5, 2021 23:59:59", "countdown04");
countdown("Aug 5, 2021 23:59:59", "countdown05");

function countdown(end, id) {
    var countDownDate = new Date(end).getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(id).innerHTML = days + "D " + hours + ":" +
            minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById(id).innerHTML = "EXPIRED";
        }
    }, 1000);
}