let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

const btn = document.getElementById("btn");
const messageBox = document.getElementById("message");
const photoInput = document.getElementById("photo"); // Get the input field for photo


btn.addEventListener("click", function() {
  const message = messageBox.value;
  const photoFile = photoInput.files[0]; // Get the selected photo file

  console.log(photoFile)
  
  tg.MainButton.setText("Сообщение отправлено!");
  tg.MainButton.show();
  tg.sendData(message);
});
