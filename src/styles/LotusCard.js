import {css} from 'lit';

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
    word-wrap: break-word;
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
`;
