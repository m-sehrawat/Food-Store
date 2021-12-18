let navbar = document.getElementById("navbar");

import navigationBar from '../components/navbar.js';

navigationBar().then((res) => {
    navbar.innerHTML = res;
});