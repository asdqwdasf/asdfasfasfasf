let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

const btn = document.getElementById("btn");
const messageBox = document.getElementById("message");

btn.addEventListener("click", function() {
  const message = messageBox.value;
  const formData = new FormData(); // Create FormData object to send text and photo
  formData.append("text", message); // Append message to FormData
  
  tg.MainButton.setText("Сообщение отправлено!");
  tg.MainButton.show();
  tg.sendData('asd');
});
