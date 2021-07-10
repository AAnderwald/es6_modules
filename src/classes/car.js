class Car                                           //create a class called car
{
    constructor(id, make, model, year)              //constructor taking in make, model, year
    { 
        this.id = id;                         
        this.make = make;                            //assign value as properites with same name:
        this.model = model;
        this.year = year;
    }
    
    info () 
    {
        document.getElementById("car-make").textContent = this.make;            //these are the ids from index html lines 52, 53, 54
        document.querySelector("#car-model").textContent = this.model;          //this.make model is from above
        document.querySelector("#car-year").textContent = this.year;            //display the cars make model and year
        document.querySelector("#car-card").setAttribute("data-carId", this.id);
    }
}



export default Car;