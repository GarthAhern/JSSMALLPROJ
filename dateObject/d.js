/*
Displaying current date and time:
-Create a new Instance of the Date object
-Display it in a paragraph, with id="demo"
using d1.toString()

Display a particular date and time:
-Create a new instance of the Date object,
passing in "February 14, 2018 16:00:00"
-Display it in a paragraph with id="demo" 
using d2.toUTCString()

Display a date and time a certain number of 
milliseconds after January 1, 1970 00:00:00
-Create a new instance of the Date object
passing "Math.pow(10,12)"
-Display it in a paragraph with id="demo" using d3.toDateString()
*/

//1
window.onload = function(){


	function getToday(){
	var d1 = new Date();
	console.log(d1);
	document.getElementById("demo").innerHTML += d1.toString();


}

getToday();
getValentines();
getSevenDate();
getTodaysName();

//2
function getValentines(){
	var d1 = new Date("February 14, 2018 16:00:00");
	document.getElementById("demo").innerHTML +="<br>" + d1.toString();
}

function getSevenDate(){
	var d1 = new Date(2010, 0, 17, 13, 27, 15, 15);
	document.getElementById("demo").innerHTML +="<br>" + d1.toString();

}

function getTodaysName(){
	var d1 = new Date();
	var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	document.getElementById("demo").innerHTML+="<br>Today's Day is " + daysOfWeek[d1.getDay()];
}






}











