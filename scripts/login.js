import { createToken } from "../functions/extraFunctions.js";
import { isLogin } from "../functions/isLogin.js";
import { getItem, setItem } from "../functions/localStorage.js";

const form = document.getElementById('form');
const userData = getItem("userData") || [];


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const result = isLogin(form, userData);

    if (result.status === 'Empty') {
        alert(`Please fill the details`);
        
    } else if (result.status === true) {
        setItem('token', createToken());
        setItem('user', result.user);
        alert(`Login Successfully`);
        window.location.href = "../index.html";

    } else {
        alert(`Please try different email or password`);
    }
});