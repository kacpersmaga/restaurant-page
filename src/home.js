export const createHome = () => {
    const homeContainer = document.createElement('div');
    homeContainer.id = 'home-container';
    // Create heading elements
    const nameIntro = document.createElement('h3');
    const restaurantName = document.createElement('h1');
  
    nameIntro.textContent = 'The pure taste of';
    restaurantName.textContent = 'Bella Tavola';
  
    // Append heading elements to the content element
    homeContainer.append(nameIntro, restaurantName);
    return homeContainer
  };

  export const createNav = () => {
    const nav = document.querySelector('nav');
    const buttons = [
      { id: 'home-button', text: 'Home' },
      { id: 'menu-button', text: 'Menu' },
      { id: 'about-button', text: 'About' }
    ];
  
    buttons.forEach(({ id, text }) => {
      const button = document.createElement('button');
      button.id = id;
      button.textContent = text;
      nav.appendChild(button);
    });
  };

