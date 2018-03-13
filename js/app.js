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

            var pikeLocation = document.getElementById('pike'); // this can go outside of the function's
                pikeLocation.appendChild(listLinePike);

            this.totalPerHr.push(calcCookiesPerHrPike);
            this.total +=  calcCookiesPerHrPike;   
                       
        }    
        var hourlyCount = document.createElement('p');
            hourlyCount.textContent ='Total for the day: ' + this.total;
            
        var totalCount = document.getElementById('pike');
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

            var seaTacLocation = document.getElementById('seaTac');
                seaTacLocation.appendChild(listLineSeaTac);
            
            this.totalPerHr.push(calcCookiesPerHrSeaTac);
            this.total += calcCookiesPerHrSeaTac;
        }
        var hourlyCount = document.createElement('p');
            hourlyCount.textContent = 'Total for the day: ' + this.total;

        var totalCount = document.getElementById('seaTac');
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
    totalPerHr: [],
    total: 0,

    custPerHour: function getRandomInt(){
        return Math.round(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer
    },

    cookiesPerHr: function(){

        for(var i=0; i < storeHours.length; i++) {
            var calcCookiesPerHrCenter = Math.round(seattleCenter.custPerHour() * this.avgCookieSale);

            var listLineCenter = document.createElement('li');
                listLineCenter.textContent = 'Projected sale for ' + storeHours[i] + ' is ' + calcCookiesPerHrCenter + ' cookies.';
                
            var centerLocation = document.getElementById('seattleCenter');
                centerLocation.appendChild(listLineCenter);

            this.totalPerHr.push(this.calcCookiesPerHrCenter);
            this.total += calcCookiesPerHrCenter
        }

        var hourlyCount = document.createElement('p');
            hourlyCount.textContent = 'Total for the day: ' + this.total;

        var totalcount = document.getElementById('seattleCenter');
            totalcount.appendChild(hourlyCount);
    },
}

console.log(seattleCenter)
seattleCenter.cookiesPerHr();

var capitolHill = {
    location: 'Capitol Hill',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookieSale: 2.3,
    totalPerHr: [],
    total: 0,

    custPerHour: function getRandomInt(){
        return Math.round(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer
    },

    cookiesPerHr: function(){

        for(var i=0; i < storeHours.length; i++) {
            var calcCookiesPerHrHill = Math.round(capitolHill.custPerHour() * this.avgCookieSale);

            var listLineCenter = document.createElement('li');
                listLineCenter.textContent = 'Projected sale for ' + storeHours[i] + ' is ' + calcCookiesPerHrHill + ' cookies.';
                
            var hillLocation = document.getElementById('capitolHill');
                hillLocation.appendChild(listLineCenter);

            this.totalPerHr.push(this.calcCookiesPerHrHill);
            this.total += calcCookiesPerHrHill
        }

        var hourlyCount = document.createElement('p');
            hourlyCount.textContent = 'Total for the day: ' + this.total;

        var totalcount = document.getElementById('capitolHill');
            totalcount.appendChild(hourlyCount);
    },
}

console.log(capitolHill)
capitolHill.cookiesPerHr();

var alki = {
    location: 'Alki',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookieSale: 4.6,
    totalPerHr: [],
    total: 0,

    custPerHour: function getRandomInt(){
        return Math.round(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer
    },

    cookiesPerHr: function(){

        for(var i=0; i < storeHours.length; i++) {
            var calcCookiesPerHrAlki = Math.round(alki.custPerHour() * this.avgCookieSale);

            var listLineAlki = document.createElement('li');
                listLineAlki.textContent = 'Projected sale for ' + storeHours[i] + ' is ' + calcCookiesPerHrAlki + ' cookies.';

            var alkiLocation = document.getElementById('alki');
                alkiLocation.appendChild(listLineAlki);
            
            this.totalPerHr.push(this.calcCookiesPerHrAlki);
            this.total += calcCookiesPerHrAlki
        }

        var hourlyCount = document.createElement('p');
            hourlyCount.textContent = 'Total for the day: ' + this.total;

        var totalcount = document.getElementById('alki');
            totalcount.appendChild(hourlyCount);
    },
}

console.log(alki)
alki.cookiesPerHr();