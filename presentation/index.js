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

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            What is Webpack
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.webpackProcess} height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading fit>
            Configuration
          </Heading>
          <CodePane lang="javascript">
        {`module.exports = {
  entry: {
    ...
  },
  output: {
    ...
  },
  module: {
    rules: [
      ...
    ]
  },
  plugins: [
    ...
  ]
};`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Main Ideas
          </Heading>
          <List>
            <Appear><ListItem>Focus on <b>bundling</b></ListItem></Appear>
            <Appear><ListItem>Traverses dependency graph while matching using <b>loaders</b></ListItem></Appear>
            <Appear><ListItem><b>Configuration</b> is used to describe these transformations</ListItem></Appear>
            <Appear><ListItem><b>Plugins</b> have access to webpack <b>runtime hooks</b></ListItem></Appear>
            <Appear><ListItem><b>Code splitting</b> allows you to load functionality as you need</ListItem></Appear>
            <Appear><ListItem><b>Hot Module Replacement</b> popularized webpack</ListItem></Appear>
            <Appear><ListItem>Webpack can generate <b>hashes</b> to filenames for caching</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Webpack
          </Heading>
          <Image src={images.webpackPopularity} margin="40px auto" height="364px" />
          <Layout>
            <Link href="https://npm-stat.com/charts.html?package=webpack&from=2014-03-19&to=2017-03-19">npm-stat.com</Link>
          </Layout>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Developing
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Getting Started
          </Heading>
          <List>
            <Appear><ListItem><b>webpack app/index.js build/index.js</b></ListItem></Appear>
            <Appear><ListItem>Shortcut flags for common operations (avoid!)</ListItem></Appear>
            <Appear><ListItem>Current development at <Link href="https://github.com/webpack/webpack-cli">webpack-cli</Link></ListItem></Appear>
            <Appear><ListItem>Eventually you will need <b>webpack.config.js</b></ListItem></Appear>
            <Appear><ListItem>Use <Link href="https://www.npmjs.com/package/html-webpack-plugin">html-webpack-plugin</Link> for generating <b>index.html</b></ListItem></Appear>
            <Appear><ListItem>Use npm and <b>package.json</b> as your task runner</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Automatic Browser Refresh
          </Heading>
          <List>
            <Appear><ListItem><b>webpack --watch</b></ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/webpack-dev-server">webpack-dev-server</Link></ListItem></Appear>
            <Appear><ListItem><b>--env</b>, <b>proxy</b></ListItem></Appear>
            <Appear><ListItem>Hot Module Replacement (HMR)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Linting JavaScript
          </Heading>
          <List>
            <Appear><ListItem>Lint to push quality and code on a higher standard</ListItem></Appear>
            <Appear><ListItem>JSLint &rarr; <Link href="https://www.npmjs.com/package/jshint">JSHint</Link> &rarr; <Link href="http://eslint.org/">ESLint</Link></ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/eslint-config-airbnb">eslint-config-airbnb</Link></ListItem></Appear>
            <Appear><ListItem>Optional: connect with webpack using <Link href="https://www.npmjs.com/package/eslint-loader">eslint-loader</Link></ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/prettier">Prettier</Link> - Format code automatically</ListItem></Appear>
            <Appear><ListItem><Link href="https://www.npmjs.com/package/danger">Danger</Link> - High level checks (think PR)</ListItem></Appear>
            <Appear><ListItem><Link href="http://editorconfig.org/">EditorConfig</Link> - Editor level consistency</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            WDS - Overlay Mode
          </Heading>
          <Image src={images.wdsOverlay} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading fit>
            WDS - Overlay Mode Configuration
          </Heading>
          <CodePane lang="javascript">
        {`devServer: {
  ...

  // overlay: true captures only errors
  overlay: {
    errors: true,
    warnings: true,
  },
},`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Composing Configuration
          </Heading>
          <List>
            <Appear><ListItem>The need for different targets - development, production, ...</ListItem></Appear>
            <Appear><ListItem>How to manage the targets?</ListItem></Appear>
            <Appear><ListItem>Solutions: higher level abstractions, composition</ListItem></Appear>
            <Appear><ListItem>Option: abstract and consume configuration as a dependency</ListItem></Appear>
          </List>
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
          <Heading fit>
            webpack-merge - Demonstration
          </Heading>
          <CodePane lang="bash">
        {`> merge = require('webpack-merge')
...
> merge(
... { a: [1], b: 5, c: 20 },
... { a: [2], b: 10, d: 421 }
... )
{ a: [ 1, 2 ], b: 10, c: 20, d: 421 }`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading fit>
            webpack-merge with webpack
          </Heading>
          <CodePane lang="javascript">
        {`...

const commonConfig = merge([
  ...
]);

const productionConfig = merge([
  ...
]);

...

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Styling
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Loading Styles
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Separating CSS
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Autoprefixing
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Eliminating Unused CSS
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Linting CSS
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Loading Assets
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Loader Definitions
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Loading Images
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Loading Fonts
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Loading JavaScript
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Building
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Source Maps
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Splitting Bundles
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Code Splitting
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Tidying Up
          </Heading>
          <List>
            <Appear><ListItem>XXX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="http://www.survivejs.com/">
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
