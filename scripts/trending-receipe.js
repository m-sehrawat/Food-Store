import { showDishes, appendDishes } from "../components/show.dishes.js";


showDishes(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`).then((response) => {

    let data = response;

    let display = document.getElementById("display");

    appendDishes(data, display)

}).catch((err) => {

    console.log(err);

    let error = document.createElement('img');

    error.src = 'https://www.waterandshark.com/assets/img/icons/noresult.gif';

    let display = document.getElementById("display");

    display.append(error);
});