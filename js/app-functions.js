//Creates bootstrap cards in the container and adds recipe data to be appended to the container
const addRecipe = (cocktail) => {
    const container = document.querySelector('#render');
    const card = createCard(cocktail[0]);
    card.classList.add('my-3');
    container.appendChild(card);
};

const createCard = (cocktail) => {
    // console.log(cocktail);
    const container = document.createElement('div');
    container.className = "card";
    // wrapper.appendChild(container);

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";
    container.appendChild(cardBody);

    const cardTitle = document.createElement('h3');
    cardTitle.className = "card-title my-2";
    cardTitle.innerHTML = cocktail.name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement('h6');
    cardSubtitle.className = "card-subtitle my-2 text-muted";
    cardSubtitle.innerHTML = cocktail.tagline;
    cardBody.appendChild(cardSubtitle);

    const cardText = document.createElement('p');
    cardText.className = "card-text text-info";
    cardText.innerHTML = cocktail.description;
    cardBody.appendChild(cardText);
    
    const cardAuthor = document.createElement('p');
    cardAuthor.className = "card-text text-secondary text-right";
    cardAuthor.innerHTML = "Created By: "+cocktail.contributed_by;
    cardBody.appendChild(cardAuthor);

    return container;
}