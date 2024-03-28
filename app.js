let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

const btn = document.getElementById("btn");
const messageBox = document.getElementById("message");
const photoInput = document.getElementById("photo");

btn.addEventListener("click", async function() {
  const message = messageBox.value;
  const photoFile = photoInput.files[0];

  tg.MainButton.setText("Сообщение отправлено!");
  tg.MainButton.show();

  let TextToSend = `${message}`;

  if (photoFile) {
    const imageUrl = await uploadPhoto(photoFile); // Функция для загрузки фото и получения прямой ссылки
    TextToSend += `<a href="${imageUrl}">Photo</a>`; // Добавляем ссылку на фото в сообщение
  } else {
    TextToSend += 'Нету фото';
  }

  tg.sendData(TextToSend);
});

async function uploadPhoto(photoFile) {
  // Реализуйте функцию для загрузки фото на сервер и получения прямой ссылки
  // Например, вы можете использовать fetch API для отправки файла на сервер и получения ссылки на него
  // Пример реализации для загрузки на сервер Imgur:
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
