import { appendData } from "../functions/appendData.js";
import { handleGetData } from "../functions/handleGetRequest.js";
import { getItem, setItem } from "../functions/localStorage.js";


const DISH_URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=c`;

const display = document.getElementById("display");



async function displayFoodItem() {

    if (!getItem("food")) {
        setItem("food", await handleGetData(DISH_URL));
    }

    const dishData = getItem("food") || [];

    appendData(dishData, display);

    document.getElementById("sortLH").addEventListener("click", () => {
        dishData.sort((a, b) => a.price - b.price);
        appendData(dishData, display);
    });

    document.getElementById("sortHL").addEventListener("click", () => {
        dishData.sort((a, b) => b.price - a.price);
        appendData(dishData, display);
    });
    document.getElementById("ratingLH").addEventListener("click", () => {
        dishData.sort((a, b) => a.rating - b.rating);
        appendData(dishData, display);
    });

    document.getElementById("ratingHL").addEventListener("click", () => {
        dishData.sort((a, b) => b.rating - a.rating);
        appendData(dishData, display);
    });

}

displayFoodItem();




