
/**
 * LookFor42 gets numbers from form and determines
 * if 42 is one of them
 * Prints the result to the screen.
 * 
 */

 function lookFor42(){
    var myArray = [];
    myArray.push(document.myForm.num1.value);
    myArray.push(document.myForm.num2.value);
    myArray.push(document.myForm.num3.value);
    myArray.push(document.myForm.num4.value);
    myArray.push(document.myForm.num5.value);

    var isIn = myArray.indexOf("42");

    if(isIn == -1){
        document.getElementById("message").innerHTML="42 was not in your list of numbers.";

    }
    else{
        document.getElementById("message").innerHTML="Yay! 42 was in your list of numbers.";

    }

 }