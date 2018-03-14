'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allLocations = []; //this holds all the objects

var figuresTable = document.getElementById('finalfigures'); //accsesses the table

// We need a constructor to make our dog objects

function Locations(location, minCustomer, maxCustomer, avgCookieSale){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.totalPerHr = [];
  this.total = 0;
  allLocations.push(this);
} //constructs the element an pushes it in the array

Locations.prototype.custPerHr = function getRandomInt(){
  return Math.round(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
};

Locations.prototype.cookiesPerHr = function(){

  // make a var for day total
  for(var i=0; i < storeHours.length; i++) {

    var doTheMath = Math.round(this.custPerHr() * this.avgCookieSale);

    //do the datytotal += here

    this.totalPerHr.push(doTheMath);
    this.total += doTheMath;
  }

  //this.dayttal = total  just total in my code and add the last row here
};

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

  figuresTable.appendChild(trElement);

};

function heading(){

  var trHead = document.createElement('tr');
  var thHead = document.createElement('th');
  thHead.textContent = 'Locations';
  trHead.appendChild(thHead);

  for(var i = 0; i < storeHours.length; i++) {

    thHead = document.createElement('th');
    thHead.textContent = storeHours[i];
    trHead.appendChild(thHead);
  }
  thHead.textContent = 'Total';
  trHead.appendChild(thHead);

  figuresTable.appendChild(trHead);
}

var trHead = document.createElement('tr');
var thHead = document.createElement('th');
thHead.textContent = 'Total';
trHead.appendChild(thHead);



function foot(){

  var trFoot = document.createElement('tr');
  var thFoot = document.createElement('td');
  thFoot.textContent = 'Total Cookies';
  trFoot.appendChild(thFoot);

  for(var i = 0; i < pike.totalPerHr; i++) {

    thFoot.textContent = 'something';
    trFoot.appendChild(thFoot);

  }
  figuresTable.appendChild(trFoot);
}

var pike = new Locations('1st and Pike', 23, 65, 6.3); //created the objects
var seatac = new Locations('SeaTac Airport', 3, 24, 1.2);
var center = new Locations('Seattle Center', 11, 38, 3.7);
var capitolhill = new Locations('Capitil Hill', 20, 38, 2.3);
var alki = new Locations('Alki', 2, 16, 4.6);

heading();
pike.render();
seatac.render();
center.render();
capitolhill.render();
alki.render();
//totalForFoot();
foot();



// We need a separate function to make the table header

// It would be nice to have a single function that renders all of the individual dog rows

// Now we need to call our functions: the one for the header row, and the one for generating the individual dog rows









// var listLinePike = document.createElement('li');
// listLinePike.textContent = 'Projected sale for '  + storeHours[i] + ' is ' + calcCookiesPerHrPike +  ' cookies.';

// var pikeLocation = document.getElementById('pike'); // this can go outside of the function's
// pikeLocation.appendChild(listLinePike);

// var hourlyCount = document.createElement('p');
//         hourlyCount.textContent ='Total for the day: ' + this.total;

//     var totalCount = document.getElementById('pike');
//         totalCount.appendChild(hourlyCount)





