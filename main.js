'use strict';

// event listener's callback function

// function openAboutUs(event) {

//   HTMLBodyElement.getElementById('us');
// }

// var aboutUsButton = document.getElementById('us');

// aboutUsButton.addEventListener('click', openAboutUs);

var aboutUs = document.getElementById('us');

aboutUs.addEventListener('click', openAboutUs);

function openAboutUs() {

  document.getElementById('us').hidden = false;

}