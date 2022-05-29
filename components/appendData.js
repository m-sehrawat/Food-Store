export const appendData = (data, parent) => {

    parent.innerHTML = null;

    data.map((item) => {

        const { title, image, price, category } = item;

        const div = document.createElement('div');

        const imgDiv = document.createElement('div');
        imgDiv.setAttribute('id', 'imgDiv');

        const detailsDiv = document.createElement('div');
        detailsDiv.setAttribute('id', 'detailsDiv');

        const btnDiv = document.createElement('div');
        btnDiv.setAttribute('id', 'btnDiv');

        const img = document.createElement('img');
        img.src = image;
        imgDiv.append(img);

        const name = document.createElement('p');
        name.textContent = title;
        name.setAttribute('class', 'ps-3 fs-5')

        const rate = document.createElement('p');
        rate.textContent = `₹ ${price}`;
        rate.setAttribute('class', 'ps-3 fs-5')

        detailsDiv.append(name, rate)

        const addToCart = document.createElement('button');
        addToCart.textContent = "Add to Cart";
        addToCart.setAttribute('class', 'btn btn-outline-danger ms-3 mb-3');

        btnDiv.append(addToCart)

        // addToCart.onclick = () => {
        //     cartDetails(item);
        //     alert("Porduct is added to cart");
        // }

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
