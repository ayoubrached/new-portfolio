# Ayoub Rached - Personal Portfolio

This project is a personal portfolio website built to showcase my skills, projects, and experience as a Software Engineer and Computer Science student.

## Overview

The website features:
*   A **Home** page introducing myself, technical expertise, and certifications.
*   A **Projects** section (using a dropdown) showing different projects with descriptions and visuals.
*   A **Contact** page with professional links (LinkedIn, GitHub) and a functional contact form (using EmailJS).
*   A responsive design using Bootstrap for optimal viewing on different devices.

## Technologies Used

*   **Frontend:** React, React Router, Bootstrap 5, HTML5, CSS3
*   **Contact Form:** EmailJS
*   **Deployment:** GitHub Pages

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

*   Node.js and npm (or yarn)

### Installation & Running

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd new-portfolio
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the app in development mode:
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
```
Builds the app for production to the `build` folder.

### Deployment (GitHub Pages)

This project is configured for deployment to GitHub Pages.

1.  Ensure the `homepage` field in `package.json` is set correctly (e.g., `"https://<your-github-username>.github.io/<your-repo-name>/"`).
2.  Run the deployment script:
    ```bash
    npm run deploy
    ```
    This will build the project and push the `build` folder to the `gh-pages` branch.
