const contacts = document.querySelector('.contacts');
const chosenContact = contacts.children;

function loadContacts() {
    
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/participants");

    promise.then(onlineContacts);
    promise.catch();
}

function onlineContacts(response) {

    const lista = response.data;

    for(let i = 0; i < lista.length; i++) {
        contacts.innerHTML += `
                            <li class="contact ">
                                <ion-icon class="icon" name="person-circle-sharp"></ion-icon>
                                <p>${lista[i].name}</p>
                                <ion-icon class="check" name="checkmark-sharp"></ion-icon>
                            </li>`;
        }
}

enterButton.addEventListener('click', loadContacts);

