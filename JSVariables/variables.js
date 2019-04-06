const MAX_SPEED = 100;


/**
 * 
 * getNumber gets a number from the user
 * @param - String - used as message
 * for prompt
 * @returns a number
 */

function getNumber(message){
    var number = parseInt(prompt(message));
    return number;
}

/**
 * checkSpeed function takes in a speed
 * and determines if it's too fast or not
 * @param - number - the speed 
 */
function checkSpeed(speed){
    if(speed>MAX_SPEED){
        document.getElementById("message").innerHTML = "That was too fast!";

    }
    else{
        document.getElementById("message").innerHTML = "That was safe driving";

    }
//Math.floor(x + Math.random() * (y-x))
}





