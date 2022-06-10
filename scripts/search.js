import { appendData } from "../functions/appendData.js";
import { handleGetData } from "../functions/handleGetRequest.js";
import { getItem } from "../functions/localStorage.js";


const display = document.getElementById("display");
const foodName = document.getElementById('foodName');
let cartData = getItem("cartData") || [];
let timerId;

foodName.addEventListener('input', () => { debounce(2000) });


async function displaySearchFood() {

    const name = foodName.value;

    if (name.length < 2) return false;

    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    const data = await handleGetData(URL);

    appendData(data, display, cartData);
}


function debounce(delay) {

    if (timerId) {
        clearInterval(timerId);
    }

    timerId = setTimeout(() => {
        displaySearchFood();
    }, delay);
}


