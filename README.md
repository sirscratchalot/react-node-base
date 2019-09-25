# Client/Server setup for learning

This is a base setup React/NodeJS setup intended for use in a collaborative learning project.
Anyone in need of an easy React/Redux and NodeJS/Express can of course start here.

## Base setup for project based on "Simple React Fullstack"
 - Added react-redux dependency
 - Updated versions in package.json using "npm-check-updates"
 - Added babelRC to support building JSX, work with classproperties.
 - Tweaked entrypoints to make ESLint happy.
 - Added ESLint rules.

 In all dependencies are modern and code builds now.

## Initial setup

- Clone the repo
- In the repo folder run 'npm install' or 'yarn install'
- To run in development mode: 'npm run dev' or 'yarn dev'
This will run the frontend on localhost:3000 and the nodejs server on localhost:8080, both auto refreshing on code updates.

- Build using 'npm run build' or 'yarn build'
- Run only frontend 'npm run client' or 'yarn client'
- Run only server 'npm run server' or 'yarn server'

