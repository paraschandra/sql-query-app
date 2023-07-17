# SQL Query App - Atlan Frontend Task

This is a web-based application to run SQL queries on given data built specifically for the Atlan's frontend internship task.<br>
The application is deployed at : **https://sql-query-app-atlan.netlify.app/**

## Features

- Tabs to toggle between Overview and Query page.
- Overview of table data and columns.
- Queries can be run from editor.
- A sidebar with a list of predefined queries, which can be run by selecting one.
- Responsive for multiple screen sizes.

## Technologies Used

1. **Frameworks :** React JS and Tailwind CSS.
2. **Packages :** React Icons

## Performance Audit

- **[web.dev](https://web.dev/measure)**: Load time according to web.dev is **1.2 seconds**. The site scored **100 points in performance** and **100 points in best practices**.
- **[GTmetrix](https://gtmetrix.com/)**: Fully loaded time is **0.5 seconds**, with first contentful paint at **0.4 seconds**. Site received an A grade also. The exact metrics are:
    - **Speed Index**: `1.0s`
    - **First Contentful Paint**: `0.4s`
    - **Largest Contentful Paint**: `0.4s`
    - **Time to Interactive**: `0.4s`
    - **Total Blocking Time**: `0ms`
    - **Cumulative Layout Shift**: `0`

## Optimizations
- Zero to no use of extra packages to make application lightweight.
- Used Tailwind CSS to purge all unused css in production leading to increase in performance.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.