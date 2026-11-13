# Underreacted Blog

A small React blog built with reusable components and props. `App` composes
`Header`, `About`, and `ArticleList`; `ArticleList` renders an `Article` for
each post in `src/data/blog.js`.

## Run Locally

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To run the checks and create a production
build:

```sh
npm test -- --run
npm run lint
npm run build
```

## Screenshot

![Blog site screenshot](images/demo.png)
