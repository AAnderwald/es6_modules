class wishList {
   constructor(){
       this.list = [];

    add (car) {
        car.id = this.nextID++; //adds an id property to each car that is added to the list
        this.list.push(car); 
    }

    remove (car) {
       
    }
}


export default wishList;