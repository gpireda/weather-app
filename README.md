## Weather application

Simple application, based on (create-react-app)[https://github.com/facebook/create-react-app], allowing users to pin a location in a map, fetch weather data for a list of nearby cities and select a city for the current weather depiction.

### Technologies

1. [React](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
2. [Css modules](https://github.com/css-modules/css-modules) - Locally scopes classes names by default.
3. [React router](https://github.com/ReactTraining/react-router) - Declarative routing for React.
4. [Google map React](https://github.com/google-map-react/google-map-react) - Google map library for react that allows rendering components as markers.

#### Development dependencies

1. [Typescript](https://github.com/microsoft/TypeScript) - Superset of JavaScript that compiles to clean JavaScript output.
2. [Node sass](https://github.com/sass/node-sass) - Node.js bindings to libsass.
3. [Eslint](https://github.com/eslint/eslint) - Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
4. [Prettier](https://github.com/prettier/prettier) - Opinionated code formatter, enforcing a consistent code style.
5. [Husky](https://github.com/typicode/husky) - Hooks for git.
6. [Lint staged](https://github.com/okonet/lint-staged) - Run linters against staged git files.

### To be improved

1. User interface elements.
2. General styling guidelines.
3. Error handling.
4. Test cases and coverage.
5. CI/CD.

### How to run locally

1. Clone the project.
2. In the terminal: `cd /weather-app`.
3. Replace `REACT_APP_GOOGLE_MAPS_API_KEY` and `REACT_APP_OPEN_WEATHER_API_KEY` placeholder values with actual keys in `.env`.
4. Install dependencies: `yarn` or `npm install`.
5. Run: `yarn start` or `npm run start`.

### Run test suite

1. `yarn test` or `npm run test`
