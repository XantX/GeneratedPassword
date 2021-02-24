const random = (Large) => {
  let password = ""
  // Se tiene que verificar que caracteres no se quieren en el password
  for (var i = 0; i < Large; i++) {
    const randomNumber = Math.floor(Math.random() * (126 - 33) + 33);
    const valor = String.fromCharCode(randomNumber);
    password = password + valor;
    console.log(valor, randomNumber);
  }
  console.log(password);
};
random(8);
