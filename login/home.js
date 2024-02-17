// Find the button element
var redirectButton = document.getElementById('home-button');

console.log(document.getElementById('home-button'));
// Add click event listener
redirectButton.addEventListener('click', redirect());

function redirect () {
  // Redirect to a different webpage
  window.location.href = 'home.html';
}
;