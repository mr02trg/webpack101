01. Setup Webpack
- npm init
- npm install webpack --save-dev

** Note the order of js file imported via script tag matter

---------------------------
02. Basic Usage
- Refer to package.json to see how webpack build all your js code and dump it to a single bundle.js 
- Now we can simply import this single js to your html

---------------------------
03. Webpack development server
- bundle.js is loaded locally from file system (i.e. file protocol)
- Allow you to spin up a nodejs serve that automatically build and serve your code
- Set up: 
    npm i webpack-dev-server --save-dev
    webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js --mode development
- bundle.js is automatically build and served from memory

---------------------------
04. Webpack Core Concept
- Creating webpack.config.js
- webpack will automatically use this config file name convention
- There are 4 key concepts: 

    ** Entry Point
        - Path to the entry point(s) is relative to the webpack config file

    ** Plugins
        - apply to the whole code - transform the code before output
        - for example: webpack minification of js code 

    ** Module loaders
        - apply on per file basis
        - order of loaders used matter  --> webpack execute the loaders in reverse order

    ** Output
        - A js object
        - Define where to store the it and its name
        - Output path needs to be absolute

- Need to specify public path for webpack-dev-server to work.
The dev server doesnt understand the concept of absolute path

---------------------------
05. Babel
** Babel is an transcompiler to convert ECMAScript2015+ into backwards compatible version of JS that can be run by older JS engine
- Modules needed: babel-core, babel-loader, babel/preset-env
- Setup: npm i @babel/core @babel/core @babel/preset-env babel-loader --save-dev

---------------------------
06. SCSS workflow
- So currently, css-loader module will allow css to be imported in your js file and then style loader will pick that up and inject it to your html head
- A drawback of this workflow is that if js file failed, all your style will also not be imported
** Now we will try to start using SCSS and also extract out the compiled css to a separate file (i.e main.css) rather than using style-loader in the previous workflow
- SCSS will first be compiled to CSS (css-loader, sass-loader, node-sass) and then use
Setup: 
npm i sass-loader node-sass mini-css-extract-plugin --save-dev 

---------------------------
07. html-loader 
- Allow us to include css and js file dynamically into your html rather than hardcoded

* html-webpack-plugin
- index.html is now automatically copied into /dist folder on build 
    -> need to remove publicPath on our webpack config output
    -> since our assets (i.e bundle.js and main.css) are now in the same folder as index.html, not from /dist folder anymore

*  clean-webpack-plugin
- output management plugin
- remove and recreate dist folder on every build
    -> prevent build cache