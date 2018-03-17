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