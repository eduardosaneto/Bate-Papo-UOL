const sidebar = document.querySelector('.chat-contacts');
const backgroundSidebar = document.querySelector('.background');
const backToChat = document.querySelector('.back-to-chat');

function sidebarShow() {
    backgroundSidebar.classList.remove('hidden');
}

function sidebarHidden() {
    backgroundSidebar.classList.add('hidden');
}

sidebar.addEventListener('click', sidebarShow);
backToChat.addEventListener('click', sidebarHidden);