const enterPage = document.querySelector('.enter-page');
const chatPage = document.querySelector('.chat-page');
const enterName = document.querySelector('.enter-name');
const enterButton = document.querySelector('.enter');
const loading = document.querySelector('.loading');

function startChat() {

    const name = enterName.value;
    const nameData = {name: name};

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/participants", nameData);

    promise.then(enterChat);
    // promise.then(enterChat, loadContacts)
    promise.catch(tryAgain);

    loading.classList.remove('hidden');
}

function enterChat(response) {

    enterPage.classList.add('hidden');
    chatPage.classList.remove('hidden');

    setInterval(loadMessages, 3000); 
    setInterval(imHere, 5000);  
}

function tryAgain(error) {
    alert("Este nome não está disponível. Por favor entre com outro nome");
    window.location.reload()
}

enterButton.addEventListener('click', startChat);



