import { appendData } from "../components/appendData.js";
import { handleGetData } from "../components/handleGetRequest.js";
import { getItem, setItem } from "../components/localStorage.js";
// import { showDishes, appendDishes } from "../components/show.dishes.js";

const DISH_URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=c`;
const display = document.getElementById("display");

async function displayFoodItem() {

    if (!getItem("food")) {
        setItem("food", await handleGetData(DISH_URL));
    }

    const dishData = getItem("food") || [];

    console.table(dishData[0]);

    appendData(dishData, display);
}



displayFoodItem();


// showDishes(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`).then((response) => {

//     let data = response;

//     let display = document.getElementById("display");

//     appendDishes(data, display)

// }).catch((err) => {

//     console.log(err);

//     let error = document.createElement('img');

//     error.src = 'https://www.waterandshark.com/assets/img/icons/noresult.gif';

//     let display = document.getElementById("display");

//     display.innerHTML = null;

//     display.append(error);
// });


