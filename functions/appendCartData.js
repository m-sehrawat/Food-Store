import { shortString } from "./extraFunctions.js";
import { setItem } from "./localStorage.js";

export const appendCartData = (data, parent, orderTotalParent) => {

    parent.innerHTML = null;

    data.map((item, index) => {

        const { title, image, price, category, rating } = item;

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
        removeFromCart.textContent = "Remove from cart";
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
}


export const getTotalOrderAmount = (data, parent) => {
    const total = data.map((e) => e.price).reduce((prev, curr) => prev + curr, 0);
    const quantity = data.length;
    const cartTotal = { total, quantity };
    setItem('cartTotal', cartTotal);
    appendCartTotal(cartTotal, parent);
}

export const appendCartTotal = ({ total, quantity }, parent) => {
    parent.innerHTML = null;
    const cartTotal = document.createElement('p');
    cartTotal.innerText = `Total: ${total}`
    const cartQuantity = document.createElement('p');
    cartQuantity.innerText = `Quantity: ${quantity}`
    parent.append(cartTotal, cartQuantity);
}