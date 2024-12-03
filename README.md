# Playwright E2E tests for Lokalise

This repo is used to demonstrate various testing scenarios with Playwright 🎭 with Node.js for Lokalise project.

## Install dependencies

Start by cloning the repo and installing the dependencies:

`npm install`

## Run tests

Use the VS Code Extension to run the tests in the tests folder from VS Code or run the following command in the terminal:

`npx playwright test --ui`

### Custom scripts:

`npm run test:api` will run only the backend API tests.

`npm run test:ui` will run only the UI tests.

`npm run test` will run all tests across projects.

## Structure

Project contains both Backend and Web E2E tests.

Backend logic is located in `service` directory and Web logic is in `pages`.

## Required .env data

Make sure to add .env file in the root of repository.

`nano .env`

Content of .env file: 
```
EMAIL=
PASSWORD=
TOKEN=
PROJECT_ID=
```