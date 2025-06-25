const formCadastro = document.querySelector(".login__form");

formCadastro.addEventListener("submit", (event) => {

    event.preventDefault();

    const emailCadastro = document.getElementById("login-email").value.toLoweerCase();

    localStorage.setItem("email_cadastro", emailCadastro);

    const passwordCadastro = document.getElementById("login-pass").value;

     const passwordCadastroConfirm = document.getElementById("login-pass-confirm").value;
  
     if (passwordCadastro === passwordCadastroConfirm) {
        alert("cadastro realizado com sucesso!");
        localStorage.setItem("senha_cadastro", passwordCadastro);
        window.location.href = "../index.html";
     } else {
        alert("senha diferente ou incorreta!");
     }
     
})