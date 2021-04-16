const enterPage = document.querySelector('.enter-page');
const chatPage = document.querySelector('.chat-page');
const enterName = document.querySelector('.enter-name');
const enterButton = document.querySelector('.enter');

function enterChat() {

    const loading = document.querySelector('.loading');
    const name = enterName.value;
    const nameData = {name: name};

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/participants", nameData);

    promise.then(openMessages);
    promise.catch(tryAgain);

    loading.classList.remove('hidden');
}

function openMessages(response) {

    enterPage.classList.add('hidden');
    chatPage.classList.remove('hidden');

    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/messages");

    promise.then(messageTypes);
    promise.catch(reloadPage);
    // console.log(response);
    // console.log(response.data);
}

function messageTypes(response) {

    const messagesBox = document.querySelector('.messages');
    const messages = response.data;

    if(messages.type === "status"){
        messagesBox.classList.remove('public');
        messagesBox.classList.add('in-out');
    } else if (messages.type === 'private_message') {
        messagesBox.classList.remove('public');
        messagesBox.classList.add('private');
    }
}

function reloadPage(error) {
    window.location.reload();
}

// function status(response) {
//     const name = enterName.value;

//     const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/status", nameData);
// }

function tryAgain(error) {
    alert("Este nome não está disponível. Por favor entre com outro nome");
}

enterButton.addEventListener('click', enterChat);



