let box = document.getElementById("hi");

import tag from '../components/navbar.js';

tag().then((res) => {
    box.innerHTML = res;
});