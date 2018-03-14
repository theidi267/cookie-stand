'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allLocations = []; //this holds the objects

var figuresTable = document.getElementById('finalfigures'); //accsesses the table

var addLocationForm = document.getElementById('addLocationForm');

function Locations(location, minCustomer, maxCustomer, avgCookieSale){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.totalPerHr = [];
  this.total = 0;
  allLocations.push(this);
} //constructs the element an pushes it in the array

Locations.prototype.render = function () {

  this.cookiesPerHr();

  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = this.location;
  trElement.appendChild(tdElement);

  for(var i = 0; i < this.totalPerHr.length; i++){

    tdElement = document.createElement('td');
    tdElement.textContent = this.totalPerHr[i];
    trElement.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.total;
  trElement.appendChild(tdElement);

  figuresTable.appendChild(trElement);

}; //makes the table

new Locations('1st and Pike', 23, 65, 6.3); //created the objects
new Locations('SeaTac Airport', 3, 24, 1.2);
new Locations('Seattle Center', 11, 38, 3.7);
new Locations('Capitil Hill', 20, 38, 2.3);
new Locations('Alki', 2, 16, 4.6);


Locations.prototype.custPerHr = function getRandomInt(){
  return Math.round(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
};

Locations.prototype.cookiesPerHr = function(){

  for(var i=0; i < storeHours.length; i++) {

    var doTheMath = Math.round(this.custPerHr() * this.avgCookieSale);

    this.totalPerHr.push(doTheMath);
    this.total += doTheMath;
  }
};

function locTotalPerHr(){

  var foot = document.createElement('td');
  foot.textContent = 'Hourly Totals';

  var footRow = document.createElement('tFoot');
  footRow.appendChild(foot);


  for(var i = 0; i < storeHours.length; i++) {

    var hrValue = 0;

    for(var j = 0; j < allLocations.length; j++){

      hrValue += allLocations[j].totalPerHr[i];

    }

    var footData = document.createElement('td');
    footData.textContent = hrValue;

    // var footDataRow = document.createElement('tFoot');
    footRow.appendChild(footData);
  }
  figuresTable.appendChild(footRow);

}

function heading(){
  var tHead = document.createElement('tHead');
  // var trHead = document.createElement('tr');
  var thHead = document.createElement('th');
  thHead.textContent = 'Locations';
  // trHead.appendChild(thHead);
  tHead.appendChild(thHead);

  for(var i = 0; i <= storeHours.length; i++) {

    thHead = document.createElement('th');
    thHead.textContent = storeHours[i];
    // trHead.appendChild(thHead);
    tHead.appendChild(thHead);
  }
  thHead.textContent = 'Total';
  // trHead.appendChild(thHead);
  tHead.appendChild(thHead);

  figuresTable.appendChild(tHead);
}

function renderAllLocations() {
  for(var i in allLocations) {
    allLocations[i].render();
  }
}

// heading();
// renderAllLocations();
//locTotalPerHr();

// event listener's callback function
function addNewLocation(event){

  event.preventDefault();
  console.log(event.target.avgCookieSale.value);

  var newLocation = event.target.location.value;
  var newminCustomer = event.target.minCustomer.value;
  var newmaxCustomer= event.target.maxCustomer.value;
  var newavgCookieSale = event.target.avgCookieSale.value;

  new Locations(newLocation, newminCustomer, newmaxCustomer, newavgCookieSale);

  figuresTable.innerHTML = '';
  heading();
  renderAllLocations();
  locTotalPerHr();
}

// add event listener
addLocationForm.addEventListener('submit', addNewLocation);

// Now we need to call our functions
heading();
renderAllLocations();
locTotalPerHr();


