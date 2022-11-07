# Tofu Apps website

This repository holds the website source code for Tofu Apps.

## Setup
```BASH
npm ci
```
## Developing
```bash
# start server with automatic reload for development
npm run dev

# you can additionally open the webpage in a new browser tab
npm run dev -- --open
```

## Building
```bash
# builds a fully static site to `docs` folder
# `docs` is used because that's what github pages requires.
npm run build
```

## Production
```bash
# test the production static site build (with express.js)
npm run preview
```
