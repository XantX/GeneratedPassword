const notifications = () => {
  const myNotification = new Notification("ClipBoard", {
    icon: "./images/padlock.png",
    body: "Copiado en el portapapeles",
    silent: true,
  });
};
