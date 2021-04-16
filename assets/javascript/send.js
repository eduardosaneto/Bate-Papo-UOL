const send = document.querySelector('.send');
const writeMessage = document.querySelector('.type');

function sendMessage() {

    const from = enterName.value;
    // const receiver = document.querySelector('.contacts selected');
    const to = "Todos";
    const text = writeMessage.value;
    // const type = document.querySelector('.public-private selected');
    const type = "message";

    const messageSent = {from: from, to: to, text: text, type: type};

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/messages", messageSent);

    promise.then(reloadMessages);
    promise.catch(cannotSendMessage);
}

function reloadMessages(response) {
    loadMessages();
}

function cannotSendMessage(error) {
    document.location.reload(true);
}

send.addEventListener('click', sendMessage);