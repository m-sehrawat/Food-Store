import { getItem } from "../functions/localStorage.js";
import { appendCartData, appendCartTotal, getTotalOrderAmount } from "../functions/appendCartData.js";
import { notify } from "../components/notify.js";


const display = document.getElementById("display");
const totalAmount = document.getElementById("totalAmount");
const notifyDiv = document.getElementById("notifyDiv");

notifyDiv.innerHTML = notify('danger', 'Item is added to the cart');

let cartData = getItem("cartData") || [];

getTotalOrderAmount(cartData, totalAmount);

const cartTotal = getItem('cartTotal');
console.log('cartTotal:', cartTotal)

appendCartData(cartData, display, totalAmount);

appendCartTotal(cartTotal, totalAmount);
