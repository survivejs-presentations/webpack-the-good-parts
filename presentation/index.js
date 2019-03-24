// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
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
  Quote,
  Slide,
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
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues(
  {
    commonschunk1: require("../images/commonschunk1.png"),
    commonschunk2: require("../images/commonschunk2.png"),
    codeSplitting: require("../images/codesplitting.png"),
    sourcemaps: require("../images/sourcemaps.png"),
    survivejs: require("../images/survivejs.png"),
    webpackProcess: require("../images/webpack-process.png"),
    webpackPopularity: require("../images/webpack-popularity.png"),
    webpackMergePopularity: require("../images/webpack-merge-popularity.png"),
    wdsOverlay: require("../images/wds-overlay.png"),
  },
  v => v.replace("/", "")
);

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quarternary: "rgba(255, 219, 169, 0.43)",
});
theme.screen.components.codePane.fontSize = "60%";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Webpack - The Good Parts
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Topics</Heading>
          <List>
            <Appear>
              <ListItem>What is Webpack</ListItem>
            </Appear>
            <Appear>
              <ListItem>Developing</ListItem>
            </Appear>
            <Appear>
              <ListItem>Building</ListItem>
            </Appear>
            <Appear>
              <ListItem>Assets</ListItem>
            </Appear>
            <Appear>
              <ListItem>Bundle/code Splitting</ListItem>
            </Appear>
            <Appear>
              <ListItem>Analysis</ListItem>
            </Appear>
            <Appear>
              <ListItem>Optimizing</ListItem>
            </Appear>
            <Appear>
              <ListItem>Webpack 5</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/what-is-webpack"
              textColor="white"
            >
              What is Webpack
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/appendices/comparison">
              Comparison of Build Tools
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <b>Task runners</b> and <b>bundlers</b> can complement each
                other
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                npm <b>package.json</b> can be used as a task runner as well
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Evolution from generic tools to specific ones</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.webpackProcess} height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>entry</code> - Where to Start Bundling
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/entry.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>output</code> - Where to Emit Files
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/output.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>module.rules</code> - How to Process?
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/rules.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>Focus on transforming assets</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>plugins</code> - What Additional Processing to Perform
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/plugins.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>The most powerful way to extend webpack</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Access to entire <b>lifecycle</b> of webpack
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Webpack itself is a collection of plugins</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>resolve</code> - What Happens on <code>require/import</code>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/resolve.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>Hack around nasty packages</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Also for <code>loaders</code> (<code>resolveLoader</code>)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Configuration</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/configuration.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/getting-started">
              Get Started
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                0.{" "}
                <code>
                  mkdir demo && cd demo && npm init -y && npm i webpack
                  webpack-cli -D
                </code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                1. Set up a project{" "}
                <Link href="https://survivejs.com/webpack/developing/getting-started">
                  as in the book and follow the chapter
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2. Study webpack output. Can you see what is going on?*
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                3. Check out{" "}
                <Link href="https://www.npmjs.com/package/webpack-nano">
                  webpack-nano
                </Link>
                *
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Webpack Output</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/webpack-output.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Recap</Heading>
          <List>
            <Appear>
              <ListItem>
                Focus on <b>bundling</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Traverses dependency graph while processing with <b>loaders</b>{" "}
                and applying <b>plugins</b>. Can you understand the difference?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Configuration</b> declares how to <b>transform</b> source.
                Also inline definitions (code splitting)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/developing"
              textColor="white"
            >
              Developing
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/webpack-dev-server">
              webpack-dev-server
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                0. Execute <code>npm run build -- --watch</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                1. Alter code and see what happens in the terminal
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2.{" "}
                <Link href="https://survivejs.com/webpack/developing/webpack-dev-server">
                  Follow the chapter setup
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                3. Test
                <Link href="https://www.npmjs.com/package/webpack-plugin-serve">
                  webpack-plugin-serve
                </Link>
                *
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/building"
              textColor="white"
            >
              Building
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Managing Webpack Through <b>package.json</b>
          </Heading>
          <CodePane
            lang="json"
            source={require("raw-loader!../examples/npm-scripts.json")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/developing/composing-configuration">
              Composing Configuration
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                The need for <b>different</b> targets - development, production,
                ...
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>How to manage the targets?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Solutions: higher level abstractions, composition
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Option: consume configuration as a dependency</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>webpack-merge</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/merge-1.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <Appear>
            <div>merges to</div>
          </Appear>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/merge-2.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>webpack-merge with webpack</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/merge-3.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/webpack-merge">
              webpack-merge
            </Link>
          </Heading>
          <Image
            src={images.webpackMergePopularity}
            margin="40px auto"
            height="364px"
          />
          <Layout>
            <Link href="https://npm-stat.com/charts.html?package=webpack-merge&from=2015-06-19&to=2018-04-24">
              npm-stat.com
            </Link>
          </Layout>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Related Solutions</Heading>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/webpack-blocks">
                  webpack-blocks
                </Link>{" "}
                - Andy read the book!
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://neutrino.js.org/">neutrino</Link> - Chaining
                DSL
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/create-react-app">
                  create-react-app
                </Link>{" "}
                - Opinionated wrapper for React development. See also{" "}
                <Link href="https://www.npmjs.com/package/react-app-rewired">
                  react-app-rewired
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/nwb">nwb</Link> - Less
                opinionated wrapper for React development
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/kyt">kyt</Link> -
                Common app configuration in a single place
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                See also{" "}
                <Link href="https://www.npmjs.com/package/@angular/cli">
                  @angular/cli
                </Link>
                ,{" "}
                <Link href="https://www.npmjs.com/package/vue-cli">
                  vue-cli
                </Link>
                ,{" "}
                <Link href="https://www.npmjs.com/package/preact-cli">
                  preact-cli
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Exercises</Heading>
          <List>
            <Appear>
              <ListItem>
                0. Port the configuration to{" "}
                <Link href="https://www.npmjs.com/package/webpack-merge">
                  webpack-merge
                </Link>{" "}
                as{" "}
                <Link href="https://survivejs.com/webpack/developing/composing-configuration">
                  in the book
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                1. Try different configuration file layouts (target per file
                etc.). Can you see pros/cons?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2. What would it take to package the configuration into
                something you can consume across multiple projects?
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/source-maps">
              Source Maps
            </Link>
          </Heading>
          <Image src={images.sourcemaps} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Inline Source Maps</Heading>
          <Heading size={4}>
            (<code>devtool: 'eval'</code>)
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/inline-source-map.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Inline Source Maps</Heading>
          <List>
            <Appear>
              <ListItem>
                Inline source maps are <b>included</b> in bundles
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Inline === fast to rebundle, use for development
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Separate Source Maps</Heading>
          <Heading size={4}>
            (<code>devtool: 'source-map'</code>)
          </Heading>
          <div>app.js</div>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/source-map-1.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <div>app.js.map</div>
          <CodePane
            lang="json"
            source={require("raw-loader!../examples/source-map-2.json")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Separate Source Maps</Heading>
          <List>
            <Appear>
              <ListItem>
                Separate source maps are written to <b>separate</b> files
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Separate === slow to generate, use for production
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Use plugins for more control</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Which option to use?</Heading>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://webpack.js.org/configuration/devtool/">
                  Documentation to rescue
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>cheap-module-source-map</b>,{" "}
                <b>cheap-module-inline-source-map</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Webpack 4 comes with good defaults!</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Try out{" "}
                <Link href="https://sokra.github.io/source-map-visualization/">
                  source-map-visualization
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Assets
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/styling"
              textColor="white"
            >
              Styling
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/loading">
              Loading Styles
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <code>use: ["style-loader", "css-loader"]</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/css-loader">
                  css-loader
                </Link>{" "}
                evaluates <code>@import</code> and <code>url()</code> lookups
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/style-loader">
                  style-loader
                </Link>{" "}
                injects CSS to the DOM and implements HMR
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Other formats supported through loaders</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up style loading and examine the output
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/styling/separating-css">
              Separating CSS
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Flash of Unstyled Content (FOUC), important on SSR
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/mini-css-extract-plugin">
                  mini-css-extract-plugin (MCEP)
                </Link>{" "}
                and{" "}
                <Link href="https://www.npmjs.com/package/extract-loader">
                  extract-loader
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up style extraction using the plugin (you
                can also try the loader)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Study{" "}
                <Link href="https://medium.com/webpack/the-new-css-workflow-step-1-79583bd107d7">
                  the proposed CSS workflow
                </Link>
                *
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/images">
              Loading Images
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>To inline or not? Or to sprite?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/url-loader">
                  url-loader
                </Link>{" "}
                inlines (with a <code>limit</code>)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/file-loader">
                  file-loader
                </Link>{" "}
                returns paths and <b>emits</b> files
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Loaders for specific purposes (spriting, srcsets, etc.)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up image loading
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/javascript">
              Loading JavaScript
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Webpack processes ES6 modules but not specific features
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Problematic with legacy browsers!</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/babel-loader">
                  babel-loader
                </Link>{" "}
                and{" "}
                <Link href="https://www.npmjs.com/package/babel-preset-env">
                  babel-preset-env
                </Link>{" "}
                to rescue
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Generate code/polyfills based on a <b>browser definition</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up Babel (target IE 8) and compare the
                output to previous
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/loading/loader-definitions/"
              textColor="white"
            >
              Understanding Loaders
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/loading/loader-definitions">
              Loader Definition
            </Link>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/loader-definition.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Loader Evaluation Order</Heading>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/eval-1.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
          <Appear>
            <div>equals</div>
          </Appear>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/eval-2.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Inline Definitions</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/inline.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary" textColor="white">
            Bundle/code Splitting
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/bundle-splitting">
              Bundle Splitting
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Anti-pattern - <b>Single</b> bundle with <b>application</b> and{" "}
                <b>vendor</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>First step - Separate into two bundles</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Second step - Apply hashes to file names bust cache
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>optimization.splitChunks.cacheGroups</code> can do it
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Webpack 4 does some splitting out of the box</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>AggressiveSplittingPlugin</code> etc. for more control
              </ListItem>
            </Appear>
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
            <code>optimization.splitChunks.cacheGroups</code>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/commons.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up bundle splitting
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/code-splitting">
              Code Splitting
            </Link>
          </Heading>
          <Image src={images.codeSplitting} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <code>import()</code>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/import.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>
                Familiar <code>Promise</code> patterns work here
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Consider{" "}
                <Link href="https://www.npmjs.com/package/react-loadable">
                  react-loadable
                </Link>{" "}
                and others
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b>{" "}
                <Link href="https://survivejs.com/webpack/building/code-splitting/">
                  Set up code splitting as in the book
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Code Splitting Output</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/split-output.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>
                In addition, a small <code>Promise</code> based bit to load the
                code
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/optimizing/build-analysis/"
              textColor="white"
            >
              Build Analysis
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/build-analysis/">
              Analyzing Build Statistics
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                To know what your build consists of, generate{" "}
                <b>build statistics</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use <code>--json</code> for statistics
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use <code>--profile</code> to capture timing information
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Node API gives access to statistics too and you can find a
                couple of plugins
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Plenty of tools for analysis</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Generate stats and analyze through tooling
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/optimizing"
              textColor="white"
            >
              Optimizing
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>
              Minifying === How to convert code into a smaller form without
              losing anything essential?
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/minifying">
              Minifying
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Certain unsafe transformations can <b>break</b> code
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/terser-webpack-plugin">
                  terser-webpack-plugin (webpack default)
                </Link>
                ,{" "}
                <Link href="https://www.npmjs.com/package/uglifyjs-webpack-plugin">
                  uglifyjs-webpack-plugin
                </Link>
                ,{" "}
                <Link href="https://www.npmjs.com/package/babel-minify-webpack-plugin">
                  babel-minify-webpack-plugin
                </Link>
                ,{" "}
                <Link href="https://www.npmjs.com/package/webpack-closure-compiler">
                  Closure Compiler
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                CSS can be minified too through{" "}
                <Link href="https://www.npmjs.com/package/clean-css">
                  clean-css
                </Link>{" "}
                and <Link href="http://cssnano.co">cssnano</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Same for HTML. See{" "}
                <Link href="https://www.npmjs.com/package/posthtml">
                  posthtml
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up{" "}
                <Link href="https://www.npmjs.com/package/terser-webpack-plugin">
                  terser-webpack-plugin
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/tree-shaking">
              Tree Shaking
            </Link>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/tree-1.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <div>shake it with</div>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/tree-2.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/tree-shaking">
              Tree Shaking
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>Relies on ES6 module definition</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                If you author packages, set <code>module</code> field in{" "}
                <b>package.json</b>, precompile everything <b>except</b> module
                definitions
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/babel-plugin-transform-imports">
                  babel-plugin-transform-imports
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up a tree shaking demonstration as in the
                example and examine the output
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/environment-variables">
              Feature Flags
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <code>DefinePlugin</code> replaces free variables. Babel can do
                this too
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/define.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
          <List>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up <code>DefinePlugin</code> and replace as
                above
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames">
              Adding Hashes to Filenames
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Integrating a hash to a filename allows cache busting
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Example: <code>app.d587bbd6e38337f5accd.js</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Common placeholders: <code>[hash]</code>, <code>[name]</code>,{" "}
                <code>[contenthash]</code>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Placeholders</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/placeholders.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <List>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Add hashing to filenames
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/separating-manifest">
              Separating a Manifest
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Webpack generates a <b>manifest</b> to keep track of entries
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Manifest in a <b>vendor</b> bundle can lead to invalidation if{" "}
                <b>app</b> bundle changes!
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Extract to a file or inline to HTML through a plugin
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>optimization.runtimeChunk.name</code> can do the job
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Separate a manifest
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Records</Heading>
          <List>
            <Appear>
              <ListItem>
                Records allow to <b>keep track of module IDs</b> across builds
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/records.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>

          <List>
            <Appear>
              <ListItem>
                Problem: you have a new file (<b>records.json</b>) to manage
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31">
                  Alternative name based approach by Tim Sebastian
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Study{" "}
                <Link href="https://github.com/webpack/webpack.js.org/issues/487">
                  webpack class hierarchy
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Module Ids</Heading>
          <List>
            <Appear>
              <ListItem>
                Modules use numbered ids by default (0, 1, 2, ...)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>optimization.namedModules</code>,{" "}
                <code>optimization.namedChunks</code> returns paths to modules
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Add the fields to the setup
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/performance">
              Performance
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Parallelism through{" "}
                <Link href="https://www.npmjs.com/package/parallel-webpack">
                  parallel-webpack
                </Link>{" "}
                and{" "}
                <Link href="https://www.npmjs.com/package/happypack">
                  happypack
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Consider <b>faster source map variants</b> or skipping even
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Skip polyfills</b> during development
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Disable portions</b> of an application you {"don't"} need
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use <b>DLLs</b> for vendor dependencies (less to rebundle)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Set up Babel to do less work during development
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>Exercise:</b> Try{" "}
                <Link href="https://www.npmjs.com/package/happypack">
                  happypack
                </Link>{" "}
                with Babel*
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Webpack 5
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Upcoming Changes</Heading>
          <List>
            <Appear>
              <ListItem>
                Improved build performance due to persistent cache
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Improved/easier long-term caching (deterministic/size options)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <i>minSize</i>/<i>maxSize</i> per type (css/js) for{" "}
                <b>splitChunks</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>No more automatic polyfills for Node.js</ListItem>
            </Appear>
            <Appear>
              <ListItem>Before trying, solve deprecations!</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://github.com/webpack/changelog-v5">
                  More info at the changelog (wip)
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/webpack/">
            <Heading size={1}>SurviveJS - Webpack</Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="324px" />
          <Heading size={2}>
            by <Link href="https://twitter.com/bebraw">Juho Vepsäläinen</Link>
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
