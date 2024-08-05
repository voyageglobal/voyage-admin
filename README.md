# Voyage Admin

[![Netlify Status](https://api.netlify.com/api/v1/badges/3c5f0c98-194c-402e-8c7f-a8b7fdccae12/deploy-status)](https://app.netlify.com/sites/voyage-admin/deploys)

## Description

The admin web app for Voyage.

Voyage is a service that allows users to plan their trips and look for relevant knowledge about cities.

## Documentation

Useful documentation can be found in the [docs](./docs) folder.

### Application stack

- Next.js
- React
- DaisyUI
- TypeScript
- Jest
- React Testing Library

## Installation

```bash
$ npm install
```

## Environment variables

```bash
# Create a .env file in the root of the project and add the environment variables
# The .env.example file contains the list of required environment
```

## Running the app

```bash
# development
$ npm run dev
```

## Swagger

The swagger UI is available at the following endpoint: `/api/docs`

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
