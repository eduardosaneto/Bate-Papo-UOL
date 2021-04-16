// const contact = contacts.children;

// function selectedContact(event) {
    
//     const parent = event.currentTarget.parentNode;
    
//     for(let i = 0; i < contact.length; i++){
//         if(contact[i].classList.contains('selected')) {
//             contact[i].classList.remove('selected');
//         } 
//         contact[i].classList.add('selected');
//     }
// }

const contact = contacts.children;

function selectedContact(event) {
    
    const parent = event.currentTarget.parentNode;

    if(event.currentTarget.classList.contains('selected')) {
        event.currentTarget.classList.remove('selected');
    } else {
        for(let i = 0; i < parent.children.length; i++){
            parent.children[i].classList.remove('selected');
        }
        event.currentTarget.classList.add('selected');
    }
}

for(let i = 0; i < contact.length; i++){
    contact[i].addEventListener('click', selectedContact, true);
}

// const opcao_escolhida = document.querySelectorAll('.produtos-lista');
// const comida = opcao_escolhida[0].children;
// const bebida = opcao_escolhida[1].children;
// const sobremesa = opcao_escolhida[2].children;

// function selecao(evento){

//     const pai = evento.currentTarget.parentNode;

//     if(evento.currentTarget.classList.contains('selecionado')) {
//         evento.currentTarget.classList.remove('selecionado');
//     }
//     else {
//         for(let i = 0; i < pai.children.length; i++) {
//             pai.children[i].classList.remove('selecionado');
//         }    
//         evento.currentTarget.classList.add('selecionado');    
//     }
//     fecharPedido()
// }

// for(let i = 0; i < comida.length; i++){
//     comida[i].addEventListener('click', selecao, true);
// }
