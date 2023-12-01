# \<lotus-card>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i lotus-card
```

## Usage

```html
<script type="module">
  import 'lotus-card/lotus-card.js';
</script>

<lotus-card></lotus-card>
```
# Lotus WebComponent Custom Properties

This document provides a guide on how to use the custom properties available in the `LotusCard` WebComponent. These properties allow for detailed customization of the component's style.

## Available Properties

Below are the custom properties you can use:

### Card Container

- `--lotus-card-background`: Sets the background color of the card.
- `--lotus-card-border`: Defines the border style of the card.
- `--lotus-card-border-radius`: Determines the border radius of the card, allowing for rounded edges.
- `--lotus-card-box-shadow`: Applies a shadow around the card to give it depth.
- `--card-blur-bg`: Sets a blurry background for the card.
- `--lotus-font-family`: Defines the font family used in the component's text.

### Card Image

- `--lotus-card-img-border-radius`: Sets the border radius for images within the card.

### Card Text Content 
- `--content-flex-direction`: Defines the flex-direction for the card's content layout.
- `--content-align-items`: Aligns items vertically within the card.
- `--content-justify-content`: Aligns items horizontally within the card.
- `--card-content-color`: Sets the text color for the card's text content.
- `--content-title-top-margin`: Adjusts the top margin of the card's title.
- `--content-title-bottom-margin`: Adjusts the bottom margin of the card's title.
- `--content-description-top-margin`: Adjusts the top margin of the card's description.
- `--content-description-bottom-margin`: Adjusts the bottom margin of the card's description.

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
