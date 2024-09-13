import "./styles.css";
import {createHome, createNav} from "./home.js";
import {createMenu} from "./menu.js";
import {createAboutUs} from "./about.js";


createNav();
const content = document.querySelector('#content');

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const aboutButton = document.querySelector('#about-button');

const homeDiv = createHome();
const menuDiv = createMenu();
const aboutUsDiv = createAboutUs();


  const clearContent = () => {
    content.innerHTML = '';
  }

  const fillContent = (div = homeDiv) => {
    clearContent();
    content.appendChild(div);
  }


  fillContent();

  homeButton.onclick = () => fillContent();
  menuButton.onclick = () => fillContent(menuDiv);
  aboutButton.onclick = () => fillContent(aboutUsDiv);
  
  //Optymalizacja kodu, opublikowanie na githubie

