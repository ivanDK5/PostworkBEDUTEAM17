import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const searchInput = document.getElementById('search');
const searchButton = document.getElementById('btn_buscar');
const randomButton = document.getElementById('btn_random');
const receta = document.getElementById('receta');
const results = document.getElementById('card-group');
const ingredientes = document.getElementById('ingredientes');

function buildUrl(search) {
    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';
    return `${baseUrl}?s=${search}`;
}

function formatSearchString(search) {
    return search.replace(/ /g, '+');
}

async function getMealsResults(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data.meals;
    } catch (err) {
        console.log(err);
    }
}

async function searchMeals() {
    const search = searchInput.value;

    if (search) {
        const formattedSearch = formatSearchString(search);
        const url = buildUrl(formattedSearch);
        console.log(url);

        const gifs = await getMealsResults(url);
        // console.log(gifs);
        // console.log(typeof gifs);
        gifs.forEach(function (gif) {
            const div = document.createElement('div');
            div.className = "card";
            const anchor = document.createElement('a');
            var img = document.createElement('img');
            img.src = gif.strMealThumb;
            img.className = "card-img-top";
            const mealName = gif.strMeal;
            img.alt = gif.idMeal;
            anchor.href = recipeMeal(img.alt);
            anchor.appendChild(img);
            div.appendChild(anchor);
            const divBody = document.createElement('div');
            divBody.className = "card-body";
            const h5 = document.createElement('h5');
            h5.className = "card-title";
            h5.textContent = mealName;
            divBody.appendChild(h5);
            div.appendChild(divBody);
            results.appendChild(div);
        });
    }
}

async function randomMeals() {

    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    console.log(url);

    const gifs = await getMealsResults(url);
    console.log(gifs);
    // console.log(typeof gifs);
    gifs.forEach(function (gif) {
        const div = document.createElement('div');
        div.className = "card";
        const anchor = document.createElement('a');
        var img = document.createElement('img');
        img.src = gif.strMealThumb;
        img.className = "card-img-top";
        const mealName = gif.strMeal;
        img.alt = gif.idMeal;
        anchor.href = recipeMeal(img.alt);
        anchor.appendChild(img);
        div.appendChild(anchor);
        const divBody = document.createElement('div');
        divBody.className = "card-body";
        const h5 = document.createElement('h5');
        h5.className = "card-title";
        h5.textContent = mealName;
        divBody.appendChild(h5);
        div.appendChild(divBody);
        results.appendChild(div);
    });
}


searchButton.addEventListener('click', searchMeals);
randomButton.addEventListener('click', randomMeals);

async function recipeMeal(id) {

    const link = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
    console.log(link);

    const gifs = await getMealsResults(link);
    // console.log(gifs);
    // console.log(typeof gifs);
    console.log(gifs[0].strMeal);
    let h1 = document.createElement('h1');
    h1.textContent = "Receta " + gifs[0].strMeal;
    receta.appendChild(h1);
    let h2 = document.createElement('h2');
    h2.textContent = "Ingredientes";
    receta.appendChild(h2);

    gifs.forEach(function (gif) {
        const div = document.createElement('div');
        div.className = "card";
        const divBody = document.createElement('div');
        divBody.className = "card-body";
        let h5 = document.createElement('h5');
        h5.className = "card-title";
        h5.textContent = gif.strIngredient1;
        divBody.appendChild(h5);
        div.appendChild(divBody);
        receta.appendChild(div);
        let strIngredient2 = document.createElement('h5');
        strIngredient2.textContent = gif.strIngredient2;
        divBody.appendChild(strIngredient2);
        div.appendChild(divBody);
        receta.appendChild(div);
        let strIngredient3 = document.createElement('h5');
        strIngredient3.textContent = gif.strIngredient3;
        divBody.appendChild(strIngredient3);
        div.appendChild(divBody);
        receta.appendChild(div);
        let strIngredient4 = document.createElement('h5');
        strIngredient4.textContent = gif.strIngredient4;
        divBody.appendChild(strIngredient4);
        div.appendChild(divBody);
        receta.appendChild(div);
        let strIngredient5 = document.createElement('h5');
        strIngredient5.textContent = gif.strIngredient5;
        divBody.appendChild(strIngredient5);
        div.appendChild(divBody);
        receta.appendChild(div);
        let strIngredient6 = document.createElement('h5');
        strIngredient6.textContent = gif.strIngredient6;
        divBody.appendChild(strIngredient6);
        div.appendChild(divBody);
        receta.appendChild(div);
        let strIngredient7 = document.createElement('h5');
        strIngredient7.textContent = gif.strIngredient7;
        divBody.appendChild(strIngredient7);
        div.appendChild(divBody);
        receta.appendChild(div);
        const p = document.createElement('p');
        console.log(gif.strInstructions);
        const instrucciones = document.createTextNode(gif.strInstructions);
        p.appendChild(instrucciones);
        receta.appendChild(p);
    });

}