/**
 * getNumber prompts a user and returns number
 * @return a number
 */


function getNumber(){
    var number = parseInt(prompt("Enter a number"));
    return number;
}

/**
 * displayMessage takes a number and displays appropriate 
 * message
 * @param - number
 * 
 */
function displayMessage(number){
    if(number > 10 && number < 50){
        document.getElementById("message").innerHTML = "Great Job";
    }
    else{
        document.getElementById("message").innerHTML = "The number is not in the range";
    }
}



