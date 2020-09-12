;(function(window) {
  window.addEventListener('load', sendAuthToken);

  function sendAuthToken() {
    const credential = {id_token: 'hello jetex'};
    window.opener.postMessage({credential}, location.origin);
    window.close();
  }
})(globalThis);
