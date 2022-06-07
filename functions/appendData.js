import { shortString } from "./extraFunctions.js";

export const appendData = (data, parent) => {

    parent.innerHTML = null;

    data.map((item) => {

        const { title, image, price, category, rating } = item;

        const div = document.createElement('div');
        div.setAttribute('id', 'foodDiv');

        const imgDiv = document.createElement('div');
        imgDiv.setAttribute('id', 'imgDiv');

        const detailsDiv = document.createElement('div');
        detailsDiv.setAttribute('id', 'detailsDiv');

        const btnDiv = document.createElement('div');
        btnDiv.setAttribute('id', 'btnDiv');

        const img = document.createElement('img');
        img.src = image;
        
        const name = document.createElement('p');
        name.textContent = shortString(title, 20).toUpperCase();
        name.style = 'font-weight:600; font-size:17px'

        const foodCategory = document.createElement('p');
        foodCategory.textContent = category;
        foodCategory.style = 'color:gray; font-size:14px'

        const rate = document.createElement('p');
        rate.textContent = `₹${price}`;
        rate.style = 'color:red; font-weight:600; font-size:22px';

        const foodRating = document.createElement('p');
        foodRating.textContent = `Rating: ${rating}`;
        foodRating.style = 'color:gray; font-size:14px'

        const addToCart = document.createElement('button');
        addToCart.textContent = "Add to cart"
        addToCart.setAttribute('class', 'btn btn-outline-success')

        
        imgDiv.append(img);
        btnDiv.append(addToCart);
        detailsDiv.append(name, foodCategory, rate, foodRating);
        div.append(imgDiv, detailsDiv, btnDiv)
        parent.append(div);
    });

    // //LocalStorage 
    // if (localStorage.getItem('cart') === null) {
    //     localStorage.setItem('cart', JSON.stringify([]));
    // }

    // //Function for storing added to cart products details
    // function cartDetails(element) {

    //     const cartProducts = JSON.parse(localStorage.getItem('cart'));

    //     cartProducts.push(element);

    //     localStorage.setItem('cart', JSON.stringify(cartProducts));
    // }
}
