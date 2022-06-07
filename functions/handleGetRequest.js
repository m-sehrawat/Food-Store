import { randomNumber } from "./extraFunctions.js";

export const handleGetData = async (url) => {
    try {
        let res = await fetch(url);

        res = await res.json();

        res = res.meals;

        const data = res.map((item) => (
            {
                title: item.strMeal,
                image: item.strMealThumb,
                category: item.strCategory,
                price: +item.idMeal - 52400,
                rating: +randomNumber()
            }
        ));

        return data;

    } catch (err) {
        console.log(err);
    }
};