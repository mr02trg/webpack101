01. Setup Webpack
- npm init
- npm install webpack --save-dev

** Note the order of js file imported via script tag matter

02. Basic Usage
- Refer to package.json to see how webpack build all your js code and dump it to a single bundle.js 
- Now we can simply import this single js to your html

03. Webpack development server
- bundle.js is loaded locally from file system (i.e. file protocol)
- Allow you to spin up a nodejs serve that automatically build and serve your code
- Set up: 
    npm i webpack-dev-server --save-dev
    webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js --mode development
- bundle.js is automatically build and served from memory