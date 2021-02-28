const random = (Large) => {
  let completePassword = ""
  // Se tiene que verificar que caracteres no se quieren en el password
  for (var i = 0; i < Large; i++) {
    const randomNumber = Math.floor(Math.random() * (126 - 33) + 33);
    const charValueOfRandomNumber = String.fromCharCode(randomNumber);
    completePassword = completePassword + charValueOfRandomNumber;
    console.log(charValueOfRandomNumber, randomNumber);
  }
  console.log(completePassword);
};
random(8);
