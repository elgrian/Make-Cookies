/*

         COOKIE clicker

*/

//defaults 
let cookieCount = 0;

//DOM decleration
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById("cookie-clicker");

//every time a user clicks the button, their cookies are increased by the value of their clickPower
cookieClicker.addEventListener("click", function() {
    cookieCount = cookieCount + clickPower;
    refreshCookieCount();   
})

//refresh cookies
let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
}



/*

        Click Power

*/

// declare default variables
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;


//declare DOM variables 
let buyClickPower = document.getElementById("buy-click-power");
let clickPowerPrice = document.getElementById("click-power-price");
let clickPowerLevel = document.getElementById("click-power-level");
let clickPowerMultiple = document.getElementById("click-power-multiple")
// let cookieCounter.innerHTML = cookieCount;

// //every time a user clicks the button, their cookies are increased by the value of their clikcPower.
// cookieClicker.addEventListener("click", function() {
//     cookieCount = cookieCount + clickPower;
//     refreshCookieCount();
// })

//Buy click power
buyClickPower.addEventListener("click", function() {
    if (cookieCount >= clickPowerPriceAmount) {
        console.log("Item succesfully Bought");
    }else {
        console.log("You don't have enough cookies!");
    }
    if (cookieCount >= clickPowerPriceAmount) {
        //subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;
        //update cookie counter.
        refreshCookieCount();
        //Upgrade power level
        clickPowerLevelNumber += 1;
        //Update click price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
        //update click power
        clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05); 
        //refresh shop item
        refreshPowerClick();
    }
})

//refresh PowerClick
let refreshPowerClick = function() {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
}


/*

          Grandmas

*/

//set default values
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let grandmaAuto = false;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

//buy a grandma
buyGrandma.addEventListener("click", function() {
    //Make sure we have enough cookies and subtract our cookies from the price
    if (cookieCount >= grandmaPriceAmount) {
        //Subtract cookies from the price of item
        cookieCount -= grandmaPriceAmount;
        refreshCookieCount();
    

        //upgrade power level
        grandmaLevelNumber += 1;

        //update price
        grandmaPriceAmount += Math.floor(grandmaPriceAmount * 1.33);

        //update grandma power
        grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);

        //turn autoGrandma on!
        autoGrandma = true
        autoGrandmaStart();

        //refresh shop items
        refreshGrandma()    
    }
})

let refreshGrandma = function() {
    grandmaLevel.innerHTML = grandmaLevelNumber;
    grandmaLevelNumber.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower - 10;
}



let autoGrandmaStart = function() {
    let grandmaInt = window.setInterval(function() {
        cookieCount += grandmaPower;
        refreshCookieCount();
    }, 1000);
}

/*

          Facilities

*/

//set default variables
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function() {
    //set autoLoop to fale
    facilityAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
        cookieCount -= facilityPriceAmount;
        refreshCookieCount()
    
    //upgrade power level
        facilityLevelNumber += 1;

    //update price
        facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

    //update facility power
    facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);;

    //turn autoFacility on
    facilityAuto = true
    autoFacilityStart();

    //refresh shop item
    refreshFacility();
    }
})

//game loop
let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function() {
        cookieCount += facilityPower;
        refreshCookieCount();
    }, 1000);
}

//refresh shop
let refreshFacility = function() {
    facilityLevel.innerHTML = facilityLevelNumber;
    facilityLevel.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
}



/*

          Ports

*/

//set default variables
let portAuto = false;
let portPower = 60000;
let portPriceAmount = 100000;
let portLevelNumber = 0;

//declare DOM variables
let buyPort = document.getElementById('buy-port');
let portPrice = document.getElementById('port-price');
let portLevel = document.getElementById('port-level');
let portMultiple = document.getElementById('port-multiple');

//buy a port
buyPort.addEventListener("click", function() {
    //set autoLoop to false
    portAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= portPriceAmount) {
        cookieCount -= portPriceAmount;
        refreshCookieCount()
    
    //upgrade power level
        portLevelNumber += 1;

    //update price
        portPriceAmount = Math.floor(portPriceAmount * 1.33);

    //update facility power
    portPower += 600 + Math.floor(portLevelNumber * 1.33);;

    //turn autoPort on
    portAuto = true
    autoPortStart();

    //refresh shop item
    refreshPort();
    }
})

//game loop
let autoPortStart = function() {
    let portInt = window.setInterval(function() {
        cookieCount += portPower;
        refreshCookieCount();
    }, 1000);
}

//refresh shop
let refreshPort = function() {
    portLevel.innerHTML = portLevelNumber;
    portLevel.innerHTML = portPriceAmount;
    portMultiple.innerHTML = portPower - 600;
}

