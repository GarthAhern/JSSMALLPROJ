/*
Create a parent class called Vehicle
Contains year, make, model, and speed
Includes methods to accellerate which
adds 5 to speed each time it is called
includes method to brake which subtracts 5
Includes getSpeed method

Create a class called Van that extends Vehicle
Van has all the things vehicle has except when it 
accellerates it only adds 3 to speed, and it has 
a property passengers=8

Create a class called SportsCar that extends vehicle
Sportscar accellerates by 10 and has 2 passengers
*/

class Vehicle{

	constructor(year, make, model){
	this.year = year;
	this.make = make;
	this.model = model;
	this.speed = 0;
	}
	

	accellerate(){
		this.speed+=5;
	};
	brake(){
		if (this.speed>5){
			this.speed -= 5}
		else
			{this.speed = 0};
		
	};
	getSpeed(){
		return this.speed;
	};
};

class Van extends Vehicle{

	constructor(year, make, model){
		super(year, make, model);
		this.passengers = 8;

	}
	accellerate(){
		this.speed += 3;
	}

}

class SportsCar extends Vehicle{
	constructor(year, make, model){
		super(year, make, model);
		this.passengers = 2;

	}
	accellerate(){
		this.speed += 10;
	}
}

var MiniVan = new Van(2018, "Dodge", "Caravan");
MiniVan.accellerate();
MiniVan.accellerate();
MiniVan.accellerate();
MiniVan.brake();
console.log(MiniVan.getSpeed());