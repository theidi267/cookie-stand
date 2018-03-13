var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']


var firstAndPike = {
    location: '1st and Pike',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: 6.3,
    cookiesPerHr: [],
        
    custPerHr: function getRandomInt() {
      
      return Math.round(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer; 
    },
        
    cookiesPerHr: function() { 
        for(var i=0; i < storeHours.length; i++) {
        
        calcCookiesPerHrPike = Math.round(this.custPerHr() * this.avgCookieSale)

        var listLinePike = document.createElement('li')
            listLinePike.textContent = 'Projected sale for '  + storeHours[i] + ' is ' + calcCookiesPerHrPike +  ' cookies.';

        var pikeLocation = document.getElementById('Pike')
            pikeLocation.appendChild(listLinePike)
        
            //return ('Projected sale for ' + storeHours[i] + ' is ' + cookiesPerHrPike + ' cookies')
        // var this is my line = document.createElement('li');
    //     this is my line.textContent = "Hello World from app.js";

    // // Should be <ul id="stuff">
// var this is my list= document.getElementById('stuff');
//     ulEl.appendChild(liEl);
         
        }
    },
}

console.log(firstAndPike)
firstAndPike.cookiesPerHr();

var seaTacAirport = {
    location: 'SeaTac Airport',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookieSale: 1.2,

    custPerHour: function getRandomInt() {
        return Math.roound(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
    },

    cookiesPerHr: function() {
        for(var i=0; i <storeHours.length; i++){

            cookiesPerHrSeaTac = Math.round(seaTacAirport.custPerHr() * this.avgCookieSale)

            return ('Projected sale for ' + storeHours[i] + ' is ' + cookiesPerHrSeaTac + ' cookies')
        }
    }
}

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