# JS Band Store

JS-Band Store - this is final task from ciklum internship.\
In this shop you can search books about JavaScript, can filter them, adding to cart and do the purchase.\
[Open the app](https://bromotdi.github.io/js-book-store/)

## Usage
- Unautharized user goes to Login page. Typing his username (if username is not valid see message below input form). After successfull authorizations User see welcome message and redirected to the catalog page.
- On the Catalog page user see list of books and can search them by title and filter by price. Cliked by "View" button user goes to page with detailed inforamtion about current book.
- On the Book's info page User can see all information about chosen book and can add to cart avialable count of them and see total price. After add, User can go to Cart or return to Catalog for search another books.
- On the Cart page User can see table with chosen books and total price< after that can do the purchase. After succsessfull purchase opens the modal window with same table with ordered books. After close this modal the cart will be empty.
- When User clicks to the Sign Out button he will be log out and redirected to login page back.

## Features
- User authorization
- Search books by title and filter by price
- Increased book cover by hover to product card
- Add a specific book to cart
- Make a purchase of added books
- Responsive layout

## Install and run project
- Install all dependencies `npm install`
- Run app for development `npm start`
- Build app for production `npm run build`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/js-band-store](http://localhost:3000/js-band-store) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm test:coverage`

Launches tests and show total coverage of code. Generate report to /coverage folder.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eslint`

Launches the code linting with airbnb config.

### `npm run eslint:fix`

Launches fixing of code with airbnb config.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Technologies
- React (CRA)
- Redux (state management)
- SASS (styling)
- Bootstrap classes (styling)
- Jest (testing)
- ESlint (code linting by airbnb)
- Husky (pre-commit hooks)

NodeJS v12.13.1
