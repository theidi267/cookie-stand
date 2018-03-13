'use strict'

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']


function Locations(location, minCustomer, maxCustomer, avgCookieSale){
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookieSale = avgCookieSale;
    this.totalPerHr = [];
    this.total = 0;
}

Locations.prototype.custPerHour = function getRandomInt(){
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer; 
};

Locations.prototype.cookiesPerHr = function(){
    for(var i=0; i < storeHours.length; i++) {
        
        var doTheMath = Math.round(this.custPerHr() * this.avgCookieSale);

        this.totalPerHr.push(doTheMath);
        this.total +=  doTheMath;   
                   
    }    
 };

var pike = new Locations('1st and Pike', 23, 65, 6.3);









// var listLinePike = document.createElement('li');
// listLinePike.textContent = 'Projected sale for '  + storeHours[i] + ' is ' + calcCookiesPerHrPike +  ' cookies.';

// var pikeLocation = document.getElementById('pike'); // this can go outside of the function's
// pikeLocation.appendChild(listLinePike);

// var hourlyCount = document.createElement('p');
//         hourlyCount.textContent ='Total for the day: ' + this.total;
        
//     var totalCount = document.getElementById('pike');
//         totalCount.appendChild(hourlyCount)





