
const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute'
const cajas = document.getElementById("cajas");

fetch(url)

    .then((resp) => resp.json())
    .then((data) => printData(data.drinks))
    .catch((error) => console.log(error))
 

    const printData = (arr) => {
        let str = '';
        for(let i = 0; i < arr.length; i++){
            const idDrink = arr[i].idDrink
            const strDrink = arr[i].strDrink
            const strDrinkThumb = arr[i].strDrinkThumb
            str = str +  `
            <div class="tarjeta">
                    <figure>
                        <img src="${strDrinkThumb}" alt="${strDrink}" width= 150px" >
                    </figure>
                    <div class="info">
                        <p>name: ${strDrink}</p>
                        <p> id drinks: ${idDrink}</p>
                    </div>
                 </div>
              `
       }
       cajas.innerHTML = str;
}