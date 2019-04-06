class Vehicle{
    constructor(year, make, model){
        this.year = year;
        this.make = make;
        this.model = model;
        this.speed = 0;
    }
    accellerate(){
        this.speed += 5;

    }
    brake(){
        if(this.speed>5)
            this.speed -=5;
        
        else
        this.speed = 0;
    }
    getSpeed(){
        return this.speed;
    }
}

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