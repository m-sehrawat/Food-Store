import { searchImage } from "../components/searchImage.js";
import { appendData } from "../functions/appendData.js";
import { handleGetData } from "../functions/handleGetRequest.js";
import { getItem } from "../functions/localStorage.js";


const display = document.getElementById("display");
const foodName = document.getElementById('foodName');
const searchPic = document.getElementById('searchPic');
let cartData = getItem("cartData") || [];
let timerId;

foodName.addEventListener('input', () => { debounce(1500) });

searchPic.innerHTML = searchImage();


async function displaySearchFood() {

    const name = foodName.value;

    if (name.length < 1) return false;

    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    const data = await handleGetData(URL);

    searchPic.innerHTML = null;

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


