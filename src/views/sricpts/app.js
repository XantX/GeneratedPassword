const random = (Large) => {
  let completePassword = "";
  // Se tiene que verificar que caracteres no se quieren en el password
  for (var i = 0; i < Large; i++) {
    const randomNumber = Math.floor(Math.random() * (126 - 33) + 33);
    const charValueOfRandomNumber = String.fromCharCode(randomNumber);
    completePassword = completePassword + charValueOfRandomNumber;
    console.log(charValueOfRandomNumber, randomNumber);
  }
  return completePassword;
};

const label = document.getElementById("NumberCharacters");
label.addEventListener("keypress", (event) => {
  event.preventDefault();
  let codeKey = event.keyCode;
  let valorKey = String.fromCharCode(codeKey);
  let KeyPressed = parseInt(valorKey);
  if (KeyPressed) {
    label.value += KeyPressed;
  }
});
// Se tiene que validar los caracteres
function generated() {
  const numberOfCharacters = document.getElementById("NumberCharacters").value;
  const Character = parseInt(numberOfCharacters);
  if (Character) {
    const passwordComplete = random(Character);
    const passwordResultID = document.getElementById("password");
    passwordResultID.textContent = passwordComplete;
  }
}
