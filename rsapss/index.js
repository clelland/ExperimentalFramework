document.addEventListener('DOMContentLoaded', function() {
  var arena = document.getElementById("arena");
  if (navigator.frobulate) {
    log(arena, "Congratulations, it worked!");
  } else {
    log(arena, "Sorry, it's not working yet. Please finish writing the framework and try again.");
  }
});

function log(element, message) {
  var logMessage = document.createTextNode(message);
  element.appendChild(logMessage);
}
