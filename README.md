# ⚡⚛ ampreact
React + AMP HTML — The most trendy website boilerplate possible.

## Getting Started
#### 1. Get latest code
```
git clone https://github.com/dfrankland/ampreact.git
```
#### 2. Run `npm install`
#### 3. Run `npm start`
This command will build the app from the source files (`/src`) into the output
`/build` folder. As soon as the initial build completes, it will start the
Node.js server (`node build/server.js`) and [Browsersync](https://browsersync.io/) with on top of it.

> [https://localhost:3000/](https://localhost:3000/) — Node.js server (`build/server.js`)
> [https://localhost:3001/](http://localhost:3001/) — BrowserSync proxy
> [http://localhost:3002/](http://localhost:3002/) — BrowserSync control panel (UI)

## About
* **Content**: Utilizes Webpack, React, Jade/Markdown, and PostCSS to dynamically create AMP HTML pages.
* **Server**: HTTP/2 with Koa for super minimal and performant serving.
* **Development**: Browsersync for speedy development and linting rules setup for organization.

## More Documentation to Come...

## Attribution
Based on the brilliant [`react-starter-kit`](https://github.com/kriasoft/react-starter-kit/)
