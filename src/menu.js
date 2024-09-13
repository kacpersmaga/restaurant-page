const makeMenuItem = (name, ingredients, wine="") => ({ name, ingredients, wine });


const menu = [
    makeMenuItem("stuzzichini", 
        'Pizza shoot, fake tomato, Eggs "carbonara", crab salad', 
        "Bisol, Belstar Prosecco Brut DOC, Valdobbiadene"
    ),
    makeMenuItem("antipasti", 
        "local prawns, parsnip and mango"
    ),
    makeMenuItem("zuppe", 
        "pumpkin soup, truffle oil and parmesan", 
        "Michele Chiarlo Palas Gavi, Piemonte"
    ),
    makeMenuItem("primi", 
        'Pasta "calamarata" seafood and white beans', 
        "J. Hofstatter Meczan Pinot Nero, DOC, Trentino-Alto Adige"
    ),
    makeMenuItem("secondi", 
        'Hamachi, bean needle and "cacciucco" sauce', 
        "Montepulciano d'Abruzzo DOC, Abruzzo"
    ),
    makeMenuItem("dolci", 
        "Sbrisolona cake, ricotta ice cream, pear and chianti"
    )
]

export const createMenu = () => {
    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "Menu";
    
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu";

    menu.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");  

        const mealName = document.createElement("p");
        const ingredients = document.createElement("p");
        const wine = document.createElement("p");

        mealName.textContent = item.name;
        ingredients.textContent = item.ingredients;
        wine.textContent = item.wine;
        mealName.id = "meal-name";

        menuItem.appendChild(mealName);
        menuItem.appendChild(ingredients);
        menuItem.appendChild(wine);
        menuDiv.appendChild(menuItem);
    });

    return menuDiv;
};