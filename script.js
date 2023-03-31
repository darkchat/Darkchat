// get the counter element
const counter = document.querySelector('.count');

// set the starting value and the speed of the animation
const targetValue = 1000000000;
const animationSpeed = 300;

// set the starting value of the counter
let currentValue = 9113;

// create the animation function
function animate() {
  // increment the current value by 1
  currentValue++;

  // update the counter value
  counter.innerHTML = currentValue;

  // check if the animation is finished
  if (currentValue < targetValue) {
    // continue the animation
    setTimeout(animate, animationSpeed);
  }
}

// start the animation
animate();
