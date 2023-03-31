// get the counter element
const counter = document.querySelector('.count');

// set the starting value and the speed of the animation
const targetValue = 1000000000;
const animationSpeed = 300;

// check if the page views counter is stored in local storage
let pageViews = localStorage.getItem('pageViews');

// if the page views counter is not stored, set it to 0 and increment it
if (!pageViews) {
  pageViews = 0;
  localStorage.setItem('pageViews', ++pageViews);
}

// display the page views counter value
counter.innerHTML = pageViews;

// create the animation function
function animate() {
  // increment the current value by 1
  pageViews++;

  // update the counter value
  counter.innerHTML = pageViews;

  // store the current value in local storage
  localStorage.setItem('pageViews', pageViews);

  // check if the animation is finished
  if (pageViews < targetValue) {
    // continue the animation
    setTimeout(animate, animationSpeed);
  }
}

// start the animation
animate();
