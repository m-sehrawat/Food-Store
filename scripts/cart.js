import { getItem } from "../functions/localStorage.js";
import { appendCartData, appendCartTotal, getTotalOrderAmount } from "../functions/appendCartData.js";
import { notify } from "../components/notify.js";
import { shippingForm } from "../functions/shippingForm.js";


const display = document.getElementById("display");
const totalAmount = document.getElementById("totalAmount");
const notifyDiv1 = document.getElementById("notifyDiv1");
const notifyDiv2 = document.getElementById("notifyDiv2");
const form = document.getElementById("form");

notifyDiv1.innerHTML = notify('danger', 'Item is removed from the bag');

let cartData = getItem("cartData") || [];

getTotalOrderAmount(cartData, totalAmount);

const cartTotal = getItem('cartTotal');

appendCartData(cartData, display, totalAmount);

appendCartTotal(cartTotal, totalAmount);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = shippingForm(form);
    console.log('user:', user)
    console.log(user.isFilled().status);
    console.log(user.isFilled().message);

    if (user.isFilled().status) {
        location.href = "../html/orderPlaced.html"
        
    } else {
        notifyDiv2.innerHTML = notify('danger', user.isFilled().message, 'liveToast2');
        const toastLiveExample = document.getElementById('liveToast2');
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
    }
});
