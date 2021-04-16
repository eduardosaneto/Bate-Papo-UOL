function loadMessages() {
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/messages");

    promise.then(messageTypes);
    promise.catch(reloadPage);

    const elementoQueQueroQueApareca = document.querySelector('.message:last-child');
    console.log(elementoQueQueroQueApareca);
    // elementoQueQueroQueApareca.scrollIntoView();

    // console.log(response);
    // console.log(response.data);
}

function messageTypes(response) {

    const messagesBox = document.querySelector('.messages-box'); 
    const chatMessages = response.data;



    console.log(chatMessages);
    
    for(let i = 0; i < chatMessages.length; i++){
        if(chatMessages[i].type === "status"){
            messagesBox.innerHTML += `
                            <div class="message in-out">
                                <p>
                                    <span>(${chatMessages[i].time}) </span> 
                                </p>
                                <p>
                                    <strong>${chatMessages[i].from}</strong>
                                    ${chatMessages[i].text}
                                </p>
                            </div>`;
        } else if (chatMessages[i].type === 'private_message') {
            messagesBox.innerHTML += `
                            <div class="message in-out">
                                <p>
                                    <span>(${chatMessages[i].time}) </span> 
                                </p>
                                <p>
                                    <strong>${chatMessages[i].from} </strong>
                                    para
                                    <strong>${chatMessages[i].to} </strong>
                                    ${chatMessages[i].text}
                                </p>
                            </div>`;
        } else if (chatMessages[i].type === 'public') {
            messagesBox.innerHTML += `
                            <div class="message public">
                                <p>
                                    <span>(${chatMessages[i].time}) </span> 
                                </p>
                                <p>
                                <strong>${chatMessages[i].from} </strong>
                                para
                                    <strong>${chatMessages[i].to} </strong>
                                    ${chatMessages[i].text}
                                </p>
                            </div>`;
        }
    }
}

function reloadPage(error) {
    window.location.reload();
}

loadMessages();