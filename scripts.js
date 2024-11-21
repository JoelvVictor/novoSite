const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkinputs();
});

function checkinputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue == "") {
    setErrorFor(username, "O nome de usuário é obrigatório");
  } else {
    setSuccessFor(username);
  }

  if (emailValue == "") {
    setErrorFor(email, "O email é obrigatório");
  } else if (!isEmailValid(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue == "") {
    setErrorFor(password, "A senha é obrigatória");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha deve conter no mínimo 7 caracteres");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue == "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória");
  } else if (passwordConfirmationValue != passwordValue) {
    setErrorFor(passwordConfirmation, "A senhas não conferem");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

// Funções para definir classes error e success
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adicionar a classe de erro
  formControl.className = "form-control error";

  // Adicionar a mensagem de erro
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  //Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

// Função de validação de e-mail
function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
