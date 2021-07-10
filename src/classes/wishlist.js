import Car from "./car";

class WishList {                                                    //create class WishList
    constructor()
    {
       this.list = [];
       this.nextId = 0;                                             //when add a car it will be given an id so if want to delete one you can 
    }
    
    add (make, model, year)
    {
        let car = new Car (this.nextId++, make, model, year);       //this give the car an id when add it to the wish list same as this.nextID++; this.list.push(car);
        this.list.push(car);                                        //adds an id property to each car that is added to the list push will allow to push it to the car
        this.updateDOMWishList();                                   //update the DOM every time a car is added to the wishlist 
    }

    remove (carId)                                                  //how to remove a car. need to differentiate between cars added to list
    {    
        this.list = this.list.filter((car) => car.id != carId);     //but this will filter the car ID to remove it  using delete this.list[carId];  will remove the car from the array if already have it
        this.updateDOMWishList();                                  //update the DOM every time a car is removed from the wishlist
        document.getElementById("car-make").textContent = "";       //once remove car also remvoe from the vehicle list
        document.querySelector("#car-model").textContent = ""; 
        document.querySelector("#car-year").textContent = "";            
        document.querySelector("#car-card").setAttribute("data-carId", "");

        if (this.list.length == 0)
        {
            document.querySelector(".removeBtn").disabled = true;      //if no vehicle in the wish list dont' allow the button to be pushed
        }
    }

    updateDOMWishList()
    {                                                                 //users able to view the cars in the WishList from the document, account for this functionality of displaying and updating the DOM
        let container = document.querySelector("#wishListContainer"); //where wishListContainer is an id and to call it you will need the # infront when in JS
        let ul = document.querySelector("ul");
        ul.innerHTML = "";
        this.list.forEach((car) =>                                     //loop through cars and append to the list group
        {   
            let li = document.createElement("li");
            li.id = car.id;
            li.textContent = car.model;
            li.addEventListener("click", () => 
            {        
                document.querySelector(".removeBtn").disabled = false;   
                car.info();
            });
            ul.appendChild(li);
        }); 
        container.appendChild(ul);
    }   
}

export default WishList;