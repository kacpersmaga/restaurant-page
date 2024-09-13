export const createHome = () => {
    const homeContainer = document.createElement('div');
    homeContainer.id = 'home-container';
    // Create heading elements
    const nameIntro = document.createElement('h3');
    const restaurantName = document.createElement('h1');
  
    nameIntro.textContent = 'The pure taste of';
    restaurantName.textContent = 'Bella Tavola';
  
    // Append heading elements to the content element
    homeContainer.appendChild(nameIntro);
    homeContainer.appendChild(restaurantName);
    return homeContainer
  };

  export const createNav = () => {
    const nav = document.querySelector('nav');
  
   // Create button elements
   const homeButton = document.createElement('button');
   const menuButton = document.createElement('button');
   const aboutButton = document.createElement('button');
 
   // Set button IDs (use element.id instead of setAttribute for simplicity)
   homeButton.id = 'home-button';
   menuButton.id = 'menu-button';
   aboutButton.id = 'about-button';
  
    // Set button text content (optional)
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    aboutButton.textContent = 'About';
  
    // Append buttons to the nav element
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

  };

