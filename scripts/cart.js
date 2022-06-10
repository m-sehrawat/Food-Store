import { getItem } from "../functions/localStorage.js";
import { appendCartData, appendCartTotal, getTotalOrderAmount } from "../functions/appendCartData.js";
import { notify } from "../components/notify.js";
import { shippingForm } from "../functions/shippingForm.js";


const display = document.getElementById("display");
const totalAmount = document.getElementById("totalAmount");
const notifyDiv = document.getElementById("notifyDiv");
const form = document.getElementById("form");

notifyDiv.innerHTML = notify('danger', 'Item is added to the cart');

let cartData = getItem("cartData") || [];

getTotalOrderAmount(cartData, totalAmount);

const cartTotal = getItem('cartTotal');

appendCartData(cartData, display, totalAmount);

appendCartTotal(cartTotal, totalAmount);

form.addEventListener('submit', (e) => { 
    e.preventDefault();
   const user = shippingForm(form);
   console.log('user:', user)
   console.log('user:', user.isFilled())
 })
