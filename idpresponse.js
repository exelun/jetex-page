;(function(window) {
  window.addEventListener('load', sendAuthToken);

  function sendAuthToken() {
    const credential = Object.fromEntries(location.hash.substr(1).split('&').map(o => o.split('=')));
    window.opener.postMessage({credential}, location.origin);
    window.close();
  }
})(globalThis);
