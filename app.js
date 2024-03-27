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

  console.log(photoFile);

  tg.MainButton.setText("Сообщение отправлено!");
  tg.MainButton.show();
  
  if (photoFile) {
    // If photo is selected, convert it to Base64 and send along with the message
    const reader = new FileReader();
    reader.onload = function(event) {
      const photoBase64 = event.target.result;
      tg.sendData(message, photoBase64);
    };
    reader.readAsDataURL(photoFile);
  } else {
    // If no photo selected, send only the message
    tg.sendData(message);
  }
});
