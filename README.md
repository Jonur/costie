# About

Costie is a meeting cost calculator. It takes the - before-tax preferably - salary amounts of the participants and runs a timer with the meeting's cost per second. The salary fields are safe in password fields and are destroyed the moment the user navigates to the timer, with the application keeping only the sum of all salaries per second.

## Flow

The user selects the number of participants and then has to pass over the device to them, so they can individually and securely input their salary. Finally, when all participants have set their information and the device has returned to the user, the meeting is ready to begin.

The application has calculated the meeting cost per second based on the sum of the salaries and this cost is the only information kept in the application while the timer runs.

## Inspiration

This project was inspired by the following [Elon Musk](https://en.wikipedia.org/wiki/Elon_Musk)'s 2015 [Tweet](https://twitter.com/boredelonmusk/status/588750177084669952?lang=en):

<a href="https://imgur.com/uJy27hg"><img src="https://i.imgur.com/uJy27hg.png" title="Elon Musk's tweet" /></a>

# Calculation Explanation

The calculation is:

`(work hours per day) * (working days per week) * (weeks in a year) * (minutes in an hour) * (seconds in a minute)`

which assumes the numbers:

`7.5 * 5 * 52.1429 * 60 * 60`

This will return the amount of total working seconds in a year (TWSY). Then, we divide the sum of the salaries by TWSY to get the total cost per second. This total cost has to be at least 0.01 of the selected currency, as there are no smaller physical currency entities for a user. The minimum possible salary sum which can return 0.01 is 35197. Therefore, if the salaries' sum is less than 35197 the application returns the `Please enter valid salaries.` error.

# Build

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Contributions

## Translations

Alex (German), [Flavio Damasco](https://www.linkedin.com/in/flaviodamasco/) (Italian), [Ivan Vieira](https://www.linkedin.com/in/ivan-vieira-40494551/) (Portuguese), [Jonas Vang Gregersen](https://www.linkedin.com/in/jonas-vang/) (Danish), [Mathilde Carraro](https://www.linkedin.com/in/mathilde-carraro-4a554a4b/) (French), [Santiago Eliard](https://www.linkedin.com/in/santiago-gonzalez-eliard-87978839/) (Spanish), [Zoltán Tóth](https://www.linkedin.com/in/zolt%C3%A1n-t%C3%B3th-developer/) (Hungarian)