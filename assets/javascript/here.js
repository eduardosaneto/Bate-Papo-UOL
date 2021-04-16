function imHere() {

    const name = enterName.value;
    const nameData = {name: name};

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/status", nameData);

    promise.then(imStillHere);
    promise.catch(imOut);
}

function imStillHere(response) {
    console.log(response.data);
}

function imOut(error) {
    console.log(error);
}

imHere();