/**
 * 
 * reverse takes a string and reverses it.
 * @param - myString - a string to be reversed
 * @returns a string
 */

function revStr(myString){
    var newString = "";
    for(let i=0; i<myString.length; i++){
        newString += myString.charAt(myString.length-i-1);

    }
    return newString;
}
console.log(revStr("sldkfjslkdjfsldkfj"));
