const random = (Large) => {
  for (var i = 0; i < Large; i++) {
    const randomNumber = Math.floor(Math.random() * (126 - 33) + 33);
    const valor = String.fromCharCode(randomNumber)
    console.log(valor, randomNumber);
  }
};
random(8);


