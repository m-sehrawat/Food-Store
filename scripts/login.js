import { isLogin } from "../functions/isLogin.js";
import { getItem } from "../functions/localStorage.js";

const form = document.getElementById('form');
const userData = getItem("userData") || [];


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isLogin(form, userData) === 'Empty') {
        alert(`Please fill the details`);
        
    } else if (isLogin(form, userData) === true) {
        alert(`Login Successfully`);
        window.location.href = "../index.html";

    } else {
        alert(`Please try different email or password`);
    }
});