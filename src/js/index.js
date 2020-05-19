/////////////////////////////////////////////////
// GLOBAL APP CONTROLLER
import Search from "./models/Search";

/* Global state of the app
* -search object
* -current recipe object
* -shopping list object
* -liked recipes
*/
const state = {};

const constrolSearch = () => {

}

document.querySelector('.search').addEventListener('submit', e =>{
    e.preventDefault();
    constrolSearch();

});

const search = new Search('pizza');
console.log(search);
search.getResults();