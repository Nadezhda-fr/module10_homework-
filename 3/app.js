const wsUrl = "wss://echo-ws-service.herokuapp.com";

function pageLoaded() {
    const infoOutput = document.querySelector(".info_output");
    const chatOutput = document.querySelector(".chat_output");
    const input = document.querySelector("input");
    const sendBtn = document.querySelector(".btn_send");
    const geolBtn = document.querySelector(".geolocation");

//чат

    let socket = new WebSocket(wsUrl);

    socket.onopen = () => {
        infoOutput.innerText = "Соединение установлено";
      }

   socket.onmessage = (event) => {
    writeToChat(event.data, true);
   }

   socket.onerror = () => {
    infoOutput.innerText = "При передаче данных произошла ошибка";
  }

   sendBtn.addEventListener("click", sendMessage);

   function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
   }

   function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "send"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
   }

   // геолокация

   geolBtn.addEventListener("click", getLocation);

   function getLocation() {
    if ("geolocation" in navigator) {
        let locationOptions = {
            enableHighAccuracy: true
        };

        navigator.geolocation.getCurrentPosition(success, error, locationOptions);
    } else {
        writeOutput("Ваш браузер не поддерживает функцию определения местоположения")
    }
   }

   function success(data) {
        let link = `https://www.openstreetmap.org/#map=18/${data.coords.latitude},${data.coords.longitude}`;
        writeOutput(`<a href="${link}" target="_blank" class="recieved">Гео-локация</a>`);
      }


  function error() {
    writeOutput("При получении местоположения произошла ошибка");
  }

  function writeOutput(message) {
    chatOutput.innerHTML += `<p>${message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", pageLoaded);



