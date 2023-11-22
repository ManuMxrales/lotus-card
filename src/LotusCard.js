import { html, LitElement, nothing } from 'lit';
import { when } from 'lit/directives/when.js';
import style from './styles/LotusCard.js';

export class LotusCard extends LitElement {
  static get styles() {
    return [style];
  }

  static get properties() {
    return {
      cardTitle: { type: String, attribute: 'card-title' },
      description: { type: String },
      imageUrl: { type: String },
      hasImage: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.cardTitle = 'Title';
    this.description = 'Description';
    this.hasImage = false;
  }

  get _cardImage() {
    return html` ${when(
      this.hasImage,
      () => html`<img src="${this.imageUrl}" alt="${this.cardTitle}" />`,
      () => nothing
    )}`;
  }

  get _cardText() {
    return html`
      ${this.cardTitle ? html`<h3>${this.cardTitle}</h3>` : nothing}
      ${this.description ? html`<p>${this.description}</p>` : nothing}
    `;
  }

  render() {
    return html`
      <div class="card">
        ${this._cardImage}
        <div class="content">${this._cardText}</div>
      </div>
    `;
  }
}
