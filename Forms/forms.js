


/**
 * displayInfo function gets info 
 * from the form and outputs it to 
 * the screen.
 */
function displayInfo(){
    //multiple ways to do this.
    //1 - document.formName.inputTextId.value
    //2 - document.getElementById().value
    //3 - document.forms then use bracket notation with the 
    //form name, the id, and .value

    var fName = document.myForm.firstName.value;
    var lName = document.getElementById("lastName").value;
    var num1 = parseInt(document.forms["myForm"]["num1"].value);
    var num2 = parseInt(document.myForm.num2.value);

    if(fName == "" || lName == ""){
        document.getElementById("message").innerHTML="First name and Last name are required.";
    } 
    else if(isNaN(num1) || isNaN(lName)){
        document.getElementById("message").innerHTML="Number 1 and Number 2 must be numbers.";
    }
    else{
        document.getElementById("message").innerHTML = "Hello " + fName + " " + lName + ", the product of the two numbers is " + (num1*num2);
    }

   
    
}