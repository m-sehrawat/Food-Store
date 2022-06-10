import { getItem } from "../functions/localStorage.js";
import { signupForm } from "../functions/signupForm.js";

const form = document.getElementById('form');
const userData = getItem("userData");

form.addEventListener('submit', () => {
    const user = signupForm(form);

    if(user.isFilled().status){

    }
})