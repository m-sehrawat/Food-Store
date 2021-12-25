import { showDishes, appendDishes } from "../components/show.dishes.js";


showDishes(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`).then((response) => {
    let data = response;
    console.log('data:', data)
    let display = document.getElementById("display");
    appendDishes(data, display)

}).catch((err) => {
    console.log(err);
});


