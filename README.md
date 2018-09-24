# Redux Sagas Authentication App
This is a basic React application that documents and walks through a complete Signup, Login and Protected resource flow.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

The full overviews can be found here:
* [React and Redux Sagas Authentication App Tutorial](http://start.jcolemorrison.com/react-and-redux-sagas-authentication-app-tutorial/)
* [React and Redux Sagas Authentication App Tutorial Part 2](http://start.jcolemorrison.com/react-and-redux-sagas-authentication-app-tutorial-part-2/)
* [React and Redux Sagas Authentication App Tutorial Part 3](http://start.jcolemorrison.com/react-and-redux-sagas-authentication-app-tutorial-part-3/)

This application is an improvement of the previous version with a High Order Component to manage Authorization with a much better file structure. This application also uses React Router v4 and can manage to accomodate different Page Layouts.
All thanks to:

* [Multiple layouts with React Router v4 ](https://gist.github.com/avinmathew/e82fe7e757b20cb337d5219e0ab8dc2c)


The api being used with it can be found here:

https://github.com/jcolemorrison/strongloop-automigration-demo

### Prerequisites
* npm
* Node Js

### Tools Used
* React
* Redux
* Redux Saga
* Redux Form
* React Router v4


### Installing
clone the repo
```
git clone https://github.com/scedar/redux-saga-auth-app.git
```

install node modules
```
npm install
```
## Folder Structure
After creation, your project should look like this:

```
redux-saga-auth-app/    
    node_modules/
    public/
    src/
        components
        containers    
            signup/
                action.js                
                constants.js                
                index.js                
                reducer.js                
                sagas.js                
            ...
        layouts
        config
        utils
        routes
        resources
        index.js
    .gitignore
    package.json
    README.md
```

## Run the project

```
npm start
```

## Building the project

```
npm run build
```

## License

This project is licensed under the MIT License (MIT) 




