const random = (Large = 8) => {
  let completePassword = "";
  // Se tiene que verificar que caracteres no se quieren en el password
  for (var i = 0; i < Large; i++) {
    const randomNumber = Math.floor(Math.random() * (126 - 32) + 32);
    const charValueOfRandomNumber = String.fromCharCode(randomNumber);
    completePassword = completePassword + charValueOfRandomNumber;
  }
  return completePassword;
};

const label = document.getElementById("NumberCharacters");
label.addEventListener("keypress", (event) => {
  event.preventDefault();
  const codeKey = event.keyCode;
  let valorKey = String.fromCharCode(codeKey);
  let KeyPressed = parseInt(valorKey);
  console.log(KeyPressed);
  if (KeyPressed >= 0) {
    label.value += KeyPressed;
  }
});

// Se tiene que validar los caracteres
function generated() {
  const numberOfCharacters = document.getElementById("NumberCharacters").value;
  const Character = parseInt(numberOfCharacters);
  const passwordResultID = document.getElementById("password");

  if (Character) {
    const passwordComplete = random(Character);
    passwordResultID.textContent = passwordComplete;
  } else {
    const passwordComplete = random();
    passwordResultID.textContent = passwordComplete;
  }
}

function myFunction() {
  // Crea un campo de texto "oculto"
  let aux = document.createElement("input");

  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", document.getElementById("password").innerHTML);

  // Añade el campo a la página
  document.body.appendChild(aux);

  // Selecciona el contenido del campo
  aux.select();

  // Copia el texto seleccionado
  document.execCommand("copy");
  alert("Copied the text: " + aux.value);
  // Elimina el campo de la página
  document.body.removeChild(aux);
}
