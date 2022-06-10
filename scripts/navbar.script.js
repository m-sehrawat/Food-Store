import { navigationBar } from "../components/navbar.js";
import { getItem } from "../functions/localStorage.js";

const navbar = document.getElementById("navbar");

const token = getItem('token');
const name = getItem('user')?.name;

navbar.innerHTML = null;
navbar.innerHTML = navigationBar(token, name);