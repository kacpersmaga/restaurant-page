import "./styles.css";
import { createHome, createNav } from "./home.js";
import { createMenu } from "./menu.js";
import { createAboutUs } from "./about.js";

// Initialize Navigation and Content
createNav();
const content = document.querySelector("#content");

// Object storing pages for easy reference
const pages = {
  home: createHome(),
  menu: createMenu(),
  about: createAboutUs(),
};

// Reusable function to manage content
const setPageContent = (page) => {
  content.innerHTML = ""; // Clear content
  content.appendChild(pages[page] || pages.home); // Append chosen or default page
};

// Set initial content to 'home'
setPageContent("home");

// Event Listener for navigation
document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const pageId = e.target.id.replace("-button", ""); // Extract page name from button ID
    setPageContent(pageId);
  }
});
