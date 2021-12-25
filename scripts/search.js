import { showDishes, appendDishes } from "../components/show.dishes.js";

let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getRequest)


async function getRequest() {

    let foodName = document.getElementById('foodName').value;

    showDishes(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodName}`).then((response) => {

        let data = response;

        let display = document.getElementById("display");

        appendDishes(data, display)

    }).catch((err) => {

        console.log(err);

        let error = document.createElement('img');

        error.src = 'https://www.waterandshark.com/assets/img/icons/noresult.gif';

        let display = document.getElementById("display");

        display.innerHTML = null;

        display.append(error);
    });
}