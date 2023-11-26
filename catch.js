// Get the target element
var target = document.getElementById("target");

// Calculate the game container dimensions
// var gameContainer = document.getElementById("game-container");
// var containerWidth = gameContainer.offsetWidth;
// var containerHeight = gameContainer.offsetHeight;
let windowwidth=window.innerWidth;
let windowheight=window.innerHeight;

// Function to generate a random position for the target
function generateRandomPosition() {
  var targetWidth = target.offsetWidth;
  var targetHeight = target.offsetHeight;
  var maxLeft = windowwidth - targetWidth;
  var maxTop = windowheight - targetHeight;
  var randomLeft = Math.floor(Math.random() * maxLeft);
  var randomTop = Math.floor(Math.random() * maxTop);
  return { left: randomLeft, top: randomTop };
}

// Function to move the target to a random position
function moveTarget() {
  var randomPosition = generateRandomPosition();
  target.style.left = randomPosition.left + "px";
  target.style.top = randomPosition.top + "px";
}

// Move the target initially
moveTarget();

// Add click event listener to the target
target.addEventListener("mouseover", function() {
  // alert("You caught the target!");
  moveTarget();
});