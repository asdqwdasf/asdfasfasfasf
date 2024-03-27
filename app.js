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

  let TextToSend = `${message}`;

  if (photoFile) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const photoBase64 = event.target.result;
      // Append the Base64 string to the message
      TextToSend += `\n\n[Фото](data:image/jpeg;base64,${photoBase64.split(',')[1]})`;
      // Send the message with the attached photo
      tg.sendData(TextToSend);
    };
    reader.readAsDataURL(photoFile);
  } else {
    // If no photo selected, send only the message
    tg.sendData(TextToSend + '\n\nНету фото');
  }
});
