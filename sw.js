self.addEventListener('push', function(event) {
  const title = 'Me Da Um Preço';
  const options = {
    body: 'Novo conteúdo! 5 dicas para colocar o preço ideal no varejo',
    icon: 'img/Logo.png',
    badge: 'img/Logo.png'
  };

  const notificationPromise = self.registration.showNotification(title, options);
  event.waitUntil(notificationPromise);
});
