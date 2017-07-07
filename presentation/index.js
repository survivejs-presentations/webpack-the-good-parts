// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  //BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  //Markdown,
  //Quote,
  Slide
  //Table,
  //TableRow,
  //TableHeaderItem,
  //TableItem
  //Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  commonschunk1: require("../images/commonschunk1.png"),
  commonschunk2: require("../images/commonschunk2.png"),
  codeSplitting: require("../images/codesplitting.png"),
  sourcemaps: require("../images/sourcemaps.png"),
  survivejs: require("../images/survivejs.png"),
  webpackProcess: require("../images/webpack-process.png"),
  webpackPopularity: require("../images/webpack-popularity.png"),
  webpackMergePopularity: require("../images/webpack-merge-popularity.png"),
  wdsOverlay: require("../images/wds-overlay.png")
}, (v) => v.replace("/", ""));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Webpack - From Apprentice to Journeyman
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Topics
          </Heading>
          <List>
            <Appear><ListItem>What is Webpack</ListItem></Appear>
            <Appear><ListItem>Developing</ListItem></Appear>
            <Appear><ListItem>Building</ListItem></Appear>
            <Appear><ListItem>Assets</ListItem></Appear>
            <Appear><ListItem>Bundle/code Splitting</ListItem></Appear>
            <Appear><ListItem>Analysis and Troubleshooting</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/what-is-webpack" textColor="white">What is Webpack</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/appendices/comparison">Comparison of Build Tools</Link>
          </Heading>
          <List>
            <Appear><ListItem><b>Task runners</b> and <b>bundlers</b></ListItem></Appear>
            <Appear><ListItem>They can completement each other. You can also defer task running to npm.</ListItem></Appear>
            <Appear><ListItem>Evolution from generic tools to specific ones</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.webpackProcess} height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>entry</code> - Where to Start Bundling
          </Heading>
          <CodePane lang="javascript">
        {`{
  entry: {
    app: path.join(__dirname, 'app'),
  },
}`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>output</code> - Where to Emit Files
          </Heading>
          <CodePane lang="javascript">
        {`{
  output: {
    // Output to the build directory
    path: path.join(__dirname, 'build'),

    // Capture name from the entry using a pattern
    filename: '[name].js',
  },
}`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>module.rules</code> - How to Process?
          </Heading>
          <CodePane lang="javascript">
        {`{
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
}`}
          </CodePane>
          <List>
            <Appear><ListItem>Focus on transforming assets</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>plugins</code> - What Additional Processing to Perform
          </Heading>
          <CodePane lang="javascript">
        {`{
  plugins: [
    new UglifyJsPlugin(),
  ],
}`}
          </CodePane>
          <List>
            <Appear><ListItem>The most powerful way to extend webpack</ListItem></Appear>
            <Appear><ListItem>Access to entire <b>lifecycle</b> of webpack</ListItem></Appear>
            <Appear><ListItem>Webpack itself is a collection of plugins</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>resolve</code> - What Happens on <code>require/import</code>
          </Heading>
          <CodePane lang="javascript">
        {`{
  resolve: {
    alias: { ... },
    extensions: [ ... ],
    modules: [ ... ],
  },
}`}
          </CodePane>
          <List>
            <Appear><ListItem>Hack around nasty packages</ListItem></Appear>
            <Appear><ListItem>Also for <code>loaders</code> (<code>resolveLoader</code>)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Configuration
          </Heading>
          <CodePane lang="javascript">
        {`module.exports = {
  entry: { // 1. Where to begin
    app: path.join(__dirname, 'app'),
  },
  output: { // 2. Where to write
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  // 3. How to process modules
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // 4. Additional processing to perform
  plugins: [
    new UglifyJsPlugin(),
  ],
  // 5. How to resolve modules and loaders
  resolve: { ... },
  resolveLoader: { ... },
};`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/getting-started">Get Started</Link>
          </Heading>
          <List>
            <Appear><ListItem>0. <code>mkdir webpack-workshop</code>, <code>npm init -y</code>, <code>npm i webpack -D</code></ListItem></Appear>
            <Appear><ListItem>1. Set up a project <Link href="https://survivejs.com/webpack/developing/getting-started">as in the book</Link></ListItem></Appear>
            <Appear><ListItem>2. <b>node_modules/.bin/webpack app/index.js build/index.js</b></ListItem></Appear>
            <Appear><ListItem>3. Set up <Link href="https://www.npmjs.com/package/html-webpack-plugin">html-webpack-plugin</Link>. Can you see why it is useful?</ListItem></Appear>
            <Appear><ListItem>4. Set up npm shortcut (<code>npm run build</code>)</ListItem></Appear>
            <Appear><ListItem>5. Study webpack output. Can you see what is going on?*</ListItem></Appear>
            <Appear><ListItem>6. Study <Link href="https://github.com/webpack/webpack.js.org/issues/487">webpack class hierarchy</Link>**</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Webpack Output
          </Heading>
          <CodePane lang="javascript">
        {`/******/ (function(modules) { // webpackBootstrap
...
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ( => {
  const element = document.createElement('div');

  element.innerHTML = 'Hello world';

  return element;
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(0);


document.body.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */])());

/***/ })
/******/ ]);`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem>Focus on <b>bundling</b></ListItem></Appear>
            <Appear><ListItem>Traverses dependency graph while processing with <b>loaders</b> and applying <b>plugins</b>. Can you understand the difference?</ListItem></Appear>
            <Appear><ListItem><b>Configuration</b> declares how to <b>transform</b> source. Also inline definitions (code splitting)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/developing">Developing</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/automatic-browser-refresh">Automatic Browser Refresh</Link>
          </Heading>
          <List>
            <Appear><ListItem>0. Execute <code>npm run build -- --watch</code></ListItem></Appear>
            <Appear><ListItem>1. Alter code and see what happens in the terminal</ListItem></Appear>
            <Appear><ListItem>2. <Link href="https://survivejs.com/webpack/developing/automatic-browser-refresh">Follow the chapter <code>--env</code> setup</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/linting">Linting JavaScript</Link>
          </Heading>
          <List>
            <Appear><ListItem>Lint to push code quality to a higher standard</ListItem></Appear>
            <Appear><ListItem>JSLint &rarr; <Link href="https://www.npmjs.com/package/jshint">JSHint</Link> &rarr; <Link href="http://eslint.org/">ESLint</Link></ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/eslint-config-airbnb">eslint-config-airbnb</Link></ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Connect with webpack using <Link href="https://www.npmjs.com/package/eslint-loader">eslint-loader</Link> as <Link href="https://survivejs.com/webpack/developing/linting">in the book</Link></ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Add <Link href="https://www.npmjs.com/package/prettier">prettier</Link> to the setup (hint: there is an <Link href="https://www.npmjs.com/package/eslint-plugin-prettier">ESLint plugin</Link>)*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            WDS - Overlay Mode
          </Heading>
          <Image src={images.wdsOverlay} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Building
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Managing Webpack Through <b>package.json</b>
          </Heading>
          <CodePane lang="javascript">
        {`{
  "scripts": {
    "build": "webpack --env production",
    "start": "webpack-dev-server --env development",
    "test": "jest",
    "test:coverage": "jest --coverage",
    "test:watch": "jest --watch",
    ...
  }
}`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/composing-configuration">Composing Configuration</Link>
          </Heading>
          <List>
            <Appear><ListItem>The need for <b>different</b> targets - development, production, ...</ListItem></Appear>
            <Appear><ListItem>How to manage the targets?</ListItem></Appear>
            <Appear><ListItem>Solutions: higher level abstractions, composition</ListItem></Appear>
            <Appear><ListItem>Option: consume configuration as a dependency</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            webpack-merge
          </Heading>
          <CodePane lang="javascript">
        {`const merge = require('webpack-merge');

merge(
  { a: [1], b: 5, c: 20 },
  { a: [2], b: 10, d: 421 }
);`}
          </CodePane>
          <Appear><div>merges to</div></Appear>
          <Appear><CodePane lang="javascript">
        {`{
  a: [1, 2], // Concat
  b: 10, // Latter wins
  c: 20, // From former
  d: 421 // From latter
}`}
          </CodePane></Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            webpack-merge with webpack
          </Heading>
          <CodePane lang="javascript">
        {`const commonConfig = merge([
  ...
]);

const productionConfig = merge([
  ...
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/webpack-merge">webpack-merge</Link>
          </Heading>
          <Image src={images.webpackMergePopularity} margin="40px auto" height="364px" />
          <Layout>
            <Link href="https://npm-stat.com/charts.html?package=webpack-merge&from=2015-06-19&to=2017-03-19">npm-stat.com</Link>
          </Layout>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Related Solutions
          </Heading>
          <List>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/webpack-blocks">webpack-blocks</Link> - Andy read the book!</ListItem></Appear>
            <Appear><ListItem><Link href="https://neutrino.js.org/">neutrino</Link> - Chaining DSL</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/create-react-app">create-react-app</Link> - Opinionated wrapper for React development</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/nwb">nwb</Link> - Less opinionated wrapper for React development</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Port the configuration to <Link href="https://www.npmjs.com/package/webpack-merge">webpack-merge</Link> as <Link href="https://survivejs.com/webpack/developing/composing-configuration">in the book</Link></ListItem></Appear>
            <Appear><ListItem>1. Try different configuration file layouts (target per file etc.). Can you see pros/cons?</ListItem></Appear>
            <Appear><ListItem>2. What would it take to package the configuration into something you can consume across multiple projects?</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/source-maps">Source Maps</Link>
          </Heading>
          <Image src={images.sourcemaps} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Inline Source Maps
          </Heading>
          <Heading size={4}>
            (<code>devtool: 'eval'</code>)
          </Heading>
          <CodePane lang="javascript">
        {`webpackJsonp([1, 2], {
  "./app/index.js": function(module, exports) {
    eval("console.log('Hello world');\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/index.js\n// module id = ./app/index.js\n// module chunks = 1\n\n//# sourceURL=webpack:///./app/index.js?")
  }
}, ["./app/index.js"]);`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Inline Source Maps
          </Heading>
          <List>
            <Appear><ListItem>Inline source maps are <b>included</b> in bundles</ListItem></Appear>
            <Appear><ListItem>Inline === fast to rebundle, use for development</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Separate Source Maps
          </Heading>
          <Heading size={4}>
            (<code>devtool: 'source-map'</code>)
          </Heading>
          <div>app.js</div>
          <CodePane lang="javascript">
        {`webpackJsonp(
  [2,4],
  {"1Q41":function(){}, ... }
); //# sourceMappingURL=app.js.map`}
          </CodePane>
          <div>app.js.map</div>
          <CodePane lang="json">
        {`{
  "file": "app.9aff3b1eced1f089ef18.js",
  "mappings": "AAAAA,...,kBDST",
  "names": [
    "webpackJsonp",
    ...
  ],
  "sourceRoot": "",
  "sources": [...],
  "sourcesContent": [...],
  "version": 3
}`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Separate Source Maps
          </Heading>
          <List>
            <Appear><ListItem>Separate source maps are written to <b>separate</b> files</ListItem></Appear>
            <Appear><ListItem>Separate === slow to generate, use for production</ListItem></Appear>
            <Appear><ListItem>Use plugins for more control</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Which option to use?
          </Heading>
          <List>
            <Appear><ListItem><Link href="https://github.com/webpack/webpack/issues/2145#issuecomment-294361203">GitHub to rescue</Link></ListItem></Appear>
            <Appear><ListItem><b>cheap-module-source-map</b>, <b>cheap-module-inline-source-map</b></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Set up development source maps</ListItem></Appear>
            <Appear><ListItem>1. Set up production source maps</ListItem></Appear>
            <Appear><ListItem>2. Examine source maps in the browser</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Assets
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/styling" textColor="white">Styling</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/loading">Loading Styles</Link>
          </Heading>
          <List>
            <Appear><ListItem><code>use: ['style-loader', 'css-loader']</code></ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/css-loader">css-loader</Link> evaluates <code>@import</code> and <code>url()</code> lookups</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/style-loader">style-loader</Link> injects CSS to the DOM and implements HMR</ListItem></Appear>
            <Appear><ListItem>Other formats supported through loaders</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Set up style loading and examine the output</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/separating-css">Separating CSS</Link>
          </Heading>
          <List>
            <Appear><ListItem>Flash of Unstyled Content (FOUC)</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/extract-text-webpack-plugin">extract-text-webpack-plugin (ETWP)</Link> and <Link href="https://www.npmjs.com/package/extract-loader">extract-loader</Link></ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Set up style extraction using the plugin (you can also try the loader)</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Study <Link href="https://medium.com/webpack/the-new-css-workflow-step-1-79583bd107d7">the proposed CSS workflow</Link>*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/autoprefixing">Autoprefixing</Link>
          </Heading>
          <Appear><CodePane lang="css">
        {`body {
  background: cornsilk;
  display: flex;
}`}
          </CodePane></Appear>
          <Appear><div>autoprefixes to</div></Appear>
          <Appear><CodePane lang="css">
        {`body {
  background: cornsilk;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}`}
          </CodePane></Appear>
          <List>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/autoprefixer">autoprefixer</Link>, a PostCSS plugin, can solve this</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Set up autoprefixing</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/browserslist">.browserslistrc</Link>
          </Heading>
          <CodePane lang="bash">
        {`> 1% # Browser usage over 1%
Last 2 versions # Or last two versions
IE 8 # Or IE 8`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/eliminating-unused-css">Eliminating Unused CSS</Link>
          </Heading>
          <List>
            <Appear><ListItem>Eliminate redundant rules to make your CSS bundle <b>smaller</b></ListItem></Appear>
            <Appear><ListItem>Ideal for <b>static sites</b>, more complex in dynamic cases</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/purify-css">purify-css</Link> and <Link href="https://www.npmjs.com/package/purifycss-webpack">purifycss-webpack</Link> or <Link href="https://www.npmjs.com/package/uncss">uncss</Link> is another option</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Set up style elimination</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/linting">Linting CSS</Link>
          </Heading>
          <List>
            <Appear><ListItem>Lint CSS too</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/stylelint">Stylelint</Link> through PostCSS is enough. <Link href="http://csslint.net/">CSSLint</Link> an option</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Set up CSS linting</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem>Starting points: <Link href="https://www.npmjs.com/package/style-loader">style-loader</Link>, <Link href="https://www.npmjs.com/package/css-loader">css-loader</Link></ListItem></Appear>
            <Appear><ListItem>Since webpack inlines CSS by default, you will have to <b>extract</b></ListItem></Appear>
            <Appear><ListItem><b>Autoprefix</b> to save time and to support legacy browsers</ListItem></Appear>
            <Appear><ListItem>Manage browser support through a <b>.browserslistrc</b></ListItem></Appear>
            <Appear><ListItem><b>Eliminate unused CSS</b> to decrease payload</ListItem></Appear>
            <Appear><ListItem>Remember to <b>lint CSS</b> too</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/images">Loading Images</Link>
          </Heading>
          <List>
            <Appear><ListItem>To inline or not? Or to sprite?</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/url-loader">url-loader</Link> inlines (with a <code>limit</code>)</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/file-loader">file-loader</Link> returns paths and <b>emits</b> files</ListItem></Appear>
            <Appear><ListItem>Loaders for specific purposes (spriting, srcsets, etc.)</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Set up image loading</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/fonts">Loading Fonts</Link>
          </Heading>
          <List>
            <Appear><ListItem><b>url-loader</b> and <b>file-loader</b> again</ListItem></Appear>
            <Appear><ListItem>Specific loaders like <Link href="https://www.npmjs.com/package/webfonts-loader">webfonts-loader</Link></ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Set up font loading</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/javascript">Loading JavaScript</Link>
          </Heading>
          <List>
            <Appear><ListItem>Webpack processes ES6 modules but not specific features</ListItem></Appear>
            <Appear><ListItem>Problematic with legacy browsers!</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/babel-loader">babel-loader</Link> and <Link href="https://www.npmjs.com/package/babel-preset-env">babel-preset-env</Link> to rescue</ListItem></Appear>
            <Appear><ListItem>Generate code/polyfills based on a <b>browser definition</b></ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Set up Babel (target IE 8) and compare the output to previous</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link href="https://survivejs.com/webpack/loading/loader-definitions/" textColor="white">Understanding Loaders</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/loader-definitions">Loader Definition</Link>
          </Heading>
          <CodePane lang="javascript">
        {`module: {
  rules: [
    {
      // **Conditions**
      test: /\.js$/, // Match files

      // **Restrictions**
      include: path.join(__dirname, 'app'),
      exclude: path => path.match(/node_modules/);

      // **Actions**
      use: 'babel-loader',
    },
  ],
},`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Loader Evaluation Order
          </Heading>
          <Appear><CodePane lang="javascript">
        {`{
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
}`}
          </CodePane></Appear>
          <Appear><div>equals</div></Appear>
          <Appear><CodePane lang="javascript">
        {`{
  test: /\.css$/,
  use: ['style-loader'],
},
{
  test: /\.css$/,
  use: ['css-loader'],
},`}
          </CodePane></Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Enforcing Order
          </Heading>
          <CodePane lang="javascript">
        {`{
  // Conditions
  test: /\.js$/,
  enforce: 'pre', // 'post' too

  // Actions
  use: 'eslint-loader',
},`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Inline Definitions
          </Heading>
          <CodePane lang="javascript">
        {`// Process foo.png through url-loader and other matches
import 'url-loader!./foo.png';

// Override possible higher level match completely
import '!!url-loader!./bar.png';`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Loading Based on <code>resourceQuery</code>
          </Heading>
          <CodePane lang="javascript">
        {`{
  test: /\.png$/,

  oneOf: [
    {
      resourceQuery: /inline/, // foo.png?inline
      use: 'url-loader',
    },
    {
      resourceQuery: /external/, // foo.png?external
      use: 'file-loader',
    },
  ],
},`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Loading Based on <code>issuer</code>
          </Heading>
          <CodePane lang="javascript">
        {`{
  test: /\.css$/,

  rules: [
    {
      issuer: /\.js$/, // Apply only to imports from js files
      use: 'style-loader',
    },
    'css-loader',
  ],
},`}
          </CodePane>
          <List>
            <Appear><ListItem><b>Exercise:</b> Study <Link href="https://github.com/webpack/webpack/blob/master/schemas/webpackOptionsSchema.json">webpack configuration schema related to loaders</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Bundle/code Splitting
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/bundle-splitting">Bundle Splitting</Link>
          </Heading>
          <List>
            <Appear><ListItem>Anti-pattern - <b>Single</b> bundle with <b>application</b> and <b>vendor</b></ListItem></Appear>
            <Appear><ListItem>First step - Separate into two bundles</ListItem></Appear>
            <Appear><ListItem>Second step - Apply hashes to file names bust cache</ListItem></Appear>
            <Appear><ListItem><code>CommonsChunkPlugin</code> can do the job</ListItem></Appear>
            <Appear><ListItem><code>AggressiveSplittingPlugin</code> etc. for more control</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Separating Application and Vendor
          </Heading>
          <Image src={images.commonschunk1} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>CommonsChunkPlugin</code>
          </Heading>
          <CodePane lang="javascript">
        {`module.exports = {
  ...
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: isVendor,
    }),
  ]
};

function isVendor({ resource }) {
  return resource &&
    resource.indexOf('node_modules') >= 0 &&
    resource.match(/\.js$/);
}`}
          </CodePane>
          <List>
            <Appear><ListItem><b>Exercise:</b> Set up bundle splitting</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/code-splitting">Code Splitting</Link>
          </Heading>
          <Image src={images.codeSplitting} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <code>import()</code>
          </Heading>
          <CodePane lang="javascript">
            {`import(
  /* webpackChunkName: "optional-name" */ './module'
).then(
  module => {...}
).catch(
  error => {...}
);
`}
          </CodePane>
          <List>
            <Appear><ListItem><b>Exercise:</b> Set up code splitting</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/appendices/searching-with-react">Searching with React</Link>
          </Heading>
          <List>
            <Appear><ListItem>Indexing static content through <Link href="http://lunrjs.com/">lunr</Link> is enough</ListItem></Appear>
            <Appear><ListItem>Good use case for <code>import()</code></ListItem></Appear>
            <Appear><ListItem>Enough for small static sites</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <code>Promise</code> Patterns
          </Heading>
          <CodePane lang="javascript">
        {`Promise.all([
  import('lunr'),
  import('../search_index.json'),
]).then(([lunr, search]) => {
  return {
    index: lunr.Index.load(search.index),
    lines: search.lines,
  };
});`}
          </CodePane>
          <List>
            <Appear><ListItem><b>Exercise:</b> Set up the above pattern so that each import is named the same way</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Code Splitting Output
          </Heading>
          <CodePane lang="javascript">
            {`webpackJsonp([0], {
  KMic: function(a, b, c) {
    ...
  },
  co9Y: function(a, b, c) {
    ...
  },
});`}
          </CodePane>
          <List>
            <Appear><ListItem>In addition, a small <code>Promise</code> based bit to load the code</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <code>require.ensure</code>
          </Heading>
          <CodePane lang="javascript">
        {`require.ensure(
  // Modules to load, but not execute yet
  ['./load-earlier'],
  () => {
    const loadEarlier = require('./load-earlier');

    // Load later on demand and include to the same chunk
    const module1 = require('./module1');
    const module2 = require('./module2');

    ...
  },
  (err) => { ... },
  'optional-name'
);`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/tidying-up">Tidying Up</Link>
          </Heading>
          <List>
            <Appear><ListItem>Even though webpack is a bundler, you can find task-oriented plugins for it</ListItem></Appear>
            <Appear><ListItem>Examples: <Link href="https://www.npmjs.com/package/clean-webpack-plugin">clean-webpack-plugin</Link>, <Link href="https://www.npmjs.com/package/git-revision-webpack-plugin">git-revision-webpack-plugin</Link>, <code>BannerPlugin</code></ListItem></Appear>
            <Appear><ListItem>Copy through <Link href="https://www.npmjs.com/package/copy-webpack-plugin">copy-webpack-plugin</Link> or outside of webpack</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Analysis and Troubleshooting
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/analyzing-build-statistics">Analyzing Build Statistics</Link>
          </Heading>
          <List>
            <Appear><ListItem>To know what your build consists of, generate <b>build statistics</b></ListItem></Appear>
            <Appear><ListItem>Use <code>--json</code> for statistics</ListItem></Appear>
            <Appear><ListItem>Use <code>--profile</code> to capture timing information</ListItem></Appear>
            <Appear><ListItem>Node API gives access to statistics too and you can find a couple of plugins</ListItem></Appear>
            <Appear><ListItem>Plenty of tools for analysis</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Generate stats and analyze through tooling</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/appendices/troubleshooting">Troubleshooting</Link>
          </Heading>
          <List>
            <Appear><ListItem>Follow a debugging process. This captures most problems.</ListItem></Appear>
            <Appear><ListItem>If you found a real issue, take care in reporting it well</ListItem></Appear>
            <Appear><ListItem>Figure out whether the problem is on your side or in dependencies</ListItem></Appear>
            <Appear><ListItem><b>Exercise:</b> Figure out how to make your build error in different ways</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://presentations.survivejs.com/webpack-from-journeyman-to-master">
            <Heading size={1} fit>
              Continue to the next presentation
            </Heading>
          </Link>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/">
            <Heading size={1}>
              SurviveJS
            </Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
        </Slide>

        <Slide transition={slideTransition} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made in Finland by
          </Heading>
          <Link href="https://twitter.com/bebraw">
            <Heading caps fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
