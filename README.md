# Goal

Build an application using React that interacts with the [Newton API](https://github.com/aunyks/newton-api).

# API Summary

GET request to `https://newton.now.sh/:operation/:expression` yields result of `operation` on `equation`.

# Approach

- Design document detailing
- Implement
- UI

# Design Document

## Components

- `App` - top-level component with providers, `Head`, and top-level application components
- `Head` - manage html `head` using `react-helmet`
- `Heading` - page heading
- `Main` - top level app component, contains global state
- `InitialForm` - form to enter initial equation and operation. Disappears and is replaced by `Reset` button upon confirmation
  - `form`

    - `input` - equation
    - `OperationSelector` - operation
    - `button` - submit

    - `Reset` - Clear history and render `InitialForm` to start over
      - `button`
    - `Operations` - Container that maps over all
      - `Operation` - Takes `equation` and `operation` to make a request to API
        - `Loading` - while loading request
          - `material-ui/core/CircularProgress`
        - `Rebase` - delete this operation the tail of the history by deleting all following entries
          - `button`
        - `OperationForm` - Make operations to this equation to continue making history entries
          - `OperationSelector` - operation
          - `button` - submit

* Reusable components
  - `Loading` - spinner indicating loading status for async calls
  - `OperationSelector` - `select` element containing all valid `option`s for operations

# Bootstrapping

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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
