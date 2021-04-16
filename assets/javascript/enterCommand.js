enterName.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter') startChat();
  });

writeMessage.addEventListener('keydown', (e)=>{
if (e.key === 'Enter') sendMessage();
});