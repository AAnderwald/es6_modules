class car {
    constructor (make, model, year) { 
        this.make = make;       //assign value as properites iwht same name:
        this.model = model;
        this.year = year;
    }

}

info () {
    document.getElementById("car-make").textContent = this.make;
    document.getElementById("car-model").textContent = this.model;
    document.getElementById("car-year").textContent = this.year;   
}

export default car;