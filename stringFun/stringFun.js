function getName(){
    var name = prompt("What is your full name?");
    return name;
}


/**
 * stringConvert converts name to lowercase, and checks if "in" is in.
 * @param String - name
 * 
 * 
 */

 function stringConvert(name){
    name = name.toLowerCase();
    if(name.indexOf("in")>-1){
        document.getElementById("message").innerHTML = "'in' is in " + name;
    }
    else{
        document.getElementById("message").innerHTML = "'in' is not in " + name;
    }
 }