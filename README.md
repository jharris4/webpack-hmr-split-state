# webpack-hmr-split-state
Webpack hot module replacement with react-router code splitting of components with state

Running the example in dev mode with HMR
------------
```shell
$ npm run dev
```
In dev mode, code splitting is disabled, and HMR (Hot Module Replacement is enabled).

Click the buttons to change state, then edit a source file and watch HMR do its magic.

Building for production with code splitting
------------
```shell
$ npm run deploy
$ npm run start
```
In production mode, all routes are split into different bundles and dynamically loaded, but HMR is disabled.

See the dist directory to examine the code split bundles.
