const loginForm = document.querySelector(".login__form");

let tentativas = 0;

loginForm.addEventListener("submit", (event)  => {
    event.preventDefault();

    const emailLogin = document.getElementById("login-email").value.toLowerCase();

    const passwordLogin = document.getElementById("login-pass").value;

    const emailCadastro = localStorage.getItem("email_cadastro");

    const passwordCadastro = localStorage.getItem("senha_cadastro");

     if ( (emailLogin === emailCadastro) && (passwordLogin === passwordCadastro) ) {

        alert("Login realizado com sucesso!");
        window.location.href = "pages/logada.html";

     } else {

        if (emailLogin !== emailCadastro) {
            alert("Email incorreto!")
        } 
        
        if (passwordLogin !== passwordCadastro) {
             alert("Senha incorreta!")
        }

        tentativas++

        alert(`tentativa ${tentativas}/3`)

        if (tentativas === 3 ) {
            alert("Senha bloqueada por excesso de tentativas!");
             window.location.href = "../../pages/recupera.html";
        }
     } 
});

    
