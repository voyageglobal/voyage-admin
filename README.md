# Voyage Admin

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5d5c844-ac91-449d-b399-e6f46166a1cb/deploy-status)](https://app.netlify.com/sites/voyage-admin/deploys)

## Description

The admin web app for Voyage.

Voyage is a service that allows users to plan their trips and look for relevant knowledge about cities.

## Documentation

Useful documentation can be found in the [docs](./docs) folder.

### Application stack

- Next.js (App Router)
- React
- TailwindCSS
- DaisyUI
- TypeScript
- @tanstack/react-table
- @tanstack/react-query
- Jest?
- React Testing Library
- Playwright

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
**Demo screenshots**:
![Dashboard page](https://github.com/user-attachments/assets/b32b1b0d-6f01-413e-8606-d3203affd2ca)
![Guides page](https://github.com/user-attachments/assets/2628bdd4-7949-4a9f-b00f-3862d78f8e57)

