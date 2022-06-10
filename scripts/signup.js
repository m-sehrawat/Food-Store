import { createToken } from "../functions/extraFunctions.js";
import { getItem, setItem } from "../functions/localStorage.js";
import { signupForm } from "../functions/signupForm.js";

const form = document.getElementById('form');
const userData = getItem("userData") || [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = signupForm(form);

    if(user.isFilled().status){
        userData.push(user);
        setItem('user', user);
        setItem('token', createToken());
        setItem('userData', userData);
        setItem('token', createToken());
        alert("Account created successfully");
        window.location.href = ".././index.html";
    } else {
        alert(user.isFilled().message);
    }
});