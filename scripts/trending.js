import { notify } from "../components/notify.js";
import { appendData } from "../functions/appendData.js";
import { handleGetData } from "../functions/handleGetRequest.js";
import { getItem, setItem } from "../functions/localStorage.js";
import { showTotal } from "../functions/showTotal.js";


const display = document.getElementById("display");
const totalFood = document.getElementById("totalFood");
const notifyDiv = document.getElementById("notifyDiv");
const trendingBtn = document.getElementsByName('trendingBtn');
notifyDiv.innerHTML = notify('success', 'Item is added to the bag');

for (let btn of trendingBtn) {
    btn.addEventListener('click', () => { displayFoodItem(btn.value) });
}


async function displayFoodItem(name = 'b') {

    const DISH_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    let dishData = await handleGetData(DISH_URL);
    setItem('trending', dishData)
    let cartData = getItem("cartData") || [];

    appendData(dishData, display, cartData);

    showTotal(dishData, totalFood);


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

    document.getElementById("reset").addEventListener("click", () => {
        dishData = getItem('trending');
        appendData(dishData, display, cartData);
    });
}

displayFoodItem();




