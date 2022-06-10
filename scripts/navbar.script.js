import { navigationBar } from "../components/navbar.js";
import { getItem, removeItem } from "../functions/localStorage.js";


const navbar = document.getElementById("navbar");

displayNavbar();

if (getItem('token')) {
    document.getElementById("logoutBtn").addEventListener('click', () => {
        removeItem('token');
        alert(`Logout Successfully`);
        displayNavbar();
    });
}


function displayNavbar() {
    const token = getItem('token');
    const name = getItem('user')?.name;
    navbar.innerHTML = navigationBar(token, name);
}