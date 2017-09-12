if ('serviceWorker' in navigator) {

  navigator.serviceWorker
    .register('./service-worker.js', { scope: './' })
    .then(function(registration) {
      alert("Service Worker Registered");
    })
    .catch(function(err) {
      alert("Service Worker Failed to Register", err);
    })

}