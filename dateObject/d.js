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

Date.prototype.getYesterday = function(){
	var yesterday = this.getDay() - 1;
	var dayOfTheWeek = new Array(7);
	dayOfTheWeek[0]="Sunday";
	dayOfTheWeek[1]="Monday";
	dayOfTheWeek[2]="Tuesday";
	dayOfTheWeek[3]="Wednesday";
	dayOfTheWeek[4]="Thursday";
	dayOfTheWeek[5]="Friday";
	dayOfTheWeek[6]="Saturday";
	console.log(dayOfTheWeek[yesterday]);
	return dayOfTheWeek[yesterday];

}
	function getToday(){
	var d1 = new Date();
	console.log(d1);
	document.getElementById("demo").innerHTML += d1.toString();


}

getToday();
getValentines();
getSevenDate();
getTodaysName();
var myDate = new Date();
myDate.getYesterday();
document.getElementById("demo2").innerHTML=("<p>Yesterday was " + myDate.getYesterday() + "</p>");


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











