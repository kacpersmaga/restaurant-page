# Restaurant Page Project

## Overview

This project is a dynamic, multi-page restaurant website built using JavaScript, DOM manipulation, and Webpack. It was designed to practice and learn how to structure a project with modular JavaScript files and Webpack. The project includes a home page, a menu page, and an about page, allowing users to easily navigate between them using a simple navigation bar.

## Features

- **Modular JavaScript**: The project follows a modular structure with separate files for UI components, repository handling, and data models.
- **Single Page Application (SPA)**: The website content updates dynamically without reloading the page using DOM manipulation.
- **Navigation**: The navigation bar allows users to switch between Home, Menu, and About pages.
- **Task UI (Extra)**: A task management interface for adding, displaying, and interacting with tasks, used for learning DOM events and JavaScript object handling.

## Project Structure

```
.
├── dist/                   # Compiled files
├── src/
│   ├── index.js            # Entry point for the application
│   ├── home.js             # Home page component
│   ├── menu.js             # Menu page component
│   ├── about.js            # About page component
│   ├── models/
│   │   └── Task.js         # Task model for task management feature
│   ├── repositories/
│   │   └── ProjectRepository.js # Repository for handling project and task data
│   ├── styles.css          # CSS styling
│   └── taskUI.js           # UI rendering and event handling for tasks
├── webpack.config.js       # Webpack configuration file
└── index.html              # HTML template
```

## Pages

- **Home Page**: Displays a welcome message and restaurant name.
- **Menu Page**: Lists several menu items with descriptions and optional wine pairings.
- **About Page**: Shows information about the restaurant's background and ethos.

## Additional Task Management Feature

The `taskUI.js` file includes an extra feature for task management that demonstrates advanced DOM manipulation:

- **Add New Tasks**: Users can add tasks with a name, due date, and priority.
- **Task Rendering**: Tasks are dynamically displayed with details like due date and priority.
- **Task Completion**: Users can mark tasks as completed, and the UI updates accordingly.
- **Task Filtering**: Includes filtering options for "All Tasks," "Today's Tasks," and "Completed Tasks."

## Screenshots

![image](https://github.com/user-attachments/assets/62725dae-68fd-4a24-bae2-dfb49f8ecc1e)


## Technologies Used

- **JavaScript (ES6+)**: Main programming language used.
- **Webpack**: Module bundler for compiling JavaScript files.
- **CSS**: Styling for the UI.
- **HTML**: Basic structure of the webpage.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/to-do/restaurant-page.git
   cd restaurant-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the project in development mode:
   ```bash
   npm start
   ```

4. Build the project for production:
   ```bash
   npm run build
   ```

5. Open `dist/index.html` in your browser.

## Lessons Learned

This project was an excellent learning experience in the following areas:

- Understanding and implementing **DOM manipulation**.
- Structuring JavaScript projects using **modular components**.
- Managing state with a **repository pattern**.
- Using **Webpack** for project bundling and development.

## Future Improvements

- Add form validation and error handling for the task management feature.
- Improve the responsive design for better mobile support.
- Enhance UI/UX with animations and transitions.

## Author

Kacper Smaga
