// start the animation
animate();
// get the counter element
const counter = document.querySelector('.count');

// set the starting value and the speed of the animation
const targetValue = 1000000000;
const animationSpeed = 300;

// check if the current value is stored in local storage
let currentValue = localStorage.getItem('counterValue');

// if the current value is not stored, set it to 0
if (!currentValue) {
  currentValue = 9113;
}

// update the counter value
counter.innerHTML = currentValue;

// create the animation function
function animate() {
  // increment the current value by 1
  currentValue++;

  // update the counter value
  counter.innerHTML = currentValue;

  // store the current value in local storage
  localStorage.setItem('counterValue', currentValue);

  // check if the animation is finished
  if (currentValue < targetValue) {
    // continue the animation
    setTimeout(animate, animationSpeed);
  }
}

// start the animation
animate();
