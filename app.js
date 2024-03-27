let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

const btn = document.getElementById("btn");
const messageBox = document.getElementById("message");
const photoInput = document.getElementById("photo");

btn.addEventListener("click", function() {
  const message = messageBox.value;
  const photoFile = photoInput.files[0];

  tg.MainButton.setText("Сообщение отправлено!");
  tg.MainButton.show();

  TextToSend = `${message}`
  
  if (photoFile) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const photoBase64 = event.target.result;
    TextToSend += photoBase64
  } else {
    TextToSend += 'Нету фото'
  }
  tg.sendData(TextToSend);
});
