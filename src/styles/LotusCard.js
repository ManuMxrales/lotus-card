import { css } from 'lit';

export default css`
  .card {
    max-width: 100%;
    padding: 0.5rem;
    margin: 0.5rem;
    box-sizing: border-box;
    background-color: var(--lotus-card-background, rgba(255, 255, 255, 0.15));
    transition: background-color 0.5s ease;
    border: var(--lotus-card-border, 1px solid rgba(255, 255, 255, 0.2));
    border-radius: var(--lotus-card-border-radius, 10px);
    box-shadow: var(--lotus-card-box-shadow, 0 8px 32px 0 rgba(20, 7, 7, 0.5));
    backdrop-filter: var(--card-blur-bg, blur(4px));
    -webkit-backdrop-filter: var(--card-blur-bg, blur(4px));
    font-family: var(--lotus-font-family, 'Josefin Sans', sans-serif);
  }
  .card img {
    max-width: 100%;
    border-radius: var(--lotus-card-img-border-radius, 8px);
  }
  .content {
    max-height: 300px;
    overflow-y: auto;
    word-wrap: var(--content-word-wrap, anywhere);
    display: flex;
    flex-direction: var(--content-flex-direction, column);
    align-items: var(--content-align-items, center);
    justify-content: var(--content-justify-content, center);
    color: var(--card-content-color, inherit);
  }
  .content h3 {
    margin-top: var(--content-title-top-margin, 1em);
    margin-bottom: var(--content-title-bottom-margin, 1em);
  }
  .content p {
    margin-top: var(--content-description-top-margin, 1em);
    margin-bottom: var(--content-description-bottom-margin, 1em);
  }

  .clickable {
    cursor: pointer;
    transition: var(--lotus-card-transition, box-shadow 0.5s ease);
  }

  .clickable:hover {
    box-shadow: var(--lotus-card-hover-box-shadow, 2px 1px 32px 0 rgba(100, 100, 100, 0.5));
  }

  .circle {
    display: var(--circle-display, flex);
    align-items: var(--circle-align-items, center);
    justify-content: var(--circle-justify-content, center);
    flex-direction: var(--circle-flex-direction, column);
    max-width: 100%;
    padding: var(--lotus-circle-padding, 0.5rem);
    box-sizing: border-box;
    font-family: var(--lotus-font-family, 'Josefin Sans', sans-serif);
  }

  .circle img {
    border-radius: 50%;
    width: var(--lotus-circle-width, 100px);
    height: var(--lotus-circle-height, 100px);
    padding: var(--lotus-circle-padding, 5px);
    background-color: var(--lotus-circle-background, rgba(255, 255, 255, 0.15));
    transition: 1s ease-in;
    box-shadow:  var(--lotus-circle-box-shadow, 0 8px 32px 0 rgba(20, 7, 7, 0.5));
    object-fit: var(--lotus-circle-object-fit, cover);
  }

  .circle .content {
    max-height: 300px;
    overflow-y: auto;
    word-wrap: var(--content-word-wrap, anywhere);
    display: flex;
    flex-direction: var(--content-flex-direction, column);
    align-items: var(--content-align-items, center);
    justify-content: var(--content-justify-content, center);
    color: var(--card-content-color, inherit);
    gap: var(--content-gap, 0.5em);
  }

  .circle .content h3 {
    margin-top: var(--content-title-top-margin, 1em);
    margin-bottom: var(--content-title-bottom-margin, 0em);
  }
  .circle .content p {
    margin-top: var(--content-description-top-margin, 0em);
    margin-bottom: var(--content-description-bottom-margin, 0em);
  }

  .radiusHover {
    cursor: pointer;
  }

  .radiusHover img:hover {
    background-color: var(--lotus-circle-hover-background, #0004e9);
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  }


`;
