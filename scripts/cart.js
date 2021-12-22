let cartDetails = JSON.parse(localStorage.getItem('cart'));

appendDishes(cartDetails);

function appendDishes(data) {

    let sum = 0;

    data.forEach((element) => {

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

        div.append(img, name, description, price)

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
function sendAlerts() {

    setTimeout(() => {
        alert(`Your order is accepted`)
    }, 0);

    setTimeout(() => {
        alert(`Your order is being cooked`)
    }, 3000);

    setTimeout(() => {
        alert(`Your order is ready`)
    }, 8000);

    setTimeout(() => {
        alert(`Order out for delivery`)
    }, 10000);

    setTimeout(() => {
        alert(`Order delivered`)
    }, 12000);
}
