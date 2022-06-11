import { shortString, numberWithCommas } from "./extraFunctions.js";
import { setItem } from "./localStorage.js";

export const appendCartData = (data, parent, orderTotalParent) => {

    parent.innerHTML = null;

    data.map((item, index) => {

        const { title, image, price } = item;

        const div = document.createElement('div');
        div.setAttribute('id', 'foodDiv');

        const imgDiv = document.createElement('div');
        imgDiv.setAttribute('id', 'imgDiv');

        const detailsDiv = document.createElement('div');
        detailsDiv.setAttribute('id', 'cartDetailsDiv');

        const btnDiv = document.createElement('div');
        btnDiv.setAttribute('id', 'btnDiv');

        const img = document.createElement('img');
        img.src = image;

        const name = document.createElement('p');
        name.textContent = shortString(title, 20).toUpperCase();
        name.style = 'font-weight:600; font-size:17px'

        const rate = document.createElement('p');
        rate.textContent = `₹${price}`;
        rate.style = 'color:red; font-weight:600; font-size:22px';

        const toastLiveExample = document.getElementById('liveToast');

        const removeFromCart = document.createElement('button');
        removeFromCart.textContent = "Remove";
        removeFromCart.setAttribute('class', 'btn btn-outline-danger');
        removeFromCart.addEventListener('click', () => {
            data.splice(index, 1);
            setItem("cartData", data);
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
            appendCartData(data, parent, orderTotalParent);
            getTotalOrderAmount(data, orderTotalParent);
        });

        imgDiv.append(img);
        btnDiv.append(removeFromCart);
        detailsDiv.append(name, rate);
        div.append(imgDiv, detailsDiv, btnDiv);
        parent.append(div);

    });
};


export const getTotalOrderAmount = (data, parent, discountPercent = 0) => {
    const total = data.map((e) => e.price).reduce((prev, curr) => prev + curr, 0);
    const quantity = data.length;
    const shipping = total < 999 && quantity > 0 ? 50 : 0;
    const discount = Math.floor(total * (discountPercent / 100));
    const grandTotal = total + shipping - discount;
    const cartTotal = { total, quantity, shipping, discount, grandTotal };
    setItem('cartTotal', cartTotal);
    appendCartTotal(cartTotal, parent);
};

export const appendCartTotal = ({ total, quantity, shipping, discount, grandTotal }, parent) => {
    parent.innerHTML = null;

    const cartDiv1 = document.createElement('div');
    const cartTotal1 = document.createElement('p');
    cartTotal1.innerText = `Food Cost:`;
    const cartTotal2 = document.createElement('p');
    cartTotal2.innerText = `₹${numberWithCommas(total)}`;
    cartDiv1.append(cartTotal1, cartTotal2);
    cartDiv1.setAttribute('class', 'cartFontDiv');

    const cartDiv2 = document.createElement('div');
    const cartQuantity1 = document.createElement('p');
    cartQuantity1.innerText = `Food Items:`;
    const cartQuantity2 = document.createElement('p');
    cartQuantity2.innerText = `${quantity}`;
    cartDiv2.append(cartQuantity1, cartQuantity2);
    cartDiv2.setAttribute('class', 'cartFontDiv');

    const cartDiv3 = document.createElement('div');
    const shippingCharges1 = document.createElement('p');
    shippingCharges1.innerText = `Shipping charge:`;
    const shippingCharges2 = document.createElement('p');
    shippingCharges2.innerText = `₹${shipping}`;
    cartDiv3.append(shippingCharges1, shippingCharges2);
    cartDiv3.setAttribute('class', 'cartFontDiv');

    const cartDiv4 = document.createElement('div');
    const discountTotal1 = document.createElement('p');
    discountTotal1.innerText = `Discount:`;
    const discountTotal2 = document.createElement('p');
    discountTotal2.innerText = `₹${numberWithCommas(discount)}`;
    cartDiv4.append(discountTotal1, discountTotal2);
    cartDiv4.setAttribute('class', 'cartFontDiv');

    const cartDiv5 = document.createElement('div');
    const finalTotal1 = document.createElement('p');
    finalTotal1.innerText = `Grand Total:`;
    const finalTotal2 = document.createElement('p');
    finalTotal2.innerText = `₹${numberWithCommas(grandTotal)}`;
    cartDiv5.append(finalTotal1, finalTotal2);
    cartDiv5.setAttribute('class', 'cartFontDiv');

    parent.append(cartDiv1, cartDiv2, cartDiv3, cartDiv4, cartDiv5);
};