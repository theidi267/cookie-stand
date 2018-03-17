'use strict';


var aboutUs = document.getElementById('us');

aboutUs.addEventListener('click', openAboutUs);

function openAboutUs() {

  if (aboutUs.hidden === true) {

    document.getElementById('us').hidden = false;

  }

  else {

    document.getElementById('us').hidden = true;
  }
}

var whatToExpect = document.getElementById('expect');

whatToExpect.addEventListener('click', openWhatToExpect);

function openWhatToExpect() {

  if (whatToExpect.hidden === true) {

    document.getElementById('expect').hidden = false;

  }

  else {

    document.getElementById('expect').hidden = true;
  }
}