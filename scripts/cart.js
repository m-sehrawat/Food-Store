import { getItem } from "../functions/localStorage.js";
import { appendCartData } from "../functions/appendCartData.js";
import { notify } from "../components/notify.js";


const display = document.getElementById("display");
const notifyDiv = document.getElementById("notifyDiv");

notifyDiv.innerHTML = notify('danger', 'Item is added to the cart');

let cartData = getItem("cartData") || [];

appendCartData(cartData, display);
