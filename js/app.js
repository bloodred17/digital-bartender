const generate = document.querySelector('.generator');
generate.addEventListener('click', (event) => {
    getCocktail((error, cocktail) => {
        if(error){
            console.log(`Error: ${error}`);
        }else{
            console.log(cocktail);
            addRecipe(cocktail);
        }
    });
});