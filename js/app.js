'use strict'

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']


var firstAndPike = {
    location: '1st and Pike',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: 6.3,
    totalPerHr: [],
    total: 0, 

        
    custPerHr: function getRandomInt() {
      
      return Math.round(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer; 
    },

        
    cookiesPerHr: function() { 
             
        for(var i=0; i < storeHours.length; i++) {
        
            var calcCookiesPerHrPike = Math.round(this.custPerHr() * this.avgCookieSale);

            var listLinePike = document.createElement('li');
                listLinePike.textContent = 'Projected sale for '  + storeHours[i] + ' is ' + calcCookiesPerHrPike +  ' cookies.';

            var pikeLocation = document.getElementById('Pike'); // this can go outside of the function's
                pikeLocation.appendChild(listLinePike);

            this.totalPerHr.push(calcCookiesPerHrPike);
            this.total +=  calcCookiesPerHrPike;   
                       
        }    
        var hourlyCount = document.createElement('p');
            hourlyCount.textContent ='Total for the day: ' + this.total;
            
        var totalCount = document.getElementById('Pike');
            totalCount.appendChild(hourlyCount)
    },
}

console.log(firstAndPike)
firstAndPike.cookiesPerHr();

var seaTacAirport = {
    location: 'SeaTac Airport',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookieSale: 1.2,
    totalPerHr: [],
    total: 0,

    custPerHr: function getRandomInt() {
        return Math.round(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
    },

    cookiesPerHr: function() {

        for(var i=0; i <storeHours.length; i++){

        var calcCookiesPerHrSeaTac = Math.round(seaTacAirport.custPerHr() * this.avgCookieSale);

            var listLineSeaTac = document.createElement('li');
                listLineSeaTac.textContent = 'Projected sale for ' + storeHours[i] + ' is ' + calcCookiesPerHrSeaTac + ' cookies.';

            var seaTacLocation = document.getElementById('SeaTac');
                seaTacLocation.appendChild(listLineSeaTac);
            
            this.totalPerHr.push(calcCookiesPerHrSeaTac);
            this.total += calcCookiesPerHrSeaTac;
        }
        var hourlyCount = document.createElement('p');
            hourlyCount.textContent = 'Total for the day: ' + this.total;

        var totalCount = document.getElementById('SeaTac');
            totalCount.appendChild(hourlyCount);
    },
}

console.log(seaTacAirport)
seaTacAirport.cookiesPerHr();


var seattleCenter = {
    location: 'Seattle Center',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookieSale: 3.7,

    custPerHour: function() {
        Math.random(11, 38)
    }
}

var capitolHill = {
    location: 'Capitol Hill',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookieSale: 2.3,

    custPerHour: function() {
        return Math.random(20, 38)
    }
}

var alki = {
    location: 'Alki',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookieSale: 4.6,

    custPerHour: function() {
        return Math.random(2, 16)
    }
}