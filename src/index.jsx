import WishList from "./classes/wishlist";                      //need to add classes because it's in a folder one set past the index.js

let form = document.querySelector("#submitForm");

let wishlist = new WishList ();                                 //initialze the wishlist

form.addEventListener("submit", (event) =>                      //submit event in form when fill it out to the wish list
{
    event.preventDefault();

    let make = event.target[0].value;
    let model = event.target[1].value;
    let year = event.target[2].value;

    wishlist.add(make, model, year);                            //subist form call wishlist.add that is set up to take thw make model and year
   
});

document.querySelector(".removeBTN").addEventListener("click", (event) =>
{
    let carId = event.target.parentElement.getAttribute("data-carId");
    wishlist.remove(carId);                                      //call wishlist.remove
});




