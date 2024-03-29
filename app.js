let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

const btn = document.getElementById("btn");
const messageBox = document.getElementById("message");
const photoInput = document.getElementById("photo");
const isBotSpan = document.getElementById("is-bot");

// Display user information
isBotSpan.textContent = tg

btn.addEventListener("click", async function() {
  const message = messageBox.value;
  const photoFile = photoInput.files[0];
  tg.MainButton.setText("Message sent!");
  tg.MainButton.show();

  let textToSend = `${message}`;

  if (photoFile) {
    const imageUrl = await uploadPhoto(photoFile); // Function to upload photo and get direct link
    textToSend += imageUrl; // Add photo link to the message
  } else {
    textToSend += 'No photo attached';
  }

  tg.sendData(textToSend);
});

async function uploadPhoto(photoFile) {
  // Implement function to upload photo to server and get direct link
  // For example, you can use fetch API to send file to server and get its link
  // Example implementation for uploading to Imgur server:
  const formData = new FormData();
  formData.append('image', photoFile);

  const response = await fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      Authorization: '54fbf4fabdcc003', // Replace YOUR_CLIENT_ID with your Imgur API key
    },
    body: formData,
  });
  const data = await response.json();
  if (data.success) {
    return data.data.link; // Returns direct link to the uploaded image
  } else {
    throw new Error('Error uploading photo to Imgur server');
  }
}
