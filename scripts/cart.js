let cartDetails = JSON.parse(localStorage.getItem('cart'));
console.log('cartDetails:', cartDetails)

appendDishes(cartDetails);

function appendDishes(data) {

    let sum = 0;

    data.forEach((element, index) => {

        let { idMeal, strMeal, strCategory, strTags, strMealThumb } = element;

        let div = document.createElement('div');
        div.setAttribute('class', 'border shadow')

        let img = document.createElement('img');
        img.src = strMealThumb;
        img.setAttribute('class', 'img-fluid')

        let name = document.createElement('p');
        name.textContent = strMeal;
        name.setAttribute('class', 'ps-3 fs-4')

        let description = document.createElement('p');
        description.textContent = "Description : " + strCategory + ", " + strTags;
        description.setAttribute('class', 'ps-3')

        let price = document.createElement('p');
        price.textContent = "Price : ₹ " + (Number(idMeal) / 100);
        price.setAttribute('class', 'ps-3 fs-5')
        sum += (Number(idMeal) / 100);

        let remove = document.createElement('button');
        remove.textContent = "Remove";
        remove.setAttribute('class', 'btn btn-outline-danger ms-3 mb-3');
        remove.onclick = () => {

            let cart = JSON.parse(localStorage.getItem("cart"));

            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            location.reload();
        }

        div.append(img, name, description, price, remove)

        display.append(div);
    });

    //Order details & place order
    let totalAmount = document.getElementById('totalAmount');
    let amount = document.createElement('p');
    amount.textContent = "Total Amount : ₹ " + sum.toFixed(2);
    amount.setAttribute('class', 'fs-4')
    totalAmount.appendChild(amount);
}

//Send notifiction function
function orderDone() {

    setTimeout(() => {
        alert("Your order is confirmed");

        setTimeout(() => {
            document.body.style = "background-color:white";
            document.body.innerHTML = `<div id="orderDone"><img class="img-fluid" src="https://www.legalraasta.com/wp-content/uploads/2017/06/legalraasta.gif"></div>`

            setTimeout(() => {
                window.location.href = "index.html"
            }, 4000)
        }, 1000)
    }, 1000);
}
