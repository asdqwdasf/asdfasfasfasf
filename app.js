const btn = document.getElementById("btn");
const messageBox = document.getElementById("message");
const photoInput = document.getElementById("photo");

btn.addEventListener("click", async function() {
  const message = messageBox.value;
  const photoFile = photoInput.files[0];

  tg.MainButton.setText("Сообщение отправлено!");
  tg.MainButton.show();

  let jsonData = {
    message: message
  };

  if (photoFile) {
    const imageUrl = await uploadPhoto(photoFile); 
    jsonData.imageUrl = imageUrl; 
  } else {
    jsonData.imageUrl = undefined;
  }

  const jsonString = JSON.stringify(jsonData); 

  tg.sendData(jsonString);
});

async function uploadPhoto(photoFile) {
  const formData = new FormData();
  formData.append('image', photoFile);

  const response = await fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      Authorization: '54fbf4fabdcc003', // Замените YOUR_CLIENT_ID на ваш API ключ Imgur
    },
    body: formData,
  });

  const data = await response.json();
  if (data.success) {
    return data.data.link; // Возвращает прямую ссылку на загруженное изображение
  } else {
    throw new Error('Ошибка при загрузке фото на сервер Imgur');
  }
}
