//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require("./vehicleBaseClass")

//Create a Car class that extends the Vehicle class (located in the vehicle.js).
class Car extends Vehicle {
// Add a constructor
    constructor(make, model, year, color, mileage) {
        // Add the super keyword to call the parent class constructor.
        // Add the properties listed in the Properties chart above.
        // Add the methods with psuedo logic listed in the Methods chart above.
        super(make, model, year, color, mileage, passenger) 
        this.passenger = 5
        
        
    }
    //this shows how to call from this module...
    // drive()
    // {
    //     this.Car()
    //     console.log(``)


    // }
    

}





let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage", "5");
console.log(v.make)
