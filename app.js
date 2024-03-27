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
  const formData = new FormData(); // Create FormData object to send text and photo
  formData.append("text", message); // Append message to FormData
  if (photoFile) {
    formData.append("photo", photoFile); // Append photo to FormData
  }
  
  tg.MainButton.setText("Сообщение отправлено!");
  tg.MainButton.show();
  tg.sendData('asd');
});
